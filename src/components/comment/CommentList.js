import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import './comment.css';
import Comment from './Comment';

export default class CommentList extends React.Component {
    constructor() {
        super();
    }
    render() {
        var data = this.props.comments;
        var comments = [];
        for (var key in data) {
            comments.push(
                <dd key={key}>
                    <Comment data={data[key]} />
                </dd>
            );
        }
        return (
            <dl className="ctList-wp">
                <dt>全部评论({comments.length})</dt>
                   {comments}
            </dl>
        );
    }
}