import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/card.css';

const Cards = () => {
  const [blocks, setBlocks] = useState ([
    {
      id: 1,
      header: "Tende da interno ed esterno",
      text: [
        "-Trattamento anti-polvere",
        "-Colori rinobilitati",
        "Trattamento anti-pioggia (solo per tendaggi esterni"
      ],
      button: "Chiedi un preventivo"
    },
    {
      id: 2,
      header: "Piumoni pronti in 90 minuti",
      text: [
        "Rapidità del servzio senza costi aggiuntivi",
        "Trattamento igienizzante",
        "Colori rinobilitati",
        "Cura del dettaglio"
      ],
      button: "Prenota subito"
    },
    {
      id: 3,
      header: "Servizio a domicilio",
      text: [
        "Prenotazione lavaggio tramite app",
        "-Ritiro e consegna a domicilio",
        "-Consegna a 2gg lavorativi dal ritiro",
        "-Senza costi aggiuntivi"
      ],
      button: "Scarica l'app"
    }
  ])
    return (
      <div className='container-cards'>
       <ul>
       {
         
          blocks.map(block => (
            <li key={block.id}>
            <div className='header'>
              <h1>{block.header}</h1>
            <div className='text'>
              <h2>{block.text}</h2>
            <div className='button'>{block.button}
            </div>
            </div>
            </div>
            </li>
          )
            ) 
        }
       </ul>
      </div>
 );}
    

export default Cards;
