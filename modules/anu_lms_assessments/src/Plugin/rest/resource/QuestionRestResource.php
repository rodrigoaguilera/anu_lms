<?php

namespace Drupal\anu_lms_assessments\Plugin\rest\resource;

use Drupal\anu_lms_assessments\Entity\AssessmentQuestionResult;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "question_rest_resource",
 *   label = @Translation("Question rest resource"),
 *   uri_paths = {
 *     "create" = "/assessments/question"
 *   }
 * )
 */
class QuestionRestResource extends ResourceBase {

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->getParameter('serializer.formats'),
      $container->get('logger.factory')->get('anu_lms_assessments'),
    );
  }

  /**
   * TODO: Refactor and merge the logic with AssessmentRestResource.
   */
  public function post(array $payload) {
    try {
      // TODO: Permissions.
      // TODO: Validation.
      /*   // You must to implement the logic of your REST Resource here.
      // Use current user after pass authentication to validate access.
      if (!$this->currentUser->hasPermission('access content')) {
      throw new AccessDeniedHttpException();
      }*/

      $questionId = $payload['questionId'];
      $value = $payload['value'];

      $question = \Drupal::entityTypeManager()
        ->getStorage('assessment_question')
        ->load($questionId);

      $question = \Drupal::service('entity.repository')
        ->getTranslationFromContext($question);

      $question_result = \Drupal::entityTypeManager()
        ->getStorage('assessment_question_result')
        ->create([
          'type' => $question->bundle(),
          'aqid' => $question,
        ]);

      // TODO: Refactor.
      $correct_answer = NULL;
      if ($question->bundle() === 'short_answer') {
        $question_result->set('field_question_response', $value);
        $question_result->set('is_correct', AssessmentQuestionResult::RESULT_NOT_APPLICABLE);
        $correct_answer = $question->field_correct_answer->getString();
      }
      elseif ($question->bundle() === 'long_answer') {
        $question_result->set('field_question_response_long', $value);
        $question_result->set('is_correct', AssessmentQuestionResult::RESULT_NOT_APPLICABLE);
        $correct_answer = $question->field_correct_answer_long->getString();
      }
      elseif ($question->bundle() === 'scale') {
        $correct_answer = (int) $question->field_scale_correct->getString();
        $value = (int) $value;
        $question_result->set('field_question_response_scale', $value);
        $is_correct = $correct_answer === $value ? AssessmentQuestionResult::RESULT_CORRECT : AssessmentQuestionResult::RESULT_INCORRECT;
        $question_result->set('is_correct', $is_correct);
      }
      elseif ($question->bundle() === 'multiple_choice' || $question->bundle() === 'single_choice') {
        $options = $question->field_options->referencedEntities();
        $responses = (array) $value;
        $correct_answer = [];
        foreach ($options as $option) {
          $is_correct = !!$option->field_single_multi_choice_right->getString();
          if ($is_correct) {
            $correct_answer[] = (int) $option->id();
          }
        }

        $response_entities = \Drupal::entityTypeManager()
          ->getStorage('paragraph')
          ->loadMultiple($responses);
        foreach ($response_entities as $response_entity) {
          // Setting flag for workaround for preventing re saving paragraph and changing parent_id.
          // Implementation made as patch for entity_reference_revisions module.
          $response_entity->dontSave = TRUE;
        }
        $question_result->set('field_single_multi_choice', $response_entities);

        // TODO: Multiple correct values in radio?
        $is_correct = $responses == $correct_answer ? AssessmentQuestionResult::RESULT_CORRECT : AssessmentQuestionResult::RESULT_INCORRECT;
        $question_result->set('is_correct', $is_correct);
      }

      $question_result->save();
    }
    catch (\Throwable $exception) {
      $this->logger->error($exception->getMessage() . ' Trace: ' . $exception->getTraceAsString());
      throw new BadRequestHttpException('An error occurred during request handling');
    }

    return new ModifiedResourceResponse([
      'correctAnswer' => $correct_answer,
    ], 200);
  }

}
