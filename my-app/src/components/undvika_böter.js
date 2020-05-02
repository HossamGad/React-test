import React, { Component } from 'react';
import undvika_böter_bild from '../Image/böter.jpg';





class Parkera_flera_bilar extends Component {

  render() {
    return(
      <div>
         <div style={{padding:'30px',marginLeft:'100px'}}>
        <img src={undvika_böter_bild} className="App-logo" alt="logo" style={{width: '60%',
         float:'right',height: '70%', marginLeft:'70px', marginTop:'60px',marginBottom:'60px',borderRadius:'30px'}} />
        <h1 style={{textAlign:'left',fontFamily:'impact',marginTop:'60px'}}>Undvika böter </h1>
        <p style={{textAlign:'left',fontSize:'17px',fontFamily:'Arial',marginRight:'100px',marginTop:'60px'}}>
        Att drabbas av parkeringsböter är aldrig roligt, men för personer som är beroende av bilen i jobbet t.ex distriktsköterskor, 
        hemtjänsten, ledsagarservice, personliga assistenter m.m. kan detta bli ett riktigt kostsamt och påfrestande problem ( då man av någon utvecklingsstörd anledning anser att personen i fråga skall betala böterna ur egen plånbok ) och de oftas måste parkera bilen t.ex utanför porten till en fastighet eller på en gårdsplan där parkering normalt inte är tillåten.

          
        </p>

      </div>
      </div>

    )

  }

}



export default Parkera_flera_bilar;