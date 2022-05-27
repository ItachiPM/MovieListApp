import  *  as  ReactDOMClient  from  'react-dom/client' ;
import React from 'react';
import {App} from "./components/App/App";

import './index.css'
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot((container as HTMLElement))
root.render(<BrowserRouter><App/></BrowserRouter>)
