import React, { Component } from 'react';
import Hitta_parkering_bild from './Hitta_parkering.jpg';





class Hitta_parkering extends Component {

  render() {
    return(
      <div>
          <h1 style={{float:'center', textAlign:'center',marginTop:'70px'}}>Hitta parkering</h1>
        <div style={{width: '100%', float:'right'}}>
          <img style={{float:'right',borderRadius:'55px',marginBottom:'30px'}} src={Hitta_parkering_bild}  alt="Hitta_parkering" />
          <p style={{textAlign:'left',marginLeft:'40px',marginTop:'60px',fontSize:'20px'}}>
          Med funktionen ”Nära dig” i appen ser du vilka parkeringar som finns i din närhet just nu. Du ser parkeringarna utplacerade på en karta och under kartan hittar du adressen till respektive parkering. 
          </p>
          <p style={{textAlign:'left',marginLeft:'40px',marginTop:'60px',fontSize:'20px'}}>
          När du hittat en parkeringsplats nära din destination kan du också överskådligt se all information om parkeringstider, timkostnad, parkeringens tidsbegränsning, 
          zonkoder och allt du behöver veta om just den parkeringsplatsen.
        </p>
        </div>

      </div>

    )

  }

}



export default Hitta_parkering;