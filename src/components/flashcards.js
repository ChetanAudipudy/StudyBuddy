import React from 'react';
import Flashcard from './flashcard';

const Flashcards = (props) => {
 
    return (
        <div className="row">
            <h2 className="subheading">continue studying...</h2>
            <div className="flashcard-panel">
                 { props.flashcards.map((card) => (
                    <Flashcard 
                     key={card}
                     flashcardText = {card}
                     handleDeleteButton = {props.handleDeleteButton}
                     cardLink = './setpage'
                    />
                 ))}
            </div>

            <h2 className="subheading">browse all</h2>
            <div className="flashcard-panel">
                 { props.flashcards.map((card) => (
                    <Flashcard 
                     key={card}
                     flashcardText = {card}
                     cardLink = './setpage'
                    />
                 ))}
            </div>
        </div>
    )
}

export default Flashcards;