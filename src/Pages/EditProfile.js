import React, {Component} from 'react'
import {Grid, Form, Header, Button, Modal, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

 class EditProfile extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            phone: '',
            email: '',
            image: '',
            password: ''
        };
    }
    onChangeName = e => {
        this.setState({ name: e.target.value });
    };
    onChangePhone = e => {
        this.setState({ phone: e.target.value });
    };
    onChangeEmail = e => {
        this.setState({ email: e.target.value });
    };
    onChangeImage = e => {
        this.setState({ image: e.target.value });
    };
    onChangePassword = e => {
        this.setState({ password: e.target.value });
    };

    onClickUpdate = (id) => () => {
        const name = this.state.name;
        const phone =  this.state.phone;
        const email = this.state.email;
        const image = this.state.image;
        const password = this.state.password;
        axios
        .put(`https://ke-ticket-app.herokuapp.com/api/v1/user/${id}`, {
        name,
        phone,
        email,
        image,
        password
        })
        .then(res => {
            alert("Update Profile Success!");
            window.location.reload();
        })
    };
  
    render() {
    const id = localStorage.getItem("id");
    console.log(id);
    return (
        <Modal size='tiny' trigger={<Button color='red' content='Edit Profile' size='small' style={style.buttonProperties}/>} closeIcon>
            
            <div className='login-page' style={{backgroundColor:"rgb(255, 230, 255)"}}>
                <Grid style={{margin:"0vh 5vw 0vh 5vw"}}>
                  <Grid.Row>
                    <Grid.Column textAlign='center'>
                      <Header
                        size='large'
                        content='Edit Profile'
                        style={style.title}
                      />
                    </Grid.Column>
                  </Grid.Row>
      
                  <Grid.Row>
                    <Grid.Column>
                      <Form onSubmit={this.onClickUpdate(id)}>
                      <Form.Input transparent fluid type='text' placeholder='Name' style={style.formInput} value={this.state.name} onChange={this.onChangeName} />
                      <Form.Input transparent fluid type='text' placeholder='Phone' style={style.formInput} value={this.state.phone} onChange={this.onChangePhone} />
                      <Form.Input transparent fluid type='text' placeholder='Email' style={style.formInput} value={this.state.email} onChange={this.onChangeEmail} />
                      <Form.Input transparent fluid type='text' placeholder='Image' style={style.formInput} value={this.state.image} onChange={this.onChangeImage} />
                      <Form.Input transparent fluid type='password' placeholder='Password' style={style.formInput} value={this.state.password}  onChange={this.onChangePassword} />
                      <Grid.Row>
                        <Grid.Column style={{textAlign:'center'}}>
                          <Button
                          compact
                          type='submit'
                          color='red'
                          style={style.buttonProperties}
                          content='Submit'
                          />
                        </Grid.Column>
                       </Grid.Row>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </div>
            </Modal>
    )
  };
}

const style = {
    formInput: {
      borderBottom:'2px solid black',
      marginBottom:'5vh',
      fontSize:'20px',
    },
    title: {
      color:'black',
      fontSize:'40px',
      padding:'5vh 0vw 5vh 0vw',
    },
    buttonProperties: {
      color:'white', 
      width:'11vw', 
      marginTop:'5vh',
      marginBottom:'10vh',
    }
  }

export default EditProfile;
