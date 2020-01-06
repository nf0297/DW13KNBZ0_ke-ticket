import React, {Component} from 'react'
import {Grid, Header, Image, Container, Divider, Button} from 'semantic-ui-react'

class Ticket extends Component {
    render () {

        return (
            <Container style={{backgroundColor:"rgb(255, 255, 255", padding:"6vh 6vw 6vh 6vw"}}>
                 <Grid centered columns={1}>
                            <Grid.Column>
                                    <div className='background-red' style={{backgroundColor:"rgb(255, 77, 77)", padding:"8vh 2vw 8vh 2vw"}}>
                                        <div className='inside-content' style={{backgroundColor:"rgb(207, 196, 194)", padding:"0vh 0vw 0vh 1vw"}}>
                                                <Grid columns='equal' columns={2}>
                                                    <Grid.Column width={12}>
                                                        <Header
                                                        size='large'
                                                        content={this.props.name}
                                                        style={{margin:'0px', paddingTop:"5px"}}
                                                        />
                                                        <Header
                                                        size='small'
                                                        content={this.props.id}
                                                        style={{margin:'0px', paddingBottom:"5px"}}
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column floated='right' width={4}>
                                                        <Header
                                                            size='small'
                                                            content={`Face Value Rp.${this.props.price}`}
                                                            style={{margin:'0px', paddingTop:"5px"}}
                                                            />
                                                        <Header
                                                            size='small'
                                                            content={`Status: ${this.props.status}`}
                                                            style={{margin:'0px', paddingTop:"5px", color:'green'}}
                                                            />
                                                    </Grid.Column>
                                                </Grid>
                                        </div>
                                         <div className='inside-content' style={{backgroundColor:"rgb(255, 255, 255)", padding:"0vh 0vw 0vh 1vw"}}>
                                                <Grid columns='equal' columns={2}>
                                                    <Grid.Column width={13}>
                                                        <Header
                                                        size='huge'
                                                        content={this.props.title}
                                                        style={{margin:'0px', paddingTop:"5px"}}
                                                        />
                                                        <Header
                                                        size='medium'
                                                        content={this.props.date}
                                                        style={{margin:'0px', paddingBottom:"5px"}}
                                                        />
                                                         <Header
                                                        size='small'
                                                        content={this.props.address}
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
                            </Grid.Column>
                        </Grid>
            </Container>
        )
    };
}

export default Ticket;