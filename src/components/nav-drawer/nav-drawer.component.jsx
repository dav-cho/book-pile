import { Collapse, Container, Button, Typography } from '@material-ui/core';

import { useStyles } from './nav-drawer.styles';

const drawerItems = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'options',
    path: '/options',
  },
  {
    name: 'help',
    path: 'help',
  },
];

export const NavDrawer = ({ openState }) => {
  const { container, menuOption } = useStyles();

  return (
    <Collapse in={openState}>
      <Container className={container}>
        {drawerItems.map(item => {
          const { name, path } = item;

          return (
            <Button key={path}>
              <Typography className={menuOption} variant="h6">
                {name}
              </Typography>
            </Button>
          );
        })}
      </Container>
    </Collapse>
  );
};
