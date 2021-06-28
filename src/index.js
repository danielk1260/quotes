import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Quotes from './components/Resources/Quotes';
import './index.css';

// http://www.estidia.eu/wp-content/uploads/2018/04/Savin-NY-Website-Background-Web.jpg

// document.body.style = 'background-image: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2018/10/Abstract-Geometric-Background-Grey.jpg"); background-repeat: no-repeat; background-size: 100% 100%; background-attachment: fixed;';


ReactDOM.render(<Quotes />, document.getElementById('root'));