import React, {Component} from 'react';
import { Header, Card, Container, Input, Divider } from 'semantic-ui-react';
import moment from 'moment';
import { connect } from 'react-redux';

import HeaderHome from './HeaderHome';
import Cards from '../Component/Content/Card/Cards';
import FooterHome from './FooterHome';
import { getEventByCategory } from '../Redux/_action/ActionEvent';

class CategoryPage extends Component {
    componentDidMount() {
        const {id} = this.props.match.params; 
        this.props.dispatch(getEventByCategory(id));
        }
      

  render() {

        return (
            <Container fluid style={{padding:'0vh', marginTop:'0'}}>
            <HeaderHome/>
            <div style={style.container}>
            <Container style={{paddingBottom:"5vh", marginTop:'0'}}>
              <Divider hidden/>
             {this.props.EventByCategory.slice(0, 1).map(Item => 
               <Header 
               content={Item.Category.name}
               style={style.header}
               />
             )}
              <span style={{fontSize:"16px"}}>Sort by : </span>
              <Input
              icon='calendar'
              size='large' 
              placeholder='Choose Date' 
              style={{marginLeft:"2vh"}}
              />
                   <Input
              icon='dropdown'
              size='large' 
              placeholder='Choose Location' 
              style={{marginLeft:"2vh"}}
              />
                <Card.Group itemsPerRow={3} style={{paddingTop:"3vh"}}>
                    {this.props.EventByCategory.map(Item => {
                    const checkDate = new Date(Item.startTime);
                    const date = moment(checkDate).format("DD MMMM YYYY");
                    return (
                    <Cards
                    image={Item.image}
                    title={Item.title}
                    price={Item.price}
                    content={Item.description}
                    date={date}
                    category={Item.Category.name}
                    link={"/event/"+Item.id+"/detail"}
                    />);
                    })}
                </Card.Group>
              <Divider hidden/>
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
      paddingTop: '10vh'
  },
  containerInside: {
      padding:'10vh 0vw 10vh 0vw'
  }
}

// state
const mapStatetoProps = state => ({
    EventByCategory: state.ReducerEvent.eventbycategory
  })
  
  export default connect(mapStatetoProps)(CategoryPage);