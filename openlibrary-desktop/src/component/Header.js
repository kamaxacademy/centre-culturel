import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
const drawerWidth = 290;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#fff',
        position:"fixed"
        
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },

      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
    
    // searchInput: {
    //     opacity: '0.6',
    //     padding: `0px ${theme.spacing(1)}px`,
    //     fontSize: '0.8rem',
    //     '&:hover': {
    //         backgroundColor: '#f2f2f2'
    //     },
    //     '& .MuiSvgIcon-root': {
    //         marginRight: theme.spacing(1)
    //     }
    // },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      
}))



const Header = ()=>{
        
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    return (

    <AppBar  className={clsx(classes.appBar, classes.root, {
        [classes.appBarShift]: open,
      })}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
            <Grid container alignItems="center">
            <Grid item>
                        <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                               </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                 </Grid>
            </Grid>
        </Toolbar>
        
    </AppBar>
    //     <AppBar
    //     position="fixed"
    //     className={clsx(classes.appBar, {
    //       [classes.appBarShift]: open,
    //     })}
    //   >
    //     <Toolbar>
    //       <IconButton
    //         color="inherit"
    //         aria-label="open drawer"
    //         onClick={handleDrawerOpen}
    //         edge="start"
    //         className={clsx(classes.menuButton, {
    //           [classes.hide]: open,
    //         })}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" noWrap>
    //         Mini variant drawer
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    )
}

export default Header;