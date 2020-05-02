import React, { Component } from 'react';
import Hitta_parkering_bild from '../Image/Hitta_parkering.jpg';





class Hitta_parkering extends Component {

  render() {
    return(
      <div style={{padding:'30px',marginLeft:'100px'}}>
      <img src={Hitta_parkering_bild} className="App-logo" alt="logo" style={{width: '60%',
       float:'right',height: '70%', marginLeft:'70px', marginTop:'60px',borderRadius:'30px'}} />
      <h1 style={{textAlign:'left',fontFamily:'impact',marginTop:'60px'}}>Starta parkering </h1>
      <p style={{textAlign:'left',fontSize:'17px',fontFamily:'Arial',marginRight:'100px',marginTop:'60px'}}>
        
      Med funktionen ”Nära dig” i appen ser du vilka parkeringar som finns i din närhet just nu. Du ser parkeringarna utplacerade på en karta och under kartan hittar du adressen till respektive parkering. När du hittat en parkeringsplats nära din destination kan du också överskådligt se all information om parkeringstider, 
      timkostnad, parkeringens tidsbegränsning, zonkoder och allt du behöver veta om just den parkeringsplatsen.
        
      </p>
      </div>

      

    )

  }

}



export default Hitta_parkering;