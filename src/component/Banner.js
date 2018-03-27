import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './banner.less'
import PropTypes from 'prop-types';
export default class Banner extends Component{
    constructor(props){
        super(props)
    }
    static defaultProps = {
        data: [],
        style: {},
        className: '',
        initSlide: 0,
        auto: 3000,
        isFocus: true
    };
    static propTypes = {
        data: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        initSlide: PropTypes.number,
        auto: PropTypes.number,
        isFocus: PropTypes.bool
    };
    render(){
        let {data, className, initSlide, auto, isFocus} = this.props;
        return <div className='bannerBox'>
            <ReactSwipe
                        className={className}
                        swipeOptions={{
                            startSlide: initSlide,
                            auto,
                            callback: index => {
                                this.setState({
                                    step: index//=>记录当前展示SLIDE索引
                                });
                            }
                        }}
            >
              <div>1</div>
              <div>h</div>
                        </ReactSwipe>
        </div>
    }
}
