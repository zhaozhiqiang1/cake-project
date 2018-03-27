import React,{Component} from 'react';

import './nav.less'
export default class Nav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className='footer'>
           <ul>
               <li><a href=""><i className='iconfont icon-home'></i>首页</a></li>
              <li><a href=""><i className='iconfont icon-fenlei1'></i>分类</a></li>
              <li><a href=""><i className='iconfont icon-gouwuche'></i>购物</a></li>
              <li><a href=""><i className='iconfont icon-shequ-active1'></i>社区</a></li>
              <li><a href=""><i className='iconfont icon-wode'></i>用户</a></li>




           </ul>
        </div>
    }
}
