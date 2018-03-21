/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import wea from '../../style/imgs/tick_weather/light_rain.png';
import wea_bg from '../../style/imgs/wea_bg.gif';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon:"",
            name:"",
            temperature:"",
            dateTime:"",
            city:""
        };
    }
    componentDidMount() {
        var myDate = new Date();
        myDate = myDate.toLocaleString( );
        this.setState({
            icon:wea,
            name:"多云",
            temperature:"30",
            dateTime: myDate,
            city:"浦东"});

        const { fetchData } = this.props;
        fetchData({funcName: 'weather',params: {}, stateName: 'weather'});
    }

    componentWillReceiveProps(nextProps) {
        const { weather: nextAuth = {} } = nextProps;
        if (nextAuth.data && nextAuth.data.msg && nextAuth.data.msg === "success") {
            console.log(nextAuth.data);
            var name = nextAuth.data.data.forecast[0].conditionDay;
            var city = nextAuth.data.data.city.name;
            var temperature = nextAuth.data.data.forecast[0].tempDay;

            var myDate = new Date();
            myDate = myDate.toLocaleString( );

            this.setState({
                icon:wea,
                name:name,
                temperature:temperature,
                dateTime: myDate,
                city:city});
            }
    }

    componentWillUnmount() {
    }
    render() {
        return (
                  <div className="weather" style={{
                          height: 214,
                          backgroundImage: `url(${wea_bg})`,
                          '-moz-background-size':'100% 100%',
                          'background-size':'100% 100%',
                        }}>
                    <div className="left">
                      <div className="icon"
                        style={{
                          backgroundImage: `url(${this.state.icon})`,
                        }}
                      />
                      <p>{this.state.name}</p>
                    </div>
                    <div className="right">
                      <h1 className="temperature">{`${this.state.temperature}°`}</h1>
                      <p className="description">{this.state.city}</p>
                      <p className="description">{this.state.dateTime}</p>

                    </div>

                  </div>
            );
    }
}

const mapStateToPorps = state => {
    const { weather } = state.httpData;
    return { weather };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Weather);
