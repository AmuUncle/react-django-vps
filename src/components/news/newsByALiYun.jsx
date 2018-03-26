/**
 * Created by hao.cheng on 2017/5/6.
 */
import React from 'react';
import { Row, Col, Card, Avatar, Modal } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import reqwest from 'reqwest';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
const { Meta } = Card;

function info(url) {
  Modal.info({
    title: '新闻详情',
    okText:'阅读完毕',
    content: (
    <Iframe url={url}
            width='100%'
            height='600px'
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>)
    })
}

class Gallery extends React.Component {
    state = {
        gallery: null,
        imgs:[]
    };
    componentWillMount = () => {
         this.fetch();
    };
    fetch = (params = {}) => {
            console.log('params:', params);
            reqwest({
              url: 'http://toutiao-ali.juheapi.com/toutiao/index?type=type',
              method: 'get',
              data: {
              },
              headers: {
                  'Authorization': 'APPCODE 2f1e16cbdaeb4cd788d92109bb67c0d0'
                },
              type: 'json',
            }).then((data) => {
                console.log(data.result.data);
                data = data.result.data;
                var imgs = []
                var imgs_row = []
                for(var i = 0;i<data.length;i++){  //循环LIST
                     var veh = data[i];//获取LIST里面的对象

                     var news = new Object();
                     news.url = veh.url;
                     news.title = veh.title;
                     news.author_name = veh.author_name;
                     news.pic = veh.thumbnail_pic_s;
                     imgs_row.push(news);
                     if( (i+1) % 5 === 0 )
                     {
                        imgs.push(imgs_row)
                        imgs_row = []
                     }

                }
                console.log(imgs);
                this.setState({imgs:imgs});
            });
          }

    newClick = (newinfo) =>
    {
                const { receiveData } = this.props;
                receiveData(newinfo, 'newurl');
                const { history } = this.props;
                history.push('/app/newsByALiYun/new');
    }
    render() {

        const imgsTag = this.state.imgs.map(v1 => (
            v1.map(v2 => (
                <div className="gutter-box" key={v2.title}>
                <a onClick={() => this.newClick(v2)} target="_blank" rel="noopener noreferrer">
                    <Card bordered={false} bodyStyle={{ padding: 0 }} >
                        <div>
                            <img alt={v2.title} width="100%" src={v2.pic} />
                        </div>
                        <div className="pa-m">
                            <Meta
                              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                              title={v2.author_name}
                              description={v2.title}
                            />
                        </div>

                    </Card>
                </a>
                </div>
            ))
        ));
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="NWES" second="实时新闻（数据来自阿里云API）" />
                <Row gutter={10}>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[0]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[1]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[2]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[3]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[4]}
                    </Col>
                </Row>
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {this.pswpElement = div;} }>

                    <div className="pswp__bg" />

                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">

                            <div className="pswp__top-bar">

                                <div className="pswp__counter" />

                                <button className="pswp__button pswp__button--close" title="Close (Esc)" />

                                <button className="pswp__button pswp__button--share" title="Share" />

                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>

                            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>

                        </div>

                    </div>

                </div>
                <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
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


export default connect(mapStateToPorps, mapDispatchToProps)(Gallery);