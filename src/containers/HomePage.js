import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/homePageActions';

class HomePage extends React.Component{
  constructor(props){
    super(props);
  }

  _handleChangeName(){
    this.props.actions.saveMyName(this.refs.myName.value);

  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.homePage.myName}</h1>

        <input type="text" ref="myName"/>
        <button onClick={()=>{this._handleChangeName()}}>Save Name</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    homePage: state.homePage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // saveMyName: (myName)=>{
    //   dispatch(actions.saveMyName(myName))
    // },
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
