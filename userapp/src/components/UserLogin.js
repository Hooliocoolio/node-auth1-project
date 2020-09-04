import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
import {Form, FormGroup, Label,  Input, Button} from 'reactstrap';


const Login = () => {
   
    const [ credentials, setCredentials ] = useState({});
    const {push} = useHistory();

    const handleChange = e => {
         
        setCredentials({
            ...credentials,
             [e.target.name]: e.target.value
        });
         
    }

    const handleLogin = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/login', credentials)
            .then(res => {
            console.log(res.data)
           
           
            push('/itemlist')
        })
        .catch(err => {
            console.log('Something is wrong', err)
        })
    }

    return (  
        <div className="loginform">
        <h3>Member Login</h3>
        <Form onSubmit={handleLogin}>
         <FormGroup>
        <Label for="username">Username </Label>
        <Input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="Enter a Username"
            onChange={handleChange}
           
            />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password </Label>
        <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Enter a password"
            onChange={handleChange}
            
            />
      </FormGroup>
      <Button>Login</Button>
      <p>Not a member? <Link to='/register'>Register Here</Link></p>
      </Form>
        
        </div>
    )

}


export default Login;