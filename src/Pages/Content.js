import React, {Component} from 'react';
import { Container, Input, Header, Card } from 'semantic-ui-react';
import Cards from '../Component/Content/Card/Cards';
import Category from './Category';
import moment  from 'moment';
import { getAllCategory } from '../Redux/_action/ActionCategory';
import { getAllEvent } from '../Redux/_action/ActionEvent';
import { connect } from 'react-redux';

class Content extends Component {

constructor(props){
  super(props);
  this.state = {
    search: ""
  };
}

componentDidMount() {
  this.props.dispatch(getAllCategory());
  this.props.dispatch(getAllEvent());
}

onChangeSearch = event => {
  this.setState({ search: event.target.value });
};

render() {
  const event = this.props.AllEvents;
  const category = this.props.AllCategory;
  const { search } = this.state;
    const filteredEvents = event.filter(event => {
      return event.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  const todayEvents = event.filter(event => {
    return (
      moment(new Date(event.starttime)).format("YYYY-MM-DD") ===
      moment(new Date()).format("YYYY-MM-DD")
    );
  });

  const upcomingEvents = event.filter(event => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
      moment(new Date(event.starttime)).format("YYYY-MM-DD") ===
      moment(tomorrow).format("YYYY-MM-DD")
    );
  });

return (
        <div className='page-content' style={{backgroundColor:"rgb(246, 225, 247)"}}>  
                <Container style={{paddingBottom:"10vh"}}>
                  <br/>
                <Input fluid transparent icon='search' size='large' placeholder='Search Event' style={style.formInput} onChange={this.onChangeSearch} />
                  <br/>
                    <Card.Group itemsPerRow={4}>
                      {category.map(Item => 
                        <Category
                        title={Item.name}
                        image={Item.image}
                        link={"category/"+Item.id+"/events"}
                        />)}
                    </Card.Group>
                    <br/>
                    {search ?  (
                      <Container>
                    <Card.Group itemsPerRow={3}>
                    {filteredEvents &&
                        filteredEvents.map(Item => {
                          const checkDate = new Date(Item.starttime);
                          const date = moment(checkDate).format("DD MMMM YYYY");
                          return (
                          <Cards
                          image={Item.image}
                          title={Item.title}
                          price={Item.price}
                          content={Item.desc}
                          date={date}
                          category={Item.Category.name}
                          link={"event/"+Item.id+"/detail"}
                          />
                          );
                      })}
                    </Card.Group> 
                    </Container>
                    )
                  :
                    (
                     <Container>
                    <Header
                      content='Today'
                      style={style.header}
                    />
                      <Card.Group itemsPerRow={3}>
                      {todayEvents &&
                        todayEvents.map(Item => {
                          const checkDate = new Date(Item.starttime);
                          const date = moment(checkDate).format("DD MMMM YYYY");
                          return (
                          <Cards
                          image={Item.image}
                          title={Item.title}
                          price={Item.price}
                          content={Item.desc}
                          date={date}
                          category={Item.Category.name}
                          link={"event/"+Item.id+"/detail"}
                          />
                          );
                      })}
                      </Card.Group>
                    <br/>
                      <Header 
                        content='Upcoming'
                        style={style.header}
                      />
                      <Card.Group itemsPerRow={3}>
                          {upcomingEvents &&
                          upcomingEvents.map(Item => {
                          const checkDate = new Date(Item.starttime);
                          const date = moment(checkDate).format("DD MMMM YYYY");
                          return (
                          <Cards
                          image={Item.image}
                          title={Item.title}
                          price={Item.price}
                          content={Item.desc}
                          date={date}
                          category={Item.Category.name}
                          link={"event/"+Item.id+"/detail"}
                          />);
                      })}
                      </Card.Group>
                      </Container>
                    )}
                </Container>
        </div>
    )
  };
}

const style = {
  formInput: {
    borderBottom:'2px solid black',
    margin:'6vh 0vw',
    fontSize:'20px',
  },
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
  AllCategory: state.ReducerCategory.categories,
  AllEvents: state.ReducerEvent.event
})

export default connect(mapStatetoProps)(Content);
