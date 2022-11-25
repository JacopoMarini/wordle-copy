import React, {useContext} from 'react';
import {AppContext} from "../App";

function Letter({letterPos, attempt}) {
  const { board } = useContext(AppContext);
  // Salvo che il valore di letter è uguale a quella posizione in quel tentativo, questo mi permette di accedere alla lettera in qualsiasi momento della partita
  const letter = board[attempt, letterPos];
  return <div className="letter">{letter}</div>
}

export default Letter