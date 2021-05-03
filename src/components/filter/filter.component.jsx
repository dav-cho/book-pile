import { useState } from 'react';

import { Collapse, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useStyles } from './filter.styles';

export const Filter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleFilterDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const options = [
    {
      name: 'option 1',
    },
    {
      name: 'option 2',
    },
    {
      name: 'option 3',
    },
  ];

  const {
    filterContainer,
    filterText,
    filterIcon,
    optionsContainer,
    option,
  } = useStyles();

  return (
    <div className={filterContainer}>
      <Button onClick={toggleFilterDrawer}>
        <Typography className={filterText} variant="h3">
          filter
        </Typography>
        {drawerOpen ? (
          <RemoveIcon className={filterIcon} />
        ) : (
          <AddIcon className={filterIcon} />
        )}
      </Button>
      <Collapse className={optionsContainer} in={drawerOpen} transition={50}>
        {options.map(({ name }) => (
          <Button key={name}>
            <Typography className={option} variant="h6">
              {name}
            </Typography>
          </Button>
        ))}
      </Collapse>
    </div>
  );
};
