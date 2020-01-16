import React, {Component} from 'react'
import {Grid, Form, Header, Button, Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      dob: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      image: "",
      isLoggedIn: ""
    };
  }

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangePhone = e => {
    this.setState({ phone: e.target.value });
  };

  onChangeDOB = e => {
    this.setState({ dob: e.target.value });
  };

  onChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  onChangeImage = e => {
    this.setState({ image: e.target.value });
  };

  onSubmitRegister = e => {
    const name = this.state.name;
    const email = this.state.email;
    const phone =  this.state.phone;
    const dob = this.state.dob;
    const username = this.state.username;
    const password = this.state.password;
    const image = this.state.image;

    const dataUser = {
      name:name,
      email:email,
      phone:phone,
      dob:dob,
      username:username,
      password:password,
      image:image
    };
    console.log(dataUser);

    axios
    .post("https://ke-ticket-app.herokuapp.com/api/v1/register", dataUser)
    .then(res => {
      console.log(res.data.user)
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("isLoggedIn", 1);
      alert("Account Created Successfully!")
      window.location.reload();
    })
    .catch(res => {
      console.log(res);
      alert("Register Fail!")
    })
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.setState({
        id: localStorage.id,
        name: localStorage.name,
        email: localStorage.email,
        phone: localStorage.phone,
        username: localStorage.username,
        password: localStorage.password,
        image: localStorage.image
      });
    } else {
      this.setState({
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        image: ''
      });
    }
  }

  render () {
    return (
      <Modal size='tiny' trigger={ 
      <Link>
        <h4 style={{color:'white', marginLeft:'10px'}}>Register</h4>
      </Link>} closeIcon>
      
      <div className='register-page' style={{backgroundColor:"rgb(255, 230, 255)"}}>
          <Grid style={{margin:"0vh 5vw 0vh 5vw"}}>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Header
                  size='large'
                  content='REGISTER'
                  style={style.title}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Form on onSubmit={this.onSubmitRegister}>
                  <Form.Input transparent fluid type='text' placeholder='Name' style={style.formInput} value={this.state.name} onChange={this.onChangeName} />
                  <Form.Input transparent fluid type='text' placeholder='Email' style={style.formInput} value={this.state.email} onChange={this.onChangeEmail} />
                  <Form.Input transparent fluid type='text' placeholder='Phone' style={style.formInput} value={this.state.phone} onChange={this.onChangePhone} />
                  <Form.Input transparent fluid type='text' placeholder='YYYY-MM-DD' style={style.formInput} value={this.state.dob} onChange={this.onChangeDOB} />
                  <Form.Input transparent fluid type='text' placeholder='Username' style={style.formInput} value={this.state.username} onChange={this.onChangeUsername} />
                  <Form.Input transparent fluid type='password' placeholder='Password' style={style.formInput} value={this.state.password} onChange={this.onChangePassword} />
                  <Form.Input transparent fluid type='text' placeholder='Image' style={style.formInput} value={this.state.image} onChange={this.onChangeImage} />
                  <Form.Field align='center'>
                  <Grid.Row>
                    <Grid.Column style={{textAlign:'center'}}>
                      <Button
                      compact
                      type='submit'
                      color='red'
                      content='Register'
                      size='huge'
                      style={style.buttonProperties}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
{/* 
            <Grid.Row>
              <Grid.Column style={{textAlign:'center'}}>
              
              </Grid.Column>
            </Grid.Row> */}
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
    width:'15vw', 
    marginTop: '2vh',
    marginBottom:'10vh'
  }
}

// state
const mapStatetoProps = state => ({
  AllCategory: state.ReducerCategory.categories,
  AllEvents: state.ReducerEvent.event
})

export default connect(mapStatetoProps)(Register);
