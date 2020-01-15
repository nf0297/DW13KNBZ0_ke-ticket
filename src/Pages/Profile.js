import React, {Component} from 'react'
import {Grid, Container, Header, Image, Card, Button} from 'semantic-ui-react'
import { connect } from 'react-redux';
import moment from 'moment';

import HeaderHome from './HeaderHome'
import FooterHome from './FooterHome'
import EditProfile from './EditProfile'
import { getAllEvent } from '../Redux/_action/ActionEvent';
import { getProfilebyID } from '../Redux/_action/ActionUser';
import CardsFavourite from '../Component/Content/Card/CardsFavourite';


class Profile extends Component {
    constructor(props){
        super(props);
    }

    
    componentDidMount() {
        const id = localStorage.getItem("id");
        console.log(id)
        this.props.dispatch(getProfilebyID(id));
        this.props.dispatch(getAllEvent());
        console.log(id)

        }
    render () {
        console.log(this.props.ProfileData)
        return (
            <Container fluid style={style.container}>
                <HeaderHome/>
                <Container style={style.containerInside}>
                    <Header 
                        content='Profile'
                        style={style.header}
                    />
                    {this.props.ProfileData.map(Item =>
                    <Grid columns='equal' columns={3}>
                        <Grid.Column width={7}>
                                <div>
                                <Header 
                                    size='huge'
                                    content={Item.name}
                                    style={style.profileTitle}
                                />    
                                <p style={style.profileContent}>{Item.dob}</p>
                                <p style={style.profileContent}>{Item.phone}</p>
                                <p style={style.profileContent}>{Item.email}</p>
                                </div>
                            
                        </Grid.Column>
                        
                        <Grid.Column width={3}>
                            <EditProfile/>
                        </Grid.Column>

                        <Grid.Column width={6} >
                            <Image 
                            circular
                            src={Item.image} 
                            size='medium'  
                            floated='right'
                            style={{marginRight:'0vw', width:'300px', height:'300px'}}
                            />
                        </Grid.Column>
                    </Grid>
                    )}
                    <Header 
                        content='Favourite'
                        style={style.header}
                    />
                    <Card.Group itemsPerRow={3}>
                        {this.props.AllEvents.map(Item => {
                        const checkDate = new Date(Item.starttime);
                        const date = moment(checkDate).format("DD MMMM YYYY");
                        return (
                        <CardsFavourite
                        image={Item.image}
                        title={Item.title}
                        price={Item.price}
                        content={Item.desc}
                        date={date}
                        category={Item.Category.name}
                        link={"../../event/"+Item.id+"/detail"}
                        />);
                    })}
                    </Card.Group>
                </Container>
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
    },
    profileTitle: {
        fontSize: '36px',
        color: 'rgb(113, 115, 117)',
        padding:'1vh 0vw'
    },
    profileContent: {
        fontSize: '30px',
        color: 'rgb(156, 161, 166)',
        margin:'1vh 0vw'
    }
}


// state
const mapStatetoProps = state => ({
    AllEvents: state.ReducerEvent.event,
    ProfileData: state.ReducerUser.user

  })
  
export default connect(mapStatetoProps)(Profile);
  