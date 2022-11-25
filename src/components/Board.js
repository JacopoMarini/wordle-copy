import React, {useContext} from 'react';
import {AppContext} from '../App';
import Letter from './Letter';

function Board() {
  return (
     <div className='board'>

      {/* Creo cinque righe che contengono ognuna ogni lettera, alla lettera passo la posizione e il tentativo */}
     <div className='row'>
       <Letter letterPos={0} attempt={0} />
       <Letter letterPos={1} attempt={0} />
       <Letter letterPos={2} attempt={0} />
       <Letter letterPos={3} attempt={0} />
       <Letter letterPos={4} attempt={0} /> 
      </div>
      {/* Incremento il tentativo, perchè se sono alla seconda riga sono al secondo tentativo */}
      <div className='row'>
       <Letter letterPos={0} attempt={1} />
       <Letter letterPos={1} attempt={1} />
       <Letter letterPos={2} attempt={1} />
       <Letter letterPos={3} attempt={1} />
       <Letter letterPos={4} attempt={1} /> 
      </div>

      <div className='row'>
       <Letter letterPos={0} attempt={2} />
       <Letter letterPos={1} attempt={2} />
       <Letter letterPos={2} attempt={2} />
       <Letter letterPos={3} attempt={2} />
       <Letter letterPos={4} attempt={2} /> 
      </div>

      <div className='row'>
       <Letter letterPos={0} attempt={3} />
       <Letter letterPos={1} attempt={3} />
       <Letter letterPos={2} attempt={3} />
       <Letter letterPos={3} attempt={3} />
       <Letter letterPos={4} attempt={3} /> 
      </div>

      <div className='row'>
       <Letter letterPos={0} attempt={4} />
       <Letter letterPos={1} attempt={4} />
       <Letter letterPos={2} attempt={4} />
       <Letter letterPos={3} attempt={4} />
       <Letter letterPos={4} attempt={4} /> 
      </div>

      <div className='row'>
       <Letter letterPos={0} attempt={5} />
       <Letter letterPos={1} attempt={5} />
       <Letter letterPos={2} attempt={5} />
       <Letter letterPos={3} attempt={5} />
       <Letter letterPos={4} attempt={5} /> 
      </div>
     
    </div>
  )
}

export default Board