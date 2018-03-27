import React,{Component} from 'react';
import Banner from "../../component/Banner";
import './home.less'
import {samll} from '../../api/icon'
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={bannerData:[]}
    }
    async componentWillMount(){
        let data=await samll();
        this.setState({bannerData:data});
        console.log(data);
    }
    render(){
        return <div className='home'>
<div>
    <Banner data={this.state.bannerData} auto={2000}/>
    <section className='buyer'>
        <ul>
            <li><i className='iconfont icon-xin'></i>新人首单赠小切块</li>
            <li><i className='iconfont icon-xin'></i>满百包邮</li>
            <li><i className='iconfont icon-xin'></i>千万用户选择</li>
        </ul>
    </section>
    <section className='cake'>
        <ul>
            <li><a href=""><img src={require('../../static/image/cakef.png')} alt=""/><span>蛋糕</span></a></li>
            <li><a href=""><img src={require('../../static/image/cakes.png')} alt=""/><span>咖啡</span></a></li>
            <li><a href=""><img src={require('../../static/image/caker.png')}alt=""/><span>小切块</span></a></li>
            <li><a href=""><img src={require('../../static/image/fly.png')} alt=""/><span>企业专区</span></a></li>

        </ul>
    </section>
    <section className='cakeDetail'>

        <h3>
            <span className='people'>人气</span>
            <span className='more'><a href="javascript:;">更多></a></span>
        </h3>
        <ul>

            <li>
                <a href="">
                    <img src={require('../../static/image/flower.jpg')} alt=""/>
                    <p className='textFirst'>百利情人<span className='price'>289</span><span className='weight'>元/2.0磅</span></p>
                    <p className='textSecond'>爱尔兰百利甜酒/新西兰奶油 <a href=""><i className='iconfont icon-gouwuche1'></i></a></p>

                </a>

            </li>

        </ul>
    </section>
    <section className='home-text'>
        <p>廿一客·活动</p>
    </section>
    <section className='home-new'>

      <div className='home-second'>
          <p></p>
          <p></p>
          <p></p>
      </div>
      <div className='home-third'>
          {/*<img src={require('../../static/image/nianyike.jpg')} alt=""/>*/}

  </div>
    </section>
</div>
        </div>
    }
}
