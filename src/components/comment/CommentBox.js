import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import './comment.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentData:[]
        }
    }
    componentDidMount() {
            const { fetchData } = this.props;
            fetchData({funcName: 'commentData',params: {}, stateName: 'commentData'});
    }
    componentWillReceiveProps(nextProps) {
        const { commentData: nextAuth = {} } = nextProps;

        if (undefined === nextAuth.data)
        {
        }
        if (nextAuth.data) {   // 判断是否登陆
                this.setState({commentData:nextAuth.data})
        }
    }
    render() {
        return (
            <div id="ctBox-wp">
                <CommentForm classes={1} />
                <CommentList comments={this.state.commentData} />
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


export default connect(mapStateToPorps, mapDispatchToProps)(CommentBox);

