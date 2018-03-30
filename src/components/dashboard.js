import React from 'react';
import Navbar from './Navbar';
import AddFlashCard from './AddFlashCard';
import Flashcards from './flashcards';

export default class Dashboard extends React.Component{
    state = {
        firstName: '',
        flashcards: ['flashcard 1' , 'flashcard 2' , 'flashcard 3']
    }

    handleAddFlashcard = (flashcard) => {

        this.setState((prevState) => ({
            flashcards : prevState.flashcards.concat(flashcard)
        }))
    }

    componentDidMount() {
        let self = this;
        fetch('/api/users', {
            // headers : { 
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // }, 
            method: 'GET'
           
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            var data = JSON.stringify(response);
            console.log(data);
            return response.json();
        }).then(function(data) {
            console.log(data);
            self.setState({
                firstName: data[0].firstName
            });
        }).catch(err => {
            console.log('caught it!',err);
        })
    }
    
    render() {
        return (
            <div>
	            <Navbar firstName={this.state.firstName}/>

	            <div className="container">
		            <AddFlashCard 
		            handleAddFlashcard = {this.handleAddFlashcard}
		            />
		            <Flashcards 
		             flashcards = {this.state.flashcards}
		            />
		        </div>
            </div>
        );
    }
};