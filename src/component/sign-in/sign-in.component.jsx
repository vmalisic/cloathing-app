import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

handleSubmit = e => {
    e.preventDefault();
    this.setState({
        email: '', password: ''
    })
}

handleChange = e =>{
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
}
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I alredy have an account</h2>
        <span>Sign in with your email and pass</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput 
                name="email" 
                type="email" 
                value={this.state.email} 
                required 
                label="email"
                handleChange={this.handleChange}
            />
            <FormInput 
                type="password" 
                name="password" 
                value={this.state.password} 
                required 
                label="password"
                handleChange={this.handleChange}
            />
            <CustomButton type="submit">Submit Form</CustomButton>
        </form>
      </div>
    )
  }
}
