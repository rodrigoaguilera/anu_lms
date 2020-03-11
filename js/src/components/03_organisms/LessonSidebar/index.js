import React from 'react';
import { Box, Card, Link, styled, Typography, withStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import LessonList from '../../01_atoms/LessonList'

const StyledCard = withStyles({
  root: {
    borderRadius: 0,
  }
})(Card);

const StyledCardMediaLink = withStyles({
  root: {
    '&:hover': {
      textDecoration: 'none',
    }
  }
})(Link);

const StyledCardMedia = withStyles({
  root: {
    height: '150px',
    position: 'relative',
  }
})(CardMedia);

const StyledCardMediaOverlay = withStyles({
  root: {
    background: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})(Box);

const StyledCardMediaTypography = withStyles(theme => ({
  root: {
    color: 'white',
    fontWeight: 'bold',
    padding: theme.spacing(2),
    position: 'relative',
  }
}))(Typography);

const StyledTypography = withStyles(theme => ({
  root: {
    fontSize: '0.75em',
    fontWeight: 'bold',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.875em',
      paddingBottom: theme.spacing(1.5),
      paddingTop: theme.spacing(1.5),
    }
  }
}))(Typography);

const LessonSidebar = ({module}) => (
  <Box>

    <StyledCard>
      <StyledCardMediaLink href={module.path}>
        <StyledCardMedia image={module.image.url} title={module.title}>
          <StyledCardMediaOverlay/>
          <StyledCardMediaTypography>{module.title}</StyledCardMediaTypography>
        </StyledCardMedia>
      </StyledCardMediaLink>
    </StyledCard>

    {module.lessons.length > 0 &&
    <Box>
      <StyledTypography>Module's content</StyledTypography>
      <LessonList lessons={module.lessons} assessment={module.assessment} fontSize="small" />
    </Box>
    }

  </Box>
);

export default LessonSidebar;