import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Button, Radio, Icon, Menu, Dropdown } from 'antd';

 class FetchDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      meg: '',
      respon: [],
      megArray: []
    }
  }
  handleData(e) {
    this.setState({
      meg: e.target.value
    })
  }
  sendMessage() {
    var message = this.state.meg
    if (message === '') {
      alert('不能发送空白消息哦')
    } else {
      this.setState({
        megArray: [...this.state.megArray, message]
      })
      var that = this
      var func = fetch('http://www.tuling123.com/openapi/api?key=d0a48488dfbb45babcf2be1c77593c63&info=' + message, {
        method: 'POST',
        type: 'cors'
      }).then(function(response) {
        return response.json()
      }).then(function(detail) {
        return (that.setState({
          respon: [...that.state.respon, detail.text]
        }, () => {
          var el = ReactDOM.findDOMNode(that.refs.msgList);
          el.scrollTop = el.scrollHeight;
        }))
      })
      this.state.meg = ''
    }
  }
  render() {
    var meg = this.state.meg
    var megArray = this.state.megArray
    var respon = this.state.respon

    return (
      <div className="content">
       
        <div className="msg-list" ref="msgList">
          {megArray.map((elem,index) => (
            <div className="container" key={index}>
              <div className="message animated rotateInDownRight">{elem}</div>
              <div className="response animated lightSpeedIn">{respon[index]}</div>
            </div>)
           )}
        </div>
         <div className="fixedBottom">
           <input className="input" value={meg} onChange={this.handleData.bind(this)}/>
           <Button className="button" type="primary" onClick={this.sendMessage.bind(this)}>发送</Button>
         </div>
      </div>
    )
  }
}

export default FetchDemo;

