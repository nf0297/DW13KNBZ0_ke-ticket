import React, {Component} from 'react';
import {Container, Card, Divider} from 'semantic-ui-react';
import moment from 'moment';

import HeaderHome from './HeaderHome';
import FooterHome from './FooterHome';
import CardsEvent from '../Component/Content/Card/CardsEvent';
import EventBottom from '../Component/EventBottom';

import { getEventByID } from '../Redux/_action/ActionEvent';
import { connect } from 'react-redux';


class Event extends Component {

    componentDidMount() {
        const {id} = this.props.match.params; 
        this.props.dispatch(getEventByID(id))
        }
      

  render() {

    return (
      <Container fluid>
        <HeaderHome/>
        <div style={{backgroundColor:'rgb(246, 225, 247)'}}>
          <br/>
        <Container style={{paddingBottom:"10vh"}}>
          <Divider hidden/>
          <Card.Group itemsPerRow={1}>
            {this.props.EventCategory.map(Item => {
              const checkDate = new Date(Item.startTime);
              const endDate = new Date(Item.endTime);
              const end = moment(endDate).format("DD MMMM YYYY");
              const date = moment(checkDate).format("DD MMMM YYYY");
              const startHrs = moment(checkDate).format("HH.mm");
              const endHrs = moment(endDate).format("HH.mm");
              return (
                <CardsEvent
                        id={Item.id}
                        image={Item.image}
                        title={Item.title}
                        price={Item.price}
                        categoryName={Item.Category.name}
                        date={date}
                        end={end}
                        startHrs={startHrs}
                        endHrs={endHrs}
                        hostImage={Item.CreatedBy.image}
                        host={Item.CreatedBy.name}
                        category={Item.Category.name}
                        phone={Item.CreatedBy.phone}
                        email={Item.CreatedBy.email}
                        link={"event/"+Item.id+"/detail"}
                        />
                );
            })}
          </Card.Group>
          <Divider hidden/>
          {this.props.EventCategory.map(Item => {
            return (
              <EventBottom
              description={Item.description}
              map={Item.urlMaps}
              />
            );
          })}
        </Container>
        </div>
        <FooterHome/>
      </Container>
    )
  };
}

// state
const mapStatetoProps = state => ({
  EventCategory: state.ReducerEvent.eventbyid,
})

export default connect(mapStatetoProps)(Event);