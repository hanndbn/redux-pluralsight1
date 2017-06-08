import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
const CourseForm = ({course, allAuthor, onSave, onChange, errors, loading}) => {
  return (
    <form>
      <h1>Manager Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author Id"
        value={course.authorId}
        onChange={onChange}
        error={errors.authorId}
        options = {allAuthor}
        defaultOption="Select Author"
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        label="length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : "save"}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthor: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  loading: PropTypes.bool,
};
export default CourseForm;
