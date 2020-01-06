import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Category extends Component {

    render() {
  
      return (
        <Card as={Link} to={this.props.link}
          header={this.props.title}
          color='green'
          style={{backgroundImage:`url(${this.props.image})`, textAlign:'center', color:'rgb(255,255,255)'}}
        />
      )
    };
  }
  
  export default Category;