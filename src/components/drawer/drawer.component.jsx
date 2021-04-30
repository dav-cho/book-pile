import { List, ListItem, ListItemText } from '@material-ui/core';

import { StyledDrawer, useStyles } from './drawer.styles';

export const Drawer = ({ items, openState }) => {
  const { drawerList, listItemText, listOption } = useStyles();

  return (
    <StyledDrawer elevation={0} anchor="top" open={openState}>
      <List className={drawerList}>
        {items.map((item, index) => (
          <ListItem button key={index} className={listOption}>
            <ListItemText className={listItemText}>{item.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};
