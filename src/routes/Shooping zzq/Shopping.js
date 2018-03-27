import React,{Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types"
import {Link} from "react-router-dom"
import "./shopping.less"

class Shopping extends Component {
    constructor(props){
        super(props)
    }

    static defaultProps = {

    };

    render(){
        return <div className="shop">
            <div>
                <div className="shop-notice">
                    <span>公告</span>
                    <p>21cake注册未下单用户，首单购买298元（实付）及以上蛋糕类商品，随单赠送：小切块蛋糕一份</p>
                </div>
                <div className="shop-detail">
                    <div className="shop-cart">
                        <div className="shop-img">
                            <img src="http://static.21cake.com/public/images/a6/b4/4d/9c0f29a95032c9e8e777e06d04e28e00.jpg" alt=""/>
                        </div>
                        <div className="shop-message">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect()(Shopping)