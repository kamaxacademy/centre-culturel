  
import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import { checkPropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));

const QrCodeScanner = () => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    
  const generateQrCode = async (props) => {

    
    try {
//         var opts = {
//   errorCorrectionLevel: 'H',
//   type: 'image/jpeg',
//   quality: 0.3,
//   margin: 1,
//   color: {
//     dark:"#010599FF",
//     light:"#FFBF60FF"
//   }
// }
     // const response = await QRCode.toDataURL('text', opts);
       const response = await QRCode.toDataURL(text);
          console.log(response)
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }


    return (
       <Grid container spacing={2}>
             <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                 <TextField 
                 label="Enter text Here "
                onChange={(e) => setText(e.target.value)}
                 />
                 <Button 
                 className={classes.btn}
                 variant="contained" 
                 color="primary"
                  onClick={() => generateQrCode()}
                 >Generate</Button>

                 <img src={imageUrl}/>
             </Grid>
       </Grid>
    );
}

QrCodeScanner.protoTypes={
 // generateEvent: checkPropTypes.func
}

export default QrCodeScanner;
