import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import './comment.css';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: '',
            words: 300
        }
    }
    handleChange(e) {
        var words = e.target.value.length;
        this.setState({
            comment:e.target.value,
            words:300-words
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.comment=='' && this.state.words >=0){return;}
        const _user = JSON.parse(localStorage.getItem('user'));
        const userName = _user.userName || "游客";
        var myDate = new Date();
        if(this.props.classes === 1){
            let commentData = {
                uName:userName,
                uImg:'http://23.106.155.65:8001/avtar/40e087e48f0d06e0dc51c3ef790160c6.jpg',
                uUrl:'http://23.106.155.65:8001/avtar/40e087e48f0d06e0dc51c3ef790160c6.jpg',
                uComment : this.state.comment,
                uTime:myDate.toLocaleString(),
                uReply : {
                    hasReply : false,
                    rName : null,
                    rComment : null
                }
            }
            const { fetchData } = this.props;
            fetchData({funcName: 'commentData',params: {'data':commentData}, stateName: 'commentData'});

        }
        if(this.props.classes === 2){
            let replyData = {
                uName:userName,
                uImg:'http://23.106.155.65:8001/avtar/40e087e48f0d06e0dc51c3ef790160c6.jpg',
                uUrl:'http://23.106.155.65:8001/avtar/40e087e48f0d06e0dc51c3ef790160c6.jpg',
                uComment : this.state.comment,
                uTime:myDate.toLocaleString(),
                uReply : {
                    hasReply : true,
                    rName : this.props.data.uName,
                    rComment : this.props.data.uComment
                }
            }
        }
    }
    render() {
        var styles = {
            color: this.state.words < 0 ? 'red' : ''
        };
        return (
            <div className="ctForm-wp">
                <p>温馨提示：请文明留言，多留下一些有价值的留言，谢谢。</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="ctForm-textarea">
                        <textarea value={this.state.comment}
                            onChange={this.handleChange.bind(this)} 
                            placeholder="留下你的观点..." 
                            name="comment"></textarea>
                    </div>
                    <div className="sub-Btn">
                        <span>还可以输入<em style={styles} ref="words">{this.state.words}</em>个字符</span>
                        <button type="submit">
                             发表评论
                        </button>
                        <button onClick={this.props.handleReply} className="clear">
                             取消评论
                        </button>
                    </div>
                </form>
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


export default connect(mapStateToPorps, mapDispatchToProps)(CommentForm);