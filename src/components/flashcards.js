import React from 'react';
import Flashcard from './flashcard';


const Flashcards = (props) => {
 
        return(

            <div>
             <h2>Here are your flashcards</h2>
             {props.flashcards.map((card) => (
                <Flashcard 
                 key={card}
                 flashcardText = {card}
                />
             ))
            }
            </div>
        )
}



export default Flashcards;