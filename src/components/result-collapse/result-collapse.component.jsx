import { Collapse, Card, CardContent, Typography } from '@material-ui/core';

export const ResultCollapse = ({ collapse, description }) => {
  return (
    <Collapse in={collapse}>
      <Card>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
};
