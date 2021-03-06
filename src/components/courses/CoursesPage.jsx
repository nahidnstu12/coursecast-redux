import React from "react";
import CoursesList from "./CoursesList.jsx";
import { loadCourse, deleteCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount() {
    const {  authors, courses } = this.props;
    if (courses.length === 0) {
      this.props.loadCourse().catch((err) => {
        alert("Loading Course is failed " + err);
      });
    }
    if (authors.length === 0) {
      this.props.loadAuthors().catch((err) => {
        alert("Loading Authores is failed " + err);
      });
    }
  }
  // handleChange = (event) => {
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.actions.createCourse(this.state.course);
  // };

  handleDelete =async (course) => {
    toast.success("Course Delete Successfully")
    try{
      await this.props.deleteCourse(course)

    }
    catch(err){
      toast.error("Delete Failed. " + err.message, {autoClose:false})
    }
    
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {/* { this.props.courses.length < 0 */}
        { this.props.loading
          ? 
          <Spinner />
          : (
            <>
              <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.setState({ redirectToAddCoursePage: true })}
              >
                Add Course
              </button>

              <CoursesList
                courses={this.props.courses} onDelete={this.handleDelete}
              />
            </>
          )
        }
      </>
    );

  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.number.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourse: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? [] 
        : state.courses.map((course) => {
          return {
            ...course,
            authorName: state.authors.find((a) => a.id === course.authorId)
              .name,
          };
        }),
    authors: state.authors,
    loading: state.apiCallsInProgress,
  };
}

const mapDispatchToProps = {
  loadAuthors,
  loadCourse,
  deleteCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);