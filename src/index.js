import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter, Route} from "react-router-dom"
import './static/css/reset.min.css';
import './static/css/index.less';
// import './static/css/bootstrap.css';

import Sort from "./routes/Sort hhw/Sort"
import Header from "./component/Header";
import Nav from "./component/Nav";
import SortDetail from "./routes/Sort hhw/SortDetails/SortDetail";

ReactDOM.render(
    <div className="sort">
        <Header/>
        {/*<SortDetail />*/}
        <Sort/>

        <Nav/>
    </div>, document.getElementById('root'));

