import React, { Component } from 'react'
import './styles.scss'
import Button from './../forms/Button'
import { signInWithGoogle } from './../../firebase/utils'
import FormInput from '../forms/FormInput/index';

const initialState = {
  email: "",
  password: ""
};

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

    // passes props down to multiple inputs
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();
  }

  render(){
    const { email, password } = this.state;

    return (
      <div className="signin">
        <div className="wrap">
          <h2>
            LogIn
          </h2>
          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>

              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />

              <Button type="Submit">
                LogIn
              </Button>

              <div className="socialSignin">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
