import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import QrCodeScanner from '../components/QrCode/QrCodeScanner';


const routes = [
    {
        path:"/",
        exact: true,
        name: "Dashboard",
        component: HomePage,
        toolbar: () => <p>Dashboard</p>,
    },
     {
        path:"/contact",
        exact: true,
        name: "Contact",
        component: Contact,
        toolbar: () => <p>Tool</p>,
    },
    {
        path:"/qrcode",
        exact: true,
        name: "Code Scanner",
        component: QrCodeScanner,
        toolbar: () => <p>QR Scanneer</p>,
    },

]



export default routes;
