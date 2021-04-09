import React, { useState } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import Button from './../forms/Button'
import { signInWithGoogle, auth } from './../../firebase/utils'
import FormInput from '../forms/FormInput/index';
import AuthWrapper from '../AuthWrapper/index';


const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
      setPassword('');
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {

      await auth.signInWithEmailAndPassword(email, password);
      resetForm();

    } catch(err) {
      // console.log(err);
    }
  }

  const configAuthWrapper = {
    headline: 'LogIn'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
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

          <div className="links">
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
  
}

export default SignIn;
