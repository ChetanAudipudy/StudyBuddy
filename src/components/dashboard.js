import React from 'react';
import Navbar from './Navbar';
import Flashcards from './flashcards';

export default class Dashboard extends React.Component{
    state = {
        firstName: '',
        flashcards: [
        {name: 'vocabulary', bg: 'card-vocab'},
        {name: 'reading', bg: 'card-reading'},
        {name: 'astronomy', bg: 'card-astro'},
        {name: 'chemistry', bg: 'card-chem'},
        {name: 'math', bg: 'card-math'}
        ]
    }

    handleDeleteButton = (flashcardToRemove) => {
        this.setState((prevState) => ({
            flashcards: prevState.flashcards.filter((flashcard) => flashcardToRemove !== flashcard)
        }))
        console.log("delete button clicked");
        console.log("flashcard array" , this.state.flashcards);
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
            localStorage.setItem('userName', data[0].firstName);
            self.setState({
                firstName: data[0].firstName
            });


        }).catch(err => {
            console.log('caught it!', err);
        })
    }


    
    render() {
        return (
            <div>
	            <Navbar firstName={this.state.firstName}/>

	            <div className="container">
		            <Flashcards 
                     flashcards = {this.state.flashcards} 
                     handleDeleteButton = {this.handleDeleteButton}
		            />
		        </div>
            </div>
        );
    }
};