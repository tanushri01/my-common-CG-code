import React from 'react';

import { List, ListItem, ListItemText, Typography } from '@/components';
import { StepBox } from '@/styles';
import {
  FIRST_STEP_HEADING,
  FIRST_STEP_SUBHEADING1,
  FIRST_STEP_SUBHEADING2,
  FIRST_STEP_SUBHEADING3,
  FIRST_STEP_SUBHEADING4,
  FIRST_STEP_SUBHEADING5,
  FIRST_STEP_SUBHEADING6,
} from '@/constant';

/**
 * @page {FirstStep} - FirstStep for the First form
 * @return {JSX.Element}
 */
const FirstStep = (): JSX.Element => (
  <StepBox>
    <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
      {FIRST_STEP_HEADING}
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary={FIRST_STEP_SUBHEADING1} />
      </ListItem>
      <ListItem>
        <ListItemText primary={FIRST_STEP_SUBHEADING2} />
      </ListItem>
      <ListItem>
        <ListItemText primary={FIRST_STEP_SUBHEADING3} />
      </ListItem>
      <ListItem>
        <ListItemText primary={FIRST_STEP_SUBHEADING4} />
      </ListItem>
      <ListItem>
        <ListItemText primary={FIRST_STEP_SUBHEADING5} />
      </ListItem>
      <ListItem>
        <ListItemText primary={FIRST_STEP_SUBHEADING6} />
      </ListItem>
    </List>
    <Typography>
      The progress bar above will tell you how far along you are.
    </Typography>
  </StepBox>
);

export default FirstStep;
