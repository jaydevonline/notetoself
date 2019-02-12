import React, { Component } from 'react';
import {Form, FormControl, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

import Note from './note.js';

import './App.css';

const cookie_key = 'NOTES';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      text : '',
      notes : []
    };

  }

  componentDidMount() {
    this.setState({notes : read_cookie(cookie_key)});
  }

  submit() {

    let notes = this.state.notes;
    
    let newNote = { text : this.state.text }

    notes.push(newNote);

    this.setState({ notes : notes });

    bake_cookie(cookie_key, this.state.notes);
  };

  onChange(e) {
    this.setState({text: e.target.value})
  }

  clear() {
    delete_cookie(cookie_key);
    this.setState({'notes': []});
  }

  
  render() {
    return (
      <div className="wrapper">
        <h2>
          Note to Self
        </h2>
        <Form>
          <FormControl onChange={(e) => { this.onChange(e)}} />
          <br/>
          <Button onClick= { this.submit.bind(this) } >Submit</Button>
        </Form>
        {
          this.state.notes.map( (note,index) => {
            return <Note key={note.text} note={note}  />
          })
        }
        <br/>

          <Button className='btn-clear' onClick= { this.clear.bind(this) } >Clear</Button> 
          
        }
      </div>
    );
  }
}

export default App;
