import React, {Component} from 'react';
import {Grid, Icon, Container, Item, Divider} from 'semantic-ui-react';

class Footer extends Component {
    render () {
        return (
            <Container fluid>
                <div style={{backgroundColor:"rgb(164, 194, 219)"}}>
                <Container>
                <Grid divided="vertically" style={{height:"260px", paddingLeft:"0%", paddingRight:"0%"}}>
                <Grid.Row columns={3} style={{marginBottom:"50px", height:"117px"}}>
                    <Grid.Column>
                        <div className="leftMain" style={{width:"370px", height:"117px", paddingLeft:"16px", paddingRight:"16px", marginTop:"50px"}}>
                        <article>
                            <Icon.Group size='big'>
                                <Icon name='ticket' color='yellow'><h4 style={{color:'white'}}> Ke - Ticket </h4></Icon>
                            </Icon.Group>
                        <p style={{color:"white"}}> <a href="#" style={{color:"white"}}>Ke - Ticket - is a web based platform that provides ticket to various event around sports, music, science and programming</a></p>
                        </article>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div className="middleMain" style={{width:"370px", height:"117px", paddingLeft:"16px", paddingRight:"16px", marginTop:"50px", marginLeft:"60px"}}>
                        <article>
                        <Item>
                            <Item.Content verticalAlign='top' style={{color:'white'}}>
                                <strong style={{fontSize:'16px'}}>Links</strong>
                                <Item.Description>About Us</Item.Description>
                            </Item.Content>
                        </Item>
                        </article>
                        <Divider hidden/>
                        <article>
                        <Item>
                            <Item.Content verticalAlign='middle' style={{color:'white'}}>
                                <strong style={{color:'white', fontSize:'16px'}}>Follow Us On</strong>
                                    <Item.Description>
                                        <Icon circular name='instagram' color='white'/> Instagram
                                    </Item.Description>
                                    <Item.Description>
                                        <Icon circular name='twitter' color='white'/> Twitter
                                    </Item.Description>
                            </Item.Content>
                        </Item>
                        </article>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div className="rightMain" style={{width:"370px", height:"117px", paddingLeft:"16px", paddingRight:"16px", marginTop:"50px"}}>
                        <article>
                        <Item>
                                    <Item.Content verticalAlign='top' style={{color:'white'}}>
                                    <strong style={{fontSize:'16px'}}>Have A Question?</strong>
                                        <Item.Meta>Ke - Ticket</Item.Meta>
                                        <Item.Description>Email: support@dumbtick.com</Item.Description>
                                    </Item.Content>
                                </Item>
                        </article>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                </Container>
                </div>
            </Container>
        )
    };
}

export default Footer;