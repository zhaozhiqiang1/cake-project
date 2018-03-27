import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from "./routes/Home gmm/Home";
import './index.less'
import Header from "./component/Header";
import Nav from "./component/Nav";
import './static/css/reset.min.css'
ReactDOM.render(<div>
    <Header/>
    <Home/>
    <Nav/>
</div>,window.root);
