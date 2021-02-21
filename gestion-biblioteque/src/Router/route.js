import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import QrCodeScanner from '../components/QrCode/QrCodeScanner';

import CanvasComponent from '../components/Canvas/CanvasComponent';
import Bookshelf from '../components/Books/Bookshelf';
import BarcodeSearch from '../components/BarcodeSearch/BarcodeSearch';

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
     {
        path:"/canvas",
        exact: true,
        name: "Canvas",
        component: CanvasComponent,
        toolbar: () => <p>Canvas</p>,
    },
     {
        path:"/bookshelf",
        exact: true,
        name: "Bookshelf",
        component: Bookshelf,
        toolbar: () => <p>Bookshelf</p>,
    },
     {
        path:"/barcode",
        exact: true,
        name: "Barcode Search",
        component: BarcodeSearch,
        toolbar: () => <p>Barcode search</p>,
    }

]



export default routes;
