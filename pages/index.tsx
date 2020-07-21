import React from 'react';
import { NextPage, GetServerSidePropsResult } from 'next';
import IndexContent from '~/screens/IndexContent';

interface IndexProps {
  serverGreeting: string;
}

const IndexPage: NextPage<IndexProps> = (props: IndexProps) => {
  const { serverGreeting } = props;
  return <IndexContent serverGreeting={serverGreeting} />;
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IndexProps>
> {
  return {
    props: { serverGreeting: 'Hello from the server!' } // will be passed to the page component as props
  };
}

export default IndexPage;
