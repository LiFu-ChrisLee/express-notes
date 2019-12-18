import React from 'react';

class ErrorPage extends React.Component<ErrorResponse> {
  render() {
    const { props } = this;

    return (
      <section>
        <h1>Hello {props.message}</h1>
        <h2>{props.error.status}</h2>
        <pre>{props.error.stack}</pre>
      </section>
    );
  }
}

export default ErrorPage;
