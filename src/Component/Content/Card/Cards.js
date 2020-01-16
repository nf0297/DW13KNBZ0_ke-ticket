import React, { Component} from "react";
import { Card, Image, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';


 class Cards extends Component {
  render() {
    const content = this.props.content;
    const {date, price, title, image, link} = this.props;
    const contentLength = content.length;
    return (
        <Card as={Link} to={link}>
          <Image src={image} style={{height:'30vh'}} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
              {price}
            </Card.Meta>
            <Card.Description>
            {contentLength > 100
              ? content.substring(0, 100) + "..."
              : content}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>{date}</Card.Content>
          <Button icon='heart' onClick={this.FavouriteHandler}/>
        </Card>
    )
  };
}

export default Cards;
