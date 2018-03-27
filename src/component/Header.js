import React,{Component} from 'react';

import './header.less'
 export default class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className='head'>
            <a href="">
                <img src="http://static.21cake.com/themes/wap/img/logo.png" alt=""/>
            </a>

        </div>
    }
}
