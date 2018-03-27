import React, {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import propTypes from "prop-types"
import "./cartTab.less"

import {getCartDetail} from "../api-zzq";

class CartTab extends Component {
    constructor(props) {
        super(props);
        this.state = {active: ["1.0磅", "1.5磅", "2.0磅", "3.0磅", "5.0磅", "更多"], auto: true, step: 0,shopDetail:{}}
    }
    static defaultProps = {};
    async componentDidMount(){
        let data = await getCartDetail();
        let shopDetail = data[0].productArr.find(item=>{
            return item.is_default==="true";
        });
        this.setState({shopDetail});
    }

    render() {
        let {active, auto,step,shopDetail} = this.state;
        console.log(shopDetail);
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
                    {
                        shopDetail?<div>
                            <p>￥{shopDetail.price}</p>
                            <div className="detail-info">
                                <div className="info-img">
                                    <img src={"http://localhost:8080"+shopDetail.img_url} alt=""/>
                                </div>
                                <ul>
                                    <li>13x13cm</li>
                                    <li>含5套餐具</li>
                                    <li>适合3-4人分享</li>
                                    <li>最早明天 15:00配送</li>
                                </ul>
                            </div>
                        </div>:null
                    }

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

export default withRouter(connect()(CartTab));
