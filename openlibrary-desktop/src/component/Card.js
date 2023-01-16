import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import black from '../assets/img/blackbg.jpg'
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    height: 275,
    display: 'flex',
    backgroundColor:'gray'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
   cover: {
    width: 151,
  },
});

export default function SimpleCard(props) {

    const {title, author} = props
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>

    <CardMedia 
    className={classes.cover}
    // style = {{ height: 0, width:50, paddingTop: '40%'}}
       style = {{width:50}}
    image={black}
    title="Live from space album cover"
    />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {title}
        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {author}
        </Typography>
        
      </CardContent>

      
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}