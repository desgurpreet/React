import React from "react";
import PropTypes from "prop-types";
class First extends React.Component {
  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
      </>
    );
  }
}
export default First;

First.propTypes = {
  name: PropTypes.string,
};
