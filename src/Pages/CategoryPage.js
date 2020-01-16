import React, {Component} from 'react';
import { Header, Card, Container, Divider } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';

import HeaderHome from './HeaderHome';
import Cards from '../Component/Content/Card/Cards';
import FooterHome from './FooterHome';
import { getEventByCategory } from '../Redux/_action/ActionEvent';

class CategoryPage extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
    componentDidMount() {
        const {id} = this.props.match.params; 
        this.props.dispatch(getEventByCategory(id));
        }
      

  render() {
    const dataEvent = this.props.EventByCategory;

    const sortEvent = dataEvent.filter(dataEvent => {
      return (
        moment(new Date(dataEvent.startTime)).format("YYYY-MM-DD") ===
        moment(this.state.startDate).format("YYYY-MM-DD")
      );
    });
        return (
            <Container fluid>
            <HeaderHome/>
            <div style={style.container}>
            <Container style={{paddingBottom:"5vh"}}>
             {this.props.EventByCategory.slice(0, 1).map(Item => 
               <Header 
               content={Item.Category.name}
               style={style.header}
               />
             )}
             
              <span style={{fontSize:"16px", paddingRight:'0.5vw'}}>Sort by : </span>
                <DatePicker 
                selected={this.state.startDate} 
                onChange={this.handleChange}
              />
              <Card.Group itemsPerRow={3} style={{paddingTop:"2vh"}}>
                {sortEvent &&
                  sortEvent.map(Item => {
                    const checkDate = new Date(Item.startTime);
                    const date = moment(checkDate).format("DD MMMM YYYY");
                    return(
                    <Cards
                    image={Item.image}
                    title={Item.title}
                    price={Item.price}
                    content={Item.description}
                    date={date}
                    category={Item.Category.name}
                    link={"/event/"+Item.id+"/detail"}
                    />
                  )})}
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
      fontSize: '36px',
      margin:'3vh 0vw'
  },
  container: {
      backgroundColor: 'rgb(255, 230, 255)',
      paddingTop: '3vh'
  },
  containerInside: {
      padding:'3vh 0vw 3vh 0vw'
  },
  calendar: {
    marginLeft:'100vw'
  },
}

// state
const mapStatetoProps = state => ({
    EventByCategory: state.ReducerEvent.eventbycategory
  })
  
  export default connect(mapStatetoProps)(CategoryPage);