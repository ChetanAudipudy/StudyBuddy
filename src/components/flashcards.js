import React from 'react';
import Flashcard from './flashcard';


const Flashcards = (props) => {
 
        return(

            <div>
             <h2>Here are your flashcards</h2>
             <div className='flashcard-panel'>
             {props.flashcards.map((card) => (
                <Flashcard 
                 key={card}
                 flashcardText = {card}
                />
             ))
            }
            </div>
            </div>
        )
}



export default Flashcards;