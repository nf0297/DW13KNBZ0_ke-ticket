import React, {Component} from 'react'
import {Grid, Form, Header, Button, Modal, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Login extends Component {

  // userData;

  constructor(props) {
    super(props);

    this.state = {
      id:'',
      username: '',
      password: '',
      isLoggedIn: ''
    }
  }

  //Event
  onChangeUsername = e => {
    this.setState({ username: e.target.value })
  }

  onChangePassword = e => {
    this.setState({ password: e.target.value })
  }

  onSubmitLogin = e => {
  const username = this.state.username;
  const password = this.state.password;
  console.log(this.state.username);
  axios
    .post("https://ke-ticket-app.herokuapp.com/api/v1/login", {
      username,
      password
    })
    .then(res => {
      if(res.data.error) {
      alert(res.data.message)  
      } else {
        console.log(res.data.user);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("isLoggedIn", 1);
        window.location.reload();
      }
      });
  };

  //Life Cycle
  componentDidMount() {
    // this.userData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem("user")) {
      this.setState({
        id: localStorage.id,
        name: localStorage.name,
        username: localStorage.username,
        password: localStorage.password
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
        <h4 style={{color:'white', marginLeft:'10px'}}>Login</h4>
      </Link>} closeIcon>
      
      <div className='login-page' style={{backgroundColor:"rgb(255, 230, 255)"}}>
          <Grid style={{margin:"0vh 5vw 0vh 5vw"}}>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Header
                  size='large'
                  content='LOGIN'
                  style={style.title}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Form onSubmit={this.onSubmitLogin}>
                <Form.Input transparent fluid type='text' placeholder='Username' style={style.formInput} value={this.state.username} onChange={this.onChangeUsername} />
                <Form.Input transparent fluid type='password' placeholder='Password' style={style.formInput} value={this.state.password}  onChange={this.onChangePassword} />
                <Grid.Row>
                  <Grid.Column style={{textAlign:'center'}}>
                    <Button
                    compact
                    type='submit'
                    color='red'
                    content='Login'
                    size='huge'
                    style={style.buttonProperties}
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
    width:'15vw', 
    marginTop:'5vh',
    marginBottom:'10vh',
  }
}

export default Login;