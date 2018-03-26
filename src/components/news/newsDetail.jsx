/**
 * Created by hao.cheng on 2017/5/6.
 */
import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import PhotoSwipe from 'photoswipe';
import Iframe from 'react-iframe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import reqwest from 'reqwest';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import BreadcrumbCustom from '../BreadcrumbCustom';
const { Meta } = Card;

class NewDetail extends React.Component {
    state = {
        gallery: null,
        iFrameHeight: '0px',
        url:[],
        clientHeight:0,
        clientWidth:0,
        title:''
    };
    componentWillMount() {
        const { newurl: nextAuth = {} } = this.props;
        if (nextAuth && nextAuth.data && nextAuth.data.url) {

        const clientWidth = document.body.clientWidth;
        const clientHeight = document.body.clientHeight - 100;
        this.setState({url:nextAuth.data.url,title:nextAuth.data.title, clientWidth:clientWidth,clientHeight,clientHeight});
        }
    }
    render() {
    let title = this.state.title;
        return (
         <div className="gutter-example button-demo">
        { title == '' ? (

                <BreadcrumbCustom first="NWES" second={`实时新闻（暂无数据）`} />

                ) :
        (
        <div>
                <BreadcrumbCustom first="NWES" second={`实时新闻（${this.state.title}）`} />
                           <Iframe url={this.state.url}
                                        width={this.state.clientWidth}
                                        height={this.state.clientHeight}
                                        id="myId"
                                        className="center"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen/>
                                        </div>
       )}


</div>

        )
    }
}
const mapStateToPorps = state => {
    const { newurl } = state.httpData;
    return { newurl };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(NewDetail);