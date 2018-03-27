import React, {Component} from "react"
import {connect} from "react-redux"
import propTypes from "prop-types"
import "./cartTab.less"

import {getCartDetail} from "../api-zzq";

class CartTab extends Component {
    constructor(props) {
        super(props);
        this.state = {active: ["1.0磅", "1.5磅", "2.0磅", "3.0磅", "5.0磅", "更多"], auto: true, step: 0}
    }
    static defaultProps = {};
    async componentDidMount(){
        console.log(getCartDetail);
        // let data = await getCartDetail();
        // console.log(data);
    }

    render() {
        let {active, auto,step} = this.state;
        return <div>
            <i className="hide-button" ref="show" onClick={() => {
                if (!auto) {
                    this.refs.hide.classList.remove("hide");
                    this.refs.show.style.display = "none";
                    this.setState({auto: true})
                }
            }}>
            </i>
            <div className="cart-tab">
                <div className="cart-box">
                    <div className="cart-i">
                        <i className="iconfont icon-gouwuche">
                        </i>
                    </div>
                    <div className="cart-btn">
                        <a href="javascript:;" className="cart-left" onClick={(e) => {
                            if (auto) {
                                this.refs.hide.classList.add("hide");
                                this.refs.show.style.display = "block";
                                this.setState({auto: false})
                            }

                        }}>
                            立即购买
                        </a>
                        <a href="javascript:;" className="cart-right">
                            加入购物车
                        </a>
                    </div>
                </div>
                <div className="cart-detail" ref="hide">
                    <p>￥198.00</p>
                    <div className="detail-info">
                        <div className="info-img">
                            <img src="http://static.21cake.com//themes/wap/img/1.00P-full-13.00.jpg" alt=""/>
                        </div>
                        <ul>
                            <li>13x13cm</li>
                            <li>含5套餐具</li>
                            <li>适合3-4人分享</li>
                            <li>最早明天 15:00配送</li>
                        </ul>
                    </div>
                    <p>商品常规</p>
                    <ul className="detail-weight">
                        {
                            active.map((item, index) => {
                                let active = step === index ? "active" : "";
                                return <li key={index} ref={index} className={`${active}`} onClick={this.changeStep.bind(this,index)}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    }
    changeStep = (index) => {
          this.setState({step:index})
    }
}

export default connect()(CartTab);
