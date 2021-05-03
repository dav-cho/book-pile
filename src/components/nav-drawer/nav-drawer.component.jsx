import { Link } from 'react-router-dom';

import {
  Collapse,
  Container,
  Link as MuiLink,
  Button,
  Typography,
} from '@material-ui/core';

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
  const { container, muiLink, menuOption } = useStyles();

  return (
    <Collapse in={openState}>
      <Container className={container}>
        {drawerItems.map(item => {
          const { name, path } = item;

          return (
            <MuiLink
              className={muiLink}
              component={Link}
              to={path}
              underline="none"
              key={name}
            >
              <Button>
                <Typography className={menuOption} variant="h6">
                  {name}
                </Typography>
              </Button>
            </MuiLink>
          );
        })}
      </Container>
    </Collapse>
  );
};
