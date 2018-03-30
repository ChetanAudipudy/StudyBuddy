import React from 'react';
import Navbar from './Navbar';
import Flashcards from './flashcards';

export default class Dashboard extends React.Component{
    state = {
        firstName: localStorage.getItem('user'),
        id: localStorage.getItem('id'),
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

  }

    componentDidMount() {
        var data = {
            user_id:localStorage.getItem('id')
        };

        // this.setState({
        //     firstName: localStorage.getItem('user'),
        //     id: localStorage.getItem('id')
        // })
        let self = this;
        fetch('/api/units', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body:JSON.stringify(data)

           
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

        }).catch(err => {
            console.log('caught it!', err);
        })
    }


    
    render() {
        return (
            <div>
	            <Navbar firstName={localStorage.getItem('user')}/>

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