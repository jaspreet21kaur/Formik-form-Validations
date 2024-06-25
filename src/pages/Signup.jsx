import React ,{useState} from 'react'
import Base from '../components/Base'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import {useFormik} from "formik"
import { signupSchema } from '../schemas/sign'

const signupVal={
  name:'',
  email:'',
  password:'',
  confirm_password:''
}
const Signup = () => {
  const [error,setError]=useState("")
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
      initialValues:signupVal,
      validationSchema:signupSchema,
      onSubmit:(values,action)=>{
          console.log(values)
          let newUser={...values}
          const existingUsers = JSON.parse(localStorage.getItem('usersData')) || [];
          const find=existingUsers.filter((el)=>{
          if(el.email===values.email){
            return true
          }
        });
        if(find?.length){
          setError("User Exists !")
          console.log("userecists")
        }else{
          setError("")
          const updatedUsers = [...existingUsers, newUser];
          localStorage.setItem('usersData', JSON.stringify(updatedUsers));
          action.resetForm()
          

          
        }
      }
    })
  return (
    <Base>
    <Container>

     <Card>
        <CardHeader>
            Fill information to signup
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
    <FormGroup>
         <Label for="name">Enter Name</Label>
         <Input type='text' placeholder='Enter name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
         {errors.name &&touched.name ? <p>{errors.name}</p> :null}
      </FormGroup>   
      <FormGroup>
         <Label for="email">Enter Email</Label>
         <Input type='email' placeholder='Enter email' name='email'value={values.email} onChange={handleChange} onBlur={handleBlur}/>
         {errors.email &&touched.email ? <p>{errors.email}</p> :null}
      </FormGroup> 
      <FormGroup>
         <Label for="password">Enter Password</Label>
         <Input type='password' placeholder='Enter password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
         {errors.password &&touched.password ? <p>{errors.password}</p> :null}
      </FormGroup> 
      <FormGroup>
         <Label for="confirm_password">Confirm Password</Label>
         <Input type='password' placeholder='Enter confirm_password' name='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
         {errors.confirm_password &&touched.confirm_password ? <p>{errors.confirm_password}</p> :null}
      </FormGroup>  
     <Container className='text-center'>
      <p>{error}</p>
      <Button type='submit' color='dark'>Submit</Button>
     </Container>
          </Form>
        </CardBody>
     </Card>

    </Container>
    </Base>
  )
}

export default Signup