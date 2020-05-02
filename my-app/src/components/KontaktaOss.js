import React, { Component } from 'react';
import Kontakta_oss_bild from '../Image/kontakta_oss.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDataComponent from './form-data.component';
import '../App.css';






class KontaktaOss extends Component {

  render() {
    return(
      <div>
        <div >
             <img src={Kontakta_oss_bild} className="App-logo" alt="logo" style={{width: '90%',
              height: '70%', marginLeft:'70px', marginTop:'60px',borderRadius:'30px'}} />
             <div style={{padding:'40px',marginLeft:'100px'}}>
             <h2 style={{fontFamily:'impact'}}>Kontakta oss</h2>
             <p style={{fontSize:'17px',fontFamily:'Arial',marginRight:'100px'}}>
             Här hittar du kontaktinformation så att du direkt kan kontakta oss och få svar på dina frågor. Om du letar efter en avdelning eller befattning som inte finns med just här, 
             kan du alltid kontakta vår kundtjänst istället så hjälper vi dig därifrån. 
             </p> 
         </div>
         </div>
         <FormDataComponent />
                  
      </div>

    )

  }

}



export default KontaktaOss;