import { Component } from 'react';
import Layout from './components/Layout/Layout';
import TimeCircle from './components/TimeCircle/TimeCircle';
import Heading from './components/Heading/Heading';

class Main extends Component {
  render () {
    return (
      <Layout>
        <Heading />
        <TimeCircle />
      </Layout>
    );
  };
};

export default Main;
