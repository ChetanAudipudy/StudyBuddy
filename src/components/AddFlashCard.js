import React from 'react';


export default class AddFlashCard extends React.Component {
    state = {
      error: undefined
    };
    handleAddFlashcard = (e) => {
      e.preventDefault();
      const flashcard = e.target.elements.flashcard.value.trim();
      const error = this.props.handleAddFlashcard(flashcard);
  
      this.setState(() => ({ error }));
  
      if (!error) {
        e.target.elements.flashcard.value = '';
      }
    };
    render() {
      return (
        <div>
        <form onSubmit={this.handleAddFlashcard}>
        <input type="text" name="flashcard" />
        <button>Add a new flashcard</button>
        </form>
        </div>
      );
    }
}

  