/* globals $ */
import React from 'react';
import ReactDOM from 'react-dom';

// Look how verbose this is. This is why we use JSX/ES6.
var NoJsxComponent = function NoJsxComponent() {
  return React.createElement('div', null, 'NoJsxComponent says Hello');
};

// Demonstrating the 'shortest' way to create a component - stateless function syntax
const BasicComponent = () => <div>BasicComponent says Hello</div>;
const BasicPropsComponent = (props) => <div>BasicComponent says {props.sayWhat}</div>;

// The 'old' (still valid) way to create a React component
const OldComponent = React.createClass({
  propTypes: {
    sayWhat: React.PropTypes.string.isRequired,
  },

  render() {
    const { sayWhat, ...other } = this.props;
    return <div>OldComponent says {sayWhat}</div>;
  },
});

// The new preferred (ES6) way to create a React component
class NewComponent extends React.Component {
  render() {
    const { sayWhat, ...other } = this.props;
    return <div>NewComponent says {sayWhat}</div>;
  }
}
NewComponent.propTypes = { sayWhat: React.PropTypes.string.isRequired };

const ComposedComponent = () => (
  <div>
    <NoJsxComponent />
    <BasicComponent />
    <BasicPropsComponent sayWhat="Hello Basic World!" />
    <OldComponent sayWhat="Hello Old World!" />
    <NewComponent sayWhat="Hello New World!" />
  </div>
);

ReactDOM.render(<ComposedComponent />, document.getElementById('root'));
