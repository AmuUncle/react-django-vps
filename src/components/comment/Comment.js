import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import './comment.css';

import CommentForm from './CommentForm.js';
var showdown  = require('showdown'),
converter = new showdown.Converter();
export default class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            isReply:false,
            endorse:0
        }
    }
    handleEndorse(e){
        e.preventDefault();
    }
    handleReply(e){
        e.preventDefault();
    }
    render(){
        var ReplyForms = this.state.isReply ? <CommentForm 
            data={this.props.data}
            classes={2}
            handleReply={this.handleReply} /> : '';
        var data = this.props.data;
        var ReplyStyles = {
            display: data.uReply.hasReply ? 'block' : 'none'
        }
        var EndorseStyles ={
            display: this.state.endorse>0 ? 'inline-block' : 'none'
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
                        <h4>{data.uReply.rName}<small>说：</small></h4>
                        <div className="reply-info"
                            dangerouslySetInnerHTML={{
                                __html: converter.makeHtml(data.uReply.rComment)
                              }}/>
                    </div>
                    <div className="btn-group">
                        <button onClick={this.handleEndorse.bind(this)} ref="endorse" type="">赞同<em 
                        style={EndorseStyles}>
                        ({this.state.endorse})</em></button>
                            <button onClick={this.handleReply.bind(this)} type="">回复</button>
                            <button type="">举报</button>
                    </div>
                    {ReplyForms}   
                </div>
            </div>
            );
    }
}