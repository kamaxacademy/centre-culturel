import React from 'react';
import Members from './Members/Member';
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

const Contact = (props) => {

    const classes = useStyles();
    // const { title, subTitle, icon } = props;
    return (
        // <div>
        //     <h1>Contact Page</h1>
        // </div>

       <>

       <Paper elevation={0} square>
       <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                <PeopleOutlineTwoToneIcon fontSize="large" />
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                       Page Header
                       </Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        Page description
                        </Typography>
                </div>
            </div>
       </Paper>
        <Members />
       </>
    );
}

export default Contact;
