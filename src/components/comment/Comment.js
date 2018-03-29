import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import './comment.css';
import { Icon } from 'antd';

import CommentForm from './CommentForm.js';
var showdown  = require('showdown'),
converter = new showdown.Converter();
class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            isReply:false,
            endorse:0,
            oppose:0,
        }
    }
    handleEndorse(e){
        e.preventDefault();
        var data = this.props.data;
        data.endorse += 1
        const { fetchData } = this.props;
        fetchData({funcName: 'commentData',params: {'update':data}, stateName: 'commentData'});
    }
    handleOppose(e){
        e.preventDefault();
        var data = this.props.data;
        data.oppose += 1
        const { fetchData } = this.props;
        fetchData({funcName: 'commentData',params: {'update':data}, stateName: 'commentData'});
    }
    handleReply(e){
        e.preventDefault();
        this.setState({
            isReply:this.state.isReply ? false : true
        });
    }
    render(){
        var ReplyForms = this.state.isReply ? <CommentForm 
            data={this.props.data}
            classes={2}
            handleReply={this.handleReply.bind(this)} /> : '';
        var data = this.props.data;
        var EndorseStyles ={
            display: data.endorse>0 ? 'inline-block' : 'none'
         }
        var ReplyStyles = {
            display: data.hasReply ? 'block' : 'none'
        }
        var OpposeStyles ={
            display: data.oppose>0 ? 'inline-block' : 'none'
         }
        return (
            <div className="ct-wp">
                <div className="ctU-img">
                    <a href={data.uUrl}>
                    <img src={data.uImg} alt="" />
                    </a>
                </div>
                <div className="ctU-Info">
                    <h3>{data.uName} 
                    <small>
                    {data.uTime}
                    </small></h3>
                    <div className="ct-info"
                        dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(data.uComment)
                          }} />
                    <div style={ReplyStyles} className="reply">
                        <h4>{data.rName}<small>说：</small></h4>
                        <div className="reply-info"
                            dangerouslySetInnerHTML={{
                                __html: converter.makeHtml(data.rComment)
                              }}/>
                    </div>
                    <div className="btn-group">
                        <button onClick={this.handleEndorse.bind(this)} ref="endorse" type=""><Icon type="like" className="text text-success" /><em
                        style={EndorseStyles}>
                        ({data.endorse})</em></button>
                        <button onClick={this.handleOppose.bind(this)} ref="endorse" type=""><Icon type="dislike" className="text text-success" /><em
                        style={OpposeStyles}>
                        ({data.oppose})</em></button>
                        <button onClick={this.handleReply.bind(this)} type="">回复</button>
                    </div>
                    {ReplyForms}   
                </div>
            </div>
            );
    }
}

const mapStateToPorps = state => {
    const { commentData } = state.httpData;
    return { commentData };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Comment);