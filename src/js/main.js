/* ===============================
 * This is the main JavaScript file, it hosts all of our imports;
 * =============================== */

// imports
import Helpers from "./imports/helpers"
import React from 'react'
import ReactDOM from 'react-dom'
import TestComponent from './components/Test/Test.jsx'

// set the helpers class as a window method that everything can access
window.helpers = new Helpers;

ReactDOM.render(
    <TestComponent/>,
    document.querySelector('body')
)
