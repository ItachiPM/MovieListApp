import *  as  ReactDOMClient from 'react-dom/client' ;
import React from 'react';
import {Main} from "./components/Main/Main";

import './index.css'
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot((container as HTMLElement))
root.render(<BrowserRouter><Main/></BrowserRouter>)
