import React from 'react';
import Slider from '@material-ui/core/Slider';
import LessonGrid from '../LessonGrid';
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'

const StyledBox = withStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(8),
    }
  }
}))(Box);

const StyledButton = withStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  }
}))(Button);

const StyledTypography = withStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  }
}))(Typography);

const ErrorSlider = withStyles(theme => ({
  root: {
    color: theme.palette.error.main + ' !important',
  },
}))(Slider);

const SuccessSlider = withStyles(theme => ({
  root: {
    color: theme.palette.success.main + ' !important',
  },
}))(Slider);

const SliderWithValidation = ({ value, correctValue, ...props}) => {
  if (correctValue !== null && value === correctValue) {
    return <SuccessSlider value={value }{...props} disabled />;
  }

  if (correctValue !== null && value !== correctValue) {
    return <ErrorSlider value={value }{...props} disabled />;
  }

  return <Slider value={value} {...props} />;
}

const QuizScale = ({ question, scale, value, correctValue, isSubmitting, onChange, onSubmit }) => {

  const marks = [
    { value: scale.from, label: scale.from },
    { value: scale.to, label: scale.to },
  ];

  return (
    <StyledBox>
      <LessonGrid>
        <Typography variant="h4" component="h4">
          {question}
        </Typography>
        <br/>
        <SliderWithValidation
          value={value}
          marks={marks}
          min={scale.from}
          max={scale.to}
          correctValue={correctValue}
          onChange={onChange}
          valueLabelDisplay="on"
          disabled={correctValue === null ? isSubmitting : true}
        />
        {correctValue !== null &&
        <StyledTypography>
          <strong>Correct answer:</strong> {correctValue}
        </StyledTypography>
        }
        {correctValue === null && onSubmit &&
        <StyledButton variant="contained" onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting &&
          <>
            <CircularProgress size={20}/>&nbsp;&nbsp;&nbsp;&nbsp;
          </>
          }
          Submit answer
        </StyledButton>
        }
      </LessonGrid>
    </StyledBox>
  );
}

export default QuizScale;