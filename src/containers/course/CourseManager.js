import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homePageActions from '../../actions/homePageActions';
import PropTypes from 'prop-types';
import CourseFrom from '../../components/course/CourseForm';

class CourseManager extends React.Component {
  constructor(props) {
    super(props);
  }

  updateCourseInfo(e){
    let field = e.target.name;
    this.props[field] = e.target.value;

  }

  render() {
    const authorFormatForDropdown = this.props.authors.map(author =>{
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
    })
    return (
      <div>
        <CourseFrom
          allAuthor = {authorFormatForDropdown}
          course={this.props.course}
          errors={this.props.errors}
          loading = {false}
        />
      </div>
    );
  }
}
CourseManager.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
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
