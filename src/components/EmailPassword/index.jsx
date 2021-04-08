import React, { Component } from 'react'
import './styles.scss'

import AuthWrapper from '../AuthWrapper/index';
import FormInput from '../forms/FormInput/index';
import Button from '../forms/Button/index';

export default class EmailPassword extends Component {
  render() {

    const configAuthWrapper = {
      headline: 'Email Passowrd'
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        
      </AuthWrapper>
    );
  }
}
