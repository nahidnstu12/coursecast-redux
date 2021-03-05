import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourse, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm.jsx";
import { newCourse } from "../../../tools/mockapi/mockData";
// import Spinner from "../common/Spinner";
// import { toast } from "react-toastify";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourse,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors] = useState({});
  // const [saving] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      loadCourse().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }
  function handleSave(event){
    event.preventDefault()
    saveCourse(course)
    .then(()=>{
      history.push('/courses')
    })
  }

  // function formIsValid() {
  //   const { title, authorId, category } = course;
  //   const errors = {};

  //   if (!title) errors.title = "Title is required.";
  //   if (!authorId) errors.author = "Author is required";
  //   if (!category) errors.category = "Category is required";

  //   setErrors(errors);
  //   // Form is valid if the errors object still has no properties
  //   return Object.keys(errors).length === 0;
  // }

  return (
    <>
    
      <CourseForm
        course={course}
        authors={authors}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourse: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourse,
  loadAuthors,
  saveCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
