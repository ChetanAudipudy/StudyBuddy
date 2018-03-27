import React from 'react';
import Navbar from './Navbar';
import UserInfoPanel from './UserInfoPanel';
import Flashcards from './flashcards';
import AddFlashCard from './AddFlashCard'

export default class Dashboard extends React.Component{
    state = {
        flashcards: ['flashcard 1' , 'flashcard 2' , 'flashcard 3']
    }

    handleAddFlashcard = (flashcard) => {

        this.setState((prevState) => ({
            flashcards : prevState.flashcards.concat(flashcard)
        }))
    }

    
    render(){
        return(
            <div>
            <UserInfoPanel />
            <Flashcards 
             flashcards = {this.state.flashcards}
             
            />
            <AddFlashCard 
            handleAddFlashcard = {this.handleAddFlashcard}
            />
            </div>
        )
    }
    //dashboard code goes here. It will include all the other components such as flashcards component, navbar and anything else we decide to add once the user has logged in.
};