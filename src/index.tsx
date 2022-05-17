import  *  as  ReactDOMClient  from  'react-dom/client' ;
import React from 'react';
import {Main} from "./components/Main/Main";

import './index.css'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot((container as HTMLElement))
root.render(<Main/>)
