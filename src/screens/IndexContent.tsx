import React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

interface IndexProps {
  serverGreeting: string;
}

const IndexContent: React.FC<IndexProps> = (props) => {
  const { serverGreeting } = props;

  return (
    <div>
      <h1>{serverGreeting}</h1>
      <h1>{publicRuntimeConfig.greeting}</h1>
    </div>
  );
};

export default IndexContent;
