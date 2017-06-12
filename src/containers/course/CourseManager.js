import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homePageActions from '../../actions/homePageActions';
import PropTypes from 'prop-types';
import CourseFrom from '../../components/course/CourseForm';

class CourseManager extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(e){
    let field = e.target.name;
    let course  = this.state.course;
    course[field] = e.target.value;
    return this.setState({course: course});
  }

  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
  }

  render() {
    const authorFormatForDropdown = this.props.authors.map(author =>{
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
    });
    return (
      <div>
        <CourseFrom
          allAuthor = {authorFormatForDropdown}
          onChange = {this.updateCourseState}
          onSave={this.saveCourse}
          course={this.state.course}
          errors={this.state.errors}
          loading = {false}
        />
      </div>
    );
  }
}
CourseManager.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  let course = {
    id: "",
    title: "",
    watchHref: "",
    authorId: "",
    length: "",
    category: ""
  };
  return {
    authors: state.authors,
    course: course,
    errors: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homePageActions: bindActionCreators(homePageActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseManager);
