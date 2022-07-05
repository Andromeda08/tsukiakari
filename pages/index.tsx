import type { NextPage } from 'next';

import { Layout } from '@Components/Layout';
import { Intro, About, Projects } from '@Components/content';

import { project_list } from '@Data/projects';

const Page : NextPage = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects data={ project_list } />
    </Layout>
  );
};

export default Page;