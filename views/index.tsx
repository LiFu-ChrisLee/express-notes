import React from 'react';

import DefaultLayout from './layout';

console.log(DefaultLayout);

class HelloMessage extends React.Component<IndexResponse> {
  render() {
    const { props } = this;
    return (
      <DefaultLayout title={props.title}>
        <div>Hello {props.name}</div>
      </DefaultLayout>
    );
  }
}

export default HelloMessage;
