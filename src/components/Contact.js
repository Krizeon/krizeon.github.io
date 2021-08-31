import React, { useState } from 'react';
import ContentSeparator from './ContentSeparator'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class Contact extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     name: '',
     email: '',
     subject: '',
     message: ''
     }
   }

 handleSubmit(e) {
   e.preventDefault();

   fetch('http://localhost:3002/send', {
       method: "POST",
       body: JSON.stringify(this.state),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
     }).then(
     (response) => (response.json())
       ).then((response)=> {
     if (response.status === 'success') {
       alert("Message Sent.");
       this.resetForm()
     } else if(response.status === 'fail') {
       alert("Message failed to send.")
     }
   })
 }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
      <Container maxWidth="sm">
        <div maxWidth="50">
          <p align="justify">
            This is my Contact Page! Reach me at my email until this page
            is completed. Note: The form below is currently under construction.
            It will not send a message right now!
          </p>
           <form noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)} >
             <TextField value={this.state.name} required id="filled-basic" label="Full Name" variant="filled"  onChange={this.onNameChange.bind(this)}/>
             <TextField value={this.state.email} required id="filled-basic" label="Email" variant="filled"  onChange={this.onEmailChange.bind(this)}/>
             <TextField value={this.state.subject} required id="filled-basic" label="Subject" variant="filled"  onChange={this.onSubjectChange.bind(this)}/>
             <TextField id="filled-basic" label="Company" variant="filled" />
             <TextareaAutosize onSubmit={this.handleSubmit.bind(this)} value={this.state.message} aria-label="Message" minRows={15} placeholder="Say your piece..."  onChange={this.onMessageChange.bind(this)}/>
             <button type="submit" className="btn btn-primary">Submit</button>

           </form>
          <ContentSeparator/>
        </div>
    </Container>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
}

export default Contact;
