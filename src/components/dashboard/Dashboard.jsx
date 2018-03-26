/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import { Link} from 'react-router-dom';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import { Avatar } from 'antd';
import Iframe from 'react-iframe';
import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from '../../style/imgs/amuuncle.jpg';
import {VideoPlayer} from 'react-video-players';
import AutoPlay from '../ui/banners/AutoPlay';
import EchartTableAuto from './EchartTableAuto';
import CountUp from 'react-countup'
import Weather from './weather';
import EchartsEffectScatter from '../charts/EchartsEffectScatter';

class Dashboard extends React.Component {

  state = {
    play: false,
    dash:{},
  };

  componentDidMount() {
        const { fetchData } = this.props;
        fetchData({funcName: 'dash',params: {}, stateName: 'dash'});
  }
  componentWillReceiveProps(nextProps) {
        const { dash: nextAuth = {} } = nextProps;
        if (nextAuth.data && nextAuth.data.dash) {
            console.log(nextAuth.data.dash);
            this.setState({dash: nextAuth.data.dash});
        }
    }

    controlPlay =() =>
    {
        let play = this.state.play;
        this.setState({play: !play});
    }


    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">收藏</div>
                                        <h2>
                                        <CountUp
                                                        start={0}
                                                        end={this.state.dash.Collection}
                                                        duration={2.75}
                                                        useEasing
                                                        useGrouping
                                                        separator=","

                                                      />
                                        </h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">云数据</div>
                                        <h2>
                                              <CountUp
                                                        start={20000}
                                                        end={this.state.dash.yun_data}
                                                        duration={2.75}
                                                        useEasing
                                                        useGrouping
                                                        separator=","
                                                      /></h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                        <Link to='/app/ui/gallery'>
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="camera" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">照片</div>
                                        <h2>
                                               <CountUp
                                                        start={0}
                                                        end={this.state.dash.imgs}
                                                        duration={2.75}
                                                        useEasing
                                                        useGrouping
                                                        separator=","
                                                      /></h2>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">邮件</div>
                                        <h2>
                                           <CountUp
                                                        start={0}
                                                        end={this.state.dash.email}
                                                        duration={0.75}
                                                        useEasing
                                                        useGrouping
                                                        separator=","

                                                      /></h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding '}
                                >
                                <EchartTableAuto />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box animated zoomIn">
                            <Card bordered={false}
                                bodyStyle={{
                                  padding: 0,
                                  height: 214,
                                  background: '#8fc9fb',
                                }}>
                                <Weather />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card  bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box"onClick ={this.controlPlay}>
                            <Card bordered={false} >
                           <Iframe url="//music.163.com/outchain/player?type=2&id=430043767&auto=1&height=66"
                                        width='100%'
                                        height="100px"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen/>
                           {/*
                                    <VideoPlayer loop play={this.state.play}  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
                                */}
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>消息栏</h3>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                             <Avatar src={b1} />
                                        </a>
                                        <div className="clear">
                                            <a href="" className="block">鸣人</a>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <Avatar src={b1} />
                                        </a>
                                        <div className="clear">
                                            <a href="" className="block">佐助</a>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <Avatar src={b1} />
                                        </a>
                                        <div className="clear">
                                            <a href="" className="block">小樱</a>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <Avatar src={b1} />
                                        </a>
                                        <div className="clear">
                                            <a href="" className="block">雏田</a>
                                            <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToPorps = state => {
    const { dash } = state.httpData;
    return { dash };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Dashboard);