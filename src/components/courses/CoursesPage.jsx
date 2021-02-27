import React from "react";
import CoursesList from './CoursesList.jsx';
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };
  componentDidMount(){
    this.props.actions.loadCourse().catch(err => {
      alert("Loading Course is failed "+ err);
    })
  }
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>

        {/* <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button> */}

        <CoursesList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
