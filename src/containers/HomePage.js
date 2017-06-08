import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/homePageActions';
import PropTypes from 'prop-types';
import CourseList from './course/CourseList';

class HomePage extends React.Component {
  render() {
    //const {courses} = this.props;
    return (
      <div>
        <h1>Course</h1>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}
HomePage.propTypes = {
  courses: PropTypes.array.isRequired,
};
function mapStateToProps(state) {

  return {
    courses: state.homePage.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
