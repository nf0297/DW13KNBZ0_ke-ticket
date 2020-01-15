import React, { Component} from "react";
import { Card, Image, Grid, Button, Icon } from "semantic-ui-react";
import axios from 'axios';

 
export default class CardsEvent extends Component {
  constructor() {
    super();
    this.state = {
      ticketQty: 1,
      order: []
    }
  }
  
  increementClick = () => {
    this.setState ({ticketQty: this.state.ticketQty + 1});
  }

  decreementClick = () => {
    if (this.state.ticketQty == 1) {
    } else {
      this.setState ({ticketQty: this.state.ticketQty - 1});
    };
  }

  onClickOrder = e => {
    let dataOrder = {
      event_id : this.props.id,
      buyer_id : localStorage.getItem("id"),
      quantity : this.state.ticketQty,
      total_price : this.props.price * this.state.ticketQty,
      status : "pending",
      attachment : "",
    };
    console.log(dataOrder);
    axios
    .post("https://ke-ticket-app.herokuapp.com/api/v1/order/add", dataOrder)
    .then(res => {
      console.log(res);
      alert("Order Successfully Added!")
      window.location.reload();
    })
    .catch(res => {
      console.log(res);
      alert("Order Failure!")
    })
  }
 

  render() {

    return (
      <Card color='grey' style={{backgroundColor:"rgb(255, 230, 255)"}}>
        <Image src={this.props.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <Grid columns='equal' columns={2} style={{marginTop:"10px", marginBottom:"5px"}}>
              <Grid.Column floated="left" width={9}>
              <p style={{fontSize:"30px"}}>{this.props.title}</p>
              </Grid.Column>

              <Grid.Column floated='right' width={3}>
                <p style={{fontSize:"25px", fontWeight:'bold'}}>{"Rp. "+this.props.price}</p>
              </Grid.Column>
            </Grid>
          </Card.Header>
          <Card.Description>
            <Grid columns='equal' columns={2}>
              <Grid.Column floated="left" width={9}>
              <p style={{fontSize:"25px", color:"rgb(250, 65, 96"}}>{this.props.categoryName}</p>
              </Grid.Column>
              <Grid.Column floated='right' width={3}>
              <Button
                basic
                icon='minus'
                color='red'
                size='small'
                onClick={this.decreementClick}
                />
                <span style={{fontSize:"20px", marginLeft:"5px", marginRight:"5px", fontWeight:"bold"}}>{this.state.ticketQty}</span>
                <Button
                basic
                icon='plus'
                color='red'
                size='small'
                onClick={this.increementClick}
                />
              
                <Button
                color='red'
                content='BUY'
                size='small'
                onClick={this.onClickOrder}
                />
              </Grid.Column>
            </Grid>
           
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Grid columns='equal' columns={3}>
              <Grid.Column>
                  <Card.Header style={{fontWeight:"bold", fontSize:"18px"}}>Hosted By</Card.Header>
                  <Card.Description>
                  <Image src={this.props.hostImage} size='tiny' style={{marginTop:"25px", marginBottom:"30px", marginRight:"10px"}}/>
                  <span>{this.props.host}</span>
                  </Card.Description>
              </Grid.Column>

              <Grid.Column>
                  <Card.Header style={{fontWeight:"bold", fontSize:"18px",}}>Date & Time</Card.Header>
                  <Card.Description>
                      <p style={{marginTop:"25px"}}>
                      <Icon name='calendar'/>
                      <span>{this.props.date} - {this.props.end}</span>
                      </p>

                      <p>
                      <Icon name='clock outline'/>
                      <span>{this.props.startHrs} - {this.props.endHrs}</span>
                      </p>
                  </Card.Description>
              </Grid.Column>

              <Grid.Column>
                  <Card.Header style={{fontWeight:"bold", fontSize:"18px",}}>Date & Time</Card.Header>
                  <Card.Description>
                      <p style={{marginTop:"25px"}}>
                      <Icon name='address card outline'/>
                      <span>{this.props.host}</span>
                      </p>

                      <p>
                      <Icon name='phone'/>
                      <span>{this.props.phone}</span>
                      </p>

                      <p>
                      <Icon name='mail'/>
                      <span>{this.props.email}</span>
                      </p>
                  </Card.Description>
              </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  };
}
