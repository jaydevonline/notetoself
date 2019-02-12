import React, { Component } from 'react';


class Note extends Component {

    render() {
        return (
            <p className='note'>{ this.props.note.text }</p>
        );
      }
}

export default Note;