import React from 'react';

class DefaultLayout extends React.Component<DefaultLayoutProps> {
  render() {
    const { props } = this;

    return (
      <html>
        <head>
          <title>{props.title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>{props.children}</body>
      </html>
    );
  }
}

export default DefaultLayout;
