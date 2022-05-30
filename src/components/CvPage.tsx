import React from 'react';

function CvPage(props: { children: JSX.Element }): JSX.Element {
  const { children } = props;

  return <div>Hello{children}</div>;
}

export default CvPage;
