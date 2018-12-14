import { connect } from 'react-redux'
import Home from '../components/Home'
import { init, getCityData } from '../actions/home'

export default connect(function(state){
  console.log(state.home.cityData)
  return {
    briefing: state.home.briefing,
    indicators: state.home.indicators,
    echarts: state.home.echarts,
    collection: state.home.collection,
    cityData: state.home.cityData,
    userName: state.login.userName,
    todayLog: state.log.todayLog,
  }
}, function(dispatch){
  return {
    onInit () {
      dispatch(init())
    },
    onGetCityData (type, id) {
      dispatch(getCityData(type, id))
    }
  }
})(Home)
