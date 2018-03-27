import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.min.css';
import './static/css/index.less';
// import './static/css/bootstrap.css';
// import "./sort.less"


// import App from './App';
import Sort from "./routes/Sort hhw/Sort"
import Header from "./component/Header";
import Nav from "./component/Nav";

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className="sort">
    <Header/>
    <Sort/>
    <Nav/>
</div>, document.getElementById('root'));
// registerServiceWorker();
