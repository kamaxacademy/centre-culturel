import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from '@material-ui/lab'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles (theme =>(
  {  root:{
        top: theme.spacing(9)
    }}
))




const Notification = (props) => {

    const handleClose= (event, reason)=>{

          if (reason === 'clickaway') {
                return;
            }

        setNotify({
            ...notify,
            isOpen:false
        })
    }

    const classes = useStyles ()
    const {notify, setNotify} = props
    return (
       <Snackbar
       className={classes.root}
       open={notify.isOpen}
       autoHideDuration={3000}
       anchorOrigin={{
           vertical:'top',
           horizontal: 'right'
           
       }}
        onClose={handleClose}

       >
           <Alert 
           severity={notify.type}
            onClose={handleClose}
           >
            {notify.message}
           </Alert>
       </Snackbar>
    );
}

export default Notification;
