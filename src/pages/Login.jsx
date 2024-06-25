import React from 'react'
import Base from '../components/Base'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const Login = () => {
  return (
    <Base>
    
    <Container>
      <Form>

        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type='email' name='email'/>
        </FormGroup>

        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='password' name='password'/>
        </FormGroup>
        <Button type='submit'>Login</Button>
      </Form>
    </Container>
    </Base>
  )
}

export default Login