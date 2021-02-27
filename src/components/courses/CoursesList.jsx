import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesList extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourse().catch((err) => {
      alert("Loading Course is failed " + err);
    });
  }
  render() {
    return (
      <div>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </div>
    );
  }
}
CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
