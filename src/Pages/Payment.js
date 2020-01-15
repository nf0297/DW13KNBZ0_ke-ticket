import React, {Component} from 'react';
import {Grid, Container, Button, Divider, Header, Image} from 'semantic-ui-react';
import moment from 'moment';

import HeaderHome from './HeaderHome';
import FooterHome from './FooterHome';

import { getOrderByStatus } from '../Redux/_action/ActionOrder';
import { connect } from 'react-redux';
import axios from 'axios';

class Payment extends Component {

    componentDidMount() {
        const id = localStorage.getItem("id");
        this.props.dispatch(getOrderByStatus(id))
        console.log(id);
        }

    onClickConfirmed = (id) => () => {
        axios.put(`https://ke-ticket-app.herokuapp.com/api/v1/status/${id}`)
        .then(res => {
        alert("Payment Confirmed!");
        console.log(id)
        window.location.reload();
      });
    }

    onClickApproved = (id) => () => {
        axios.put(`https://ke-ticket-app.herokuapp.com/api/v1/approve/${id}`)
        .then(res => {
        alert("Payment Approved!");
        console.log(id)
        window.location.reload();
      });
    }

    render () {
        console.log(this.props.Payment, "CEK");
        
        return (
            
            <Container fluid>
                <HeaderHome/>
                    <div style={{backgroundColor:'rgb(255, 230, 255)'}}>
                    <Container style={{paddingTop:'10vh', paddingBottom:'20vh'}}>
                        <Header 
                            content='Payment'
                            style={style.header}
                        />
                        <Grid>
                            <Grid.Row columns={2} style={{paddingBottom:"0px"}}>
                                <Grid.Column style={{backgroundColor:"rgb(255, 77, 77)"}}>
                                    <Header
                                        size='medium'
                                        content='Payment'
                                        textAlign='center'
                                        style={{color:'white', marginTop:"3vh", marginBottom:"3vh"}}
                                    />
                                </Grid.Column>

                                <Grid.Column>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{backgroundColor:"rgb(255, 77, 77)", paddingTop:"0px", paddingBottom:"6px"}}/>
                        </Grid>

                        <Grid centered columns={1} style={{backgroundColor:"rgb(255, 255, 255", padding:"6vh 6vw 6vh 6vw"}}>
                            {this.props.Payment.map(Item => {
                                const checkDate = new Date(Item.Event.starttime);
                                const endDate = new Date(Item.Event.endtime);
                                const name = localStorage.getItem("name");
                                const id = localStorage.getItem("id");
                                const end = moment(endDate).format("DD MMMM YYYY");
                                const date = moment(checkDate).format("DD MMMM YYYY");
                                const startHrs = moment(checkDate).format("HH.mm");
                                const endHrs = moment(endDate).format("HH.mm");
                                console.log(Item);
                                
                                return (
                            <Grid.Column>
                                    <div className='background-red' style={{backgroundColor:"rgb(255, 77, 77)", padding:"8vh 2vw 8vh 2vw"}}>
                                        <div className='inside-content' style={{backgroundColor:"rgb(207, 196, 194)", padding:"0vh 0vw 0vh 1vw"}}>
                                                <Grid columns='equal' columns={2}>
                                                    <Grid.Column width={12}>
                                                        <Header
                                                        size='large'
                                                        content={name}
                                                        style={{margin:'0px', paddingTop:"5px"}}
                                                        />
                                                        <Header
                                                        size='small'
                                                        content={id}
                                                        style={{margin:'0px', paddingBottom:"5px"}}
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column floated='right' width={4}>
                                                        <Header
                                                            size='small'
                                                            content={`Face Value Rp. ${Item.Event.price}`}
                                                            style={{margin:'0px', paddingTop:"5px"}}
                                                            />
                                                    </Grid.Column>
                                                </Grid>
                                        </div>
                                         <div className='inside-content' style={{backgroundColor:"rgb(255, 255, 255)", padding:"0vh 0vw 0vh 1vw"}}>
                                                <Grid columns='equal' columns={2}>
                                                    <Grid.Column width={13}>
                                                        <Header
                                                        size='huge'
                                                        content={Item.Event.title}
                                                        style={{margin:'0px', paddingTop:"5px"}}
                                                        />
                                                        <Header
                                                        size='medium'
                                                        content={date}
                                                        style={{margin:'0px', paddingBottom:"5px"}}
                                                        />
                                                         <Header
                                                        size='small'
                                                        content={Item.Event.address}
                                                        style={{margin:'0px', paddingBottom:"5px"}}
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column floated='right' width={3}>
                                                        <Image 
                                                        size='tiny'
                                                        src="https://i.pinimg.com/originals/78/ea/5b/78ea5b81f560846d3812ed4342d768a9.png"/>
                                                    </Grid.Column>
                                                </Grid>
                                        </div>
                                    </div>
                                    <div className='outside-content' style={{backgroundColor:"rgb(255, 255, 255)", padding:"0vh 2vw 0vh 2vw", marginTop:"5vh"}}>
                                        <Grid columns='equal' columns={2}>
                                                <Grid.Column floated='left' width={12}>
                                                        <Header
                                                        size='medium'
                                                        content='Shopping Summary'
                                                        />
                                                         <p>Total Price</p>
                                                         <p>{Item.quantity}x Ticket</p>
                                                </Grid.Column>

                                                <Grid.Column floated='right' width={4}>
                                                <br/>
                                                <br/>
                                                <Header
                                                    size='small'
                                                    content={`Rp. ${Item.total_price}`}
                                                    floated='right'
                                                    />
                                                </Grid.Column>
                                        </Grid>
                                        <Divider/>
                                        <Grid columns={2} columns='equal'>
                                            <Grid.Column>
                                                    <Header
                                                    size='medium'
                                                    content='Prove of Payment'
                                                    />
                                                    <Button
                                                        compact
                                                        size='small'
                                                        content='Insert Image'
                                                    />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <br/>
                                                {Item.status == "pending" ? (
                                                <Button
                                                floated='right'
                                                    size='medium'
                                                    color='red'
                                                    content='Confirm'
                                                    onClick={this.onClickConfirmed(Item.id)}
                                                />
                                                ) : (
                                                <Button
                                                floated='right'
                                                    size='medium'
                                                    color='yellow'
                                                    content='Pending'
                                                    onClick={this.onClickApproved(Item.id)}
                                                />
                                                )}
                                            </Grid.Column>
                                        </Grid>
                                    </div>
                            </Grid.Column>
                            );
                            })};
                        </Grid>
                    </Container>
                    </div>
                <FooterHome/>
            </Container>
        )
    };
}

const style = {
    header: {
        color: 'rgb(255, 77, 77)',
        fontSize: '36px'
    },
    container: {
        backgroundColor: 'rgb(255, 230, 255)',
    },
    containerInside: {
        padding:'10vh 0vw 10vh 0vw'
    }
  }

// state
const mapStatetoProps = state => ({
    Payment: state.ReducerOrder.orderbystatus,
  })
  export default connect(mapStatetoProps)(Payment);