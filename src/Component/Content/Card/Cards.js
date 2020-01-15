import React, { Component} from "react";
import { Card, Image, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';


 class Cards extends Component {
  render() {
    const content = this.props.content;
    const contentLength = content.length;
    return (
        <Card as={Link} to={this.props.link}>
          <Image src={this.props.image} style={{height:'30vh'}} />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>
              {this.props.price}
            </Card.Meta>
            <Card.Description>
            {contentLength > 100
              ? content.substring(0, 100) + "..."
              : content}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>{this.props.date}</Card.Content>
          <Button icon='heart' onClick={this.FavouriteHandler}/>
        </Card>
    )
  };
}

export default Cards;
