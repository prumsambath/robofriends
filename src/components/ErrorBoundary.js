import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  getDerivedStateFromError(err) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Ooops. Something went wrong.</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
