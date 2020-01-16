import React, {Component} from 'react';
import {Header, Container, Form, Button, Grid, Select} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';


import HeaderHome from './HeaderHome';
import FooterHome from './FooterHome';
import { getAllCategory } from '../Redux/_action/ActionCategory';

class AddEvent extends Component {
    

    constructor(props) {
        super(props);
    
        this.state = {
          category: null,
          title: "",
          image: "",
          date: "",
          time: "",
          price: "",
          address: "",
          urlmap: "",
          phone: "",
          content: ""
        };
    }
    
      onChangeTitle = e => {
        this.setState({ title: e.target.value });
      };

      onChangeCategory = e => {
        this.setState({ category: e.target.value });
      };
      
      onChangeImage = e => {
        this.setState({ image: e.target.value });
      };
      
      onChangeDate = e => {
        this.setState({ date: e.target.value });
      };
      
      onChangeTime = e => {
        this.setState({ time: e.target.value });
      };
      
      onChangePrice = e => {
        this.setState({ price: e.target.value });
      };
      
      onChangeAddress = e => {
        this.setState({ address: e.target.value });
      };
      
      onChangeUrlMap = e => {
        this.setState({ urlmap: e.target.value });
      };
      
      onChangeContent = e => {
        this.setState({ content: e.target.value });
      };

      onSubmitEvent = e => {
        const {category} = this.state;
        const {
          title,
          image,
          date,
          time,
          price,
          address,
          urlmap,
          content
        } = this.state;

        const dataEvent = {
            title:title,
            category_id:category,
            starttime:date+" "+time,
            endtime:date+" "+time,
            price:price,
            desc:content,
            address:address,
            urlmap:urlmap,
            image:image,
            user_id:localStorage.getItem("id"),
        };
        console.log(dataEvent);
        axios
        .post("https://ke-ticket-app.herokuapp.com/api/v1/event/add", dataEvent)
        .then(res => {
            console.log(res)
            alert("Event Successfully Added!")
            window.location.reload();
        })
        .catch(res => {
          console.log(res);
          alert("Add Event Fail!")
        })
    }
                                            
    componentDidMount(){
      this.props.dispatch(getAllCategory());
    }
    
    render () {
    const {category, title, image, date, time, price, address, urlmap, content} = this.state;
    const categoryData = this.props.AllCategory;
      
      return (
            <Container fluid>
                <HeaderHome/>
                <div style={{backgroundColor:'rgb(255, 230, 255)'}}>
                <Container style={{paddingTop:"10vh", paddingBottom:"10vh"}}>
                    <Header
                        content='Add Event'
                        style={style.header}
                    />
                   <Form onSubmit={this.onSubmitEvent} style={{alignItems:'center', paddingLeft:"12vw", paddingRight:"12vw", paddingTop:"8vh", paddingBottom:"8vh"}}>
                        <Form.Input transparent fluid type='text' placeholder='Title Event' style={style.formInput} value={title} onChange={this.onChangeTitle} />
                        <Form.Group widths='equal'>
                          <p style={style.labelSelect}>Event Category</p>
                          <Form.Field transparent fluid control='select' style={style.formSelect} value={category} onChange={this.onChangeCategory}>
                            {categoryData.map(item => (
                              <option value={item.id}>{item.name}</option>
                            ))}
                          </Form.Field>
                        </Form.Group>
                        <Form.Input transparent fluid type='text' placeholder='Url Image' style={style.formInput} value={image} onChange={this.onChangeImage} />
                        <Form.Input transparent fluid type='text' placeholder='YYYY-MM-DD' style={style.formInput} value={date} onChange={this.onChangeDate} />
                        <Form.Input transparent fluid type='text' placeholder='Time(HH:mm)' style={style.formInput} value={time} onChange={this.onChangeTime}/>
                        <Form.Input transparent fluid type='text' placeholder='Price' style={style.formInput} value={price} onChange={this.onChangePrice}/>
                        <Form.Input transparent fluid type='text' placeholder='Address Event' style={style.formInput} value={address} onChange={this.onChangeAddress}/>
                        <Form.Input transparent fluid type='text' placeholder='Url Map' style={style.formInput} value={urlmap} onChange={this.onChangeUrlMap} />
                        <Form.Input transparent fluid type='text' placeholder='Deskripsi event' style={style.formInput} value={content} onChange={this.onChangeContent}/>
                    <Grid>
                       <Grid.Column style={style.buttonGrid}>
                            <Button  
                                color='blue'
                                content='Publish'
                                size='medium'
                                type='submit'
                                style={style.buttonLayout}
                            />
                        </Grid.Column>
                    </Grid>
                   </Form>
                   
                   <br/>
                   
                </Container>
                </div>
                <FooterHome/>
            </Container>
        )
    };
}

const mapStateToProps = state => {
  return {
    AllCategory: state.ReducerCategory.categories
  };
};

export default connect(mapStateToProps)(AddEvent);

const style = {
    header: {
        color: 'rgb(255, 77, 77)',
        fontSize: '36px'
    },
    buttonGrid: {
        textAlign: 'center'
    },
    buttonLayout: {
        width:'10vw'
    },
    formInput: {
        borderBottom:'2px solid black',
        marginBottom:'6vh',
        fontSize:'20px',
    },
    formSelect: {
      marginBottom: '2vh',
      fontSize:'16px'
    },
    labelSelect: {
      color: '#bfb8b8',
      fontSize:'20px',
      width: '15vw',
      paddingTop:'0.5vh',
      marginLeft: '0.5vw',
      marginBottom: '2vh'
    }
  }