import React, {Component} from 'react';
import {Header, Container, Form, Button, Input, Select, Grid} from 'semantic-ui-react';
import axios from 'axios';

import HeaderHome from './HeaderHome';
import FooterHome from './FooterHome';

export default class AddEvent extends Component {
    

    constructor(props) {
        super(props);
    
        this.state = {
            id: "",
            title: "",
            category: "",
            image: "",
            date: "",
            time: "",
            price: "",
            address: "",
            urlmap: "",
            phone: "",
            emailEO: "",
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
        this.setState({ map: e.target.value });
      };
      
      onChangePhone = e => {
        this.setState({ phone: e.target.value });
      };
      
      onChangeEmail = e => {
        this.setState({ email: e.target.value });
      };
      
      onChangeContent = e => {
        this.setState({ content: e.target.value });
      };

      onSubmitEvent = e => {
        const title = this.state.title;
        const category = this.state.category;
        const image = this.state.image;
        const date = this.state.date;
        const time = this.state.time;
        const price = this.state.price;
        const address = this.state.address;
        const map = this.state.map;
        const content = this.state.content;
        
        const dataEvent = {
            title:this.state.title,
            category_id:this.state.category,
            starttime:this.state.date+this.state.time,
            endtime:this.state.date+this.state.time,
            price:this.state.price,
            desc:this.state.content,
            address:this.state.address,
            urlmap:this.state.map,
            image:this.state.image,
            user_id:localStorage.getItem("id"),
        }

        axios
        .post("http://localhost:5000/api/v1/event/add", dataEvent)
        .then(res => {
            console.log(res.data.event)
            alert("Event Successfully Added!")
            window.location.reload();
        })
    }
                                            
    
    
    
    render () {
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
                        <Form.Input transparent fluid type='text' placeholder='Title Event' style={style.formInput} value={this.state.title} onChange={this.onChangeTitle} />
                        <Form.Input transparent fluid type='text' placeholder='Category' style={style.formInput} value={this.state.category} onChange={this.onChangeCategory} />
                        <Form.Group>
                            <Form.Input transparent width={13} type='text' placeholder='Upload Pamflet' style={style.formInput} value={this.state.image} onChange={this.onChangeImage} />
                            <Form.Button content='Attach Image' style={style.buttonLayout} />
                        </Form.Group>
                        <Form.Input transparent fluid type='text' placeholder='DD/MM/YYYY' style={style.formInput} value={this.state.date} onChange={this.onChangeDate} />
                        <Form.Input transparent fluid type='text' placeholder='Time' style={style.formInput} value={this.state.time} onChange={this.onChangeTime}/>
                        <Form.Input transparent fluid type='text' placeholder='Price' style={style.formInput} value={this.state.price} onChange={this.onChangePrice}/>
                        <Form.Input transparent fluid type='text' placeholder='Address Event' style={style.formInput} value={this.state.address} onChange={this.onChangeAddress}/>
                        <Form.Input transparent fluid type='text' placeholder='Url Map' style={style.formInput} value={this.state.map} onChange={this.onChangeUrlMap} />
                        <Form.Input transparent fluid type='text' placeholder='Deskripsi event' style={style.formInput} value={this.state.content} onChange={this.onChangeContent}/>
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
  }