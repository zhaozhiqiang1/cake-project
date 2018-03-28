import React,{Component} from 'react';

import './cartheader.less'
export default class CartHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className='head'>
            <a href="">
                <i className='iconfont icon-fanhui'></i>
               <span>廿一客</span>
            </a>

        </div>
    }
}
