import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import HeaderHome from './HeaderHome';
import Content from './Content';
import FooterHome from './FooterHome';

class Home extends Component {
  
  render () {
    return (
        <Container fluid>
        <HeaderHome/>
        <Content/>
        <FooterHome/>
        </Container>
    )
  };
}


export default Home;