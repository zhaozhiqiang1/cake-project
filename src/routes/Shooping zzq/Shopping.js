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
                {/*公告栏*/}
                <div className="shop-notice">
                    <span>公告</span>
                    <p>21cake注册未下单用户，首单购买298元（实付）及以上蛋糕类商品，随单赠送：小切块蛋糕一份</p>
                </div>
                {/*详情列表*/}
                <div className="shop-detail">
                    {/*详情列表顶部*/}
                    <div className="shop-cart">
                        {/*图片区域*/}
                        <div className="shop-img">
                            <img src="http://static.21cake.com/public/images/a6/b4/4d/9c0f29a95032c9e8e777e06d04e28e00.jpg" alt=""/>
                        </div>
                        {/*详情详细*/}
                        <div className="shop-message">
                           <h2>Bailey's Love Triangle
                               <br/>
                            <span>百利甜情人</span>
                           </h2>
                            <span>规格：2.0磅</span>
                            <p>￥298.00</p>
                            <div className="shop-btn">
                                <a href="javascript:;" className="less">-</a>
                                <span>0</span>
                                <a href="javascript:;" className="add">+</a>
                            </div>
                        </div>
                    </div>
                    {/*详情列表底部*/}
                    {/*有些  有可能没有需要根据传过来的值进行判断*/}
                    <div className="shop-bottom">
                       <span>
                           <img src={require("./cart-laid.png")} alt=""/>
                       </span>
                        <p>每份含免费餐具10套</p>
                    </div>
                </div>
            </div>
            <div className="shop-flex">
                 <div className="shop-price">
                     <h3>￥566.00</h3>
                     <p>商品</p>
                 </div>
                <div className="deal">
                    下单
                </div>
            </div>
        </div>
    }
}

export default connect()(Shopping)