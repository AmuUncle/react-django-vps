/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col, Card, Button, Radio, Icon, Menu, Dropdown } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Input } from 'antd';
import reqwest from 'reqwest';
const Search = Input.Search;
const { Meta } = Card;


class Number extends React.Component {
    state = {
        size: 'default',
        loading: false,
        iconLoading: false,
        city:""
    };

    handleSearch = (value) => {
        console.log(value);

        const reg = /^1[35678]\d{9}$/;
        if (  !((!isNaN(value) && reg.test(value)) || value === '' || value === '-') ) {
          var info = new Object();
          info.province = "号码错误！！！";
          info.company = "号码错误！！！";
          info.areacode = "号码错误！！！";

          this.setState({city:info});
          return;
        }

        reqwest({
              url: `http://jshmgsdmfb.market.alicloudapi.com/shouji/query?shouji=${value}`,
              method: 'get',
              data: {
              },
              headers: {
                  'Authorization': 'APPCODE 2f1e16cbdaeb4cd788d92109bb67c0d0'
                },
              type: 'json',
            }).then((data) => {
                console.log(data);
                this.setState({city:data.result});
            });
    };

    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="号码归属地" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} >
                                <Search
                                  placeholder="input number"
                                  onSearch={this.handleSearch}
                                  style={{ width: 200 }}
                                />
                                <p class="two"></p>
                                    <Meta
                                      title="号码信息："
                                      description={this.state.city.province}
                                    />
                                    <p class="two">{this.state.city.company}</p>
                                    <p class="two">{this.state.city.areacode}</p>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <style>{`
                   .one{
                        margin-bottom: 1em;
                    }
                    .two{
                        margin-top: 1em;
                    }
                `}</style>
            </div>
        )
    }
}

export default Number;
