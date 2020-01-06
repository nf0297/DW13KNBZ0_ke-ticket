import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class CardsFavourite extends Component {
    render() {
        return (
          <Card as={Link} to={this.props.link}>
          <Image src={this.props.image} style={{height:'32vh'}} />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>
              {this.props.price}
            </Card.Meta>
            <Card.Description>
              {this.props.content.substring(0, 200)}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>{this.props.date}</Card.Content>
        </Card>
        )
    }
}

export default CardsFavourite;