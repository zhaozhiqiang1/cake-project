import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import CartTab from "./component/CartTab"
import Shopping from "./routes/Shooping zzq/Shopping"
import store from "./store"
import "./static/css/reset.min.css"
import "./static/css/html.css"

let element = (
    <Provider store={store}>
        <div style={{width:"100%",height:"100%"}}>
            <CartTab/>
        </div>
        {/*<div>*/}
            {/*<Shopping/>*/}
        {/*</div>*/}
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
