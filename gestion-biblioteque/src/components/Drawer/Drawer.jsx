import React from 'react';
import {Drawer as MUIDrawer,List, ListItem , ListItemIcon, ListItemText} from '@material-ui/core'
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    // margin:'20px'
  }


});

const Drawer = (props) => {
    const {history} = props
    const classes = useStyles();
    const itemList =[
        {
            text: "Home",
            icon: <InboxIcon />,
            onClick: () => history.push("/")
        },
        {
      text: "About",
      icon: <MailIcon />,
      onClick: () => history.push("/about")
    },
    {
      text: "Contact",
      icon: <MailIcon />,
      onClick: () => history.push("/contact")
    },
    {
      text: "Barcode",
      icon: <MailIcon />,
      onClick: () => history.push("/barcode")
    },
    {
      text: "Bookshelf",
      icon: <MailIcon />,
      onClick: () => history.push("/books")
    }
    ,
    {
      text: "Member",
      icon: <MailIcon />,
      onClick: () => history.push("/member")
    },
    
        ];
    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List >
                {itemList.map((item,index)=>{
                    const {text, icon, onClick} = item;
                    return (
                        <ListItem button key={text} onClick={onClick} >
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={text} />
                </ListItem>
                    )
                })}
            </List>
        </MUIDrawer>
    );
}

export default withRouter(Drawer);
