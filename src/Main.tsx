import { Component } from 'react';
import Layout from './components/Layout/Layout';
import TimeCircle from './components/TimeCircle/TimeCircle';

class Main extends Component {
  render () {
    return (
      <Layout>
        <TimeCircle />
      </Layout>
    );
  };
};

export default Main;
