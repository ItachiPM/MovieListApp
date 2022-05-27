import  *  as  ReactDOMClient  from  'react-dom/client' ;
import React from 'react';
import {App} from "./components/App/App";

import './index.css'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot((container as HTMLElement))
root.render(<App/>)
