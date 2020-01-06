import React, {Component} from 'react';
import { Menu, Grid, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import DropdownMenu from './Menu';

export default class HeaderHome extends Component {

  render() {

    return (
      <div className="page-header" style={{backgroundColor:"rgb(164, 194, 219)"}}>
      <Container fluid>
                <div style={{marginTop:"0vh", backgroundColor:"rgb(164, 194, 219)", paddingTop:'4vh', paddingBottom:'0vh'}}>
                <Container>
                <Grid divided="vertically" style={{height:"110px", paddingLeft:"0%", paddingRight:"0%"}}>
                <Grid.Row columns={3} style={{marginBottom:"0vh", height:"4vh"}}>
                    <Grid.Column>
                        <div className="leftMain" style={{width:"370px", height:"50px", paddingLeft:"16px", paddingRight:"16px", marginTop:"10px"}}>
                        <article>
                          <Link to='/'>
                            <Icon.Group size='big'>
                                <Icon name='ticket' color='yellow'><h4 style={{color:'white', fontSize:'20px'}}> Ke - Ticket </h4></Icon>
                            </Icon.Group>
                          </Link>
                        </article>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                    <div className="rightMain" style={{width:"370px", height:"50px", paddingLeft:"16px", paddingRight:"16px", marginTop:"10px"}}>
                      </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div className="rightMain" style={{width:"370px", height:"50px", paddingLeft:"16px", paddingRight:"16px", marginTop:"10px", marginRight:'30px'}}>
                        <article>
                          <Menu text>
                            {localStorage.isLoggedIn == 1 ? (
                            <Menu.Menu position='right'>
                              <Menu.Item>
                                  <DropdownMenu/>
                              </Menu.Item>
                            </Menu.Menu>
                             ) : (
                            <Menu.Menu position='right'>
                                 <Menu.Item>
                                   <Icon.Group size='big'>
                                     <Icon name='user outline' inverted color='white'/>
                                     <Icon corner='bottom right' name='add circle' inverted color='white'/>
                                   </Icon.Group>
                                   <Register/>
                                 </Menu.Item>
                                 
                                 <Menu.Item>
                                   <Icon.Group size='big'>
                                     <Icon name='circle outline' inverted color='white'/>
                                     <Icon corner='top left' name='minus' inverted color='white'/>
                                   </Icon.Group>
                                   <Login/>
                                 </Menu.Item>
                            </Menu.Menu>
                             )}
                        </Menu>
                        </article>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                </Container>
                </div>
            </Container>
      </div>
    )
  };
}
