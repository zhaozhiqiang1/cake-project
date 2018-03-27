import React from 'react'
import './community.less'
import '../../static/css/reset.min.css'
export default class Community extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='community'>
            <h3>社区</h3>
            <ul className='list'>
                <li>21客志</li>
                <li>树洞</li>
            </ul>

        </div>
    }
}