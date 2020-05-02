import React, { Component } from 'react';


import Jobba_hos_oss_bild from '../Image/jobba_hos_oss.jpg';




class jobba_hoss_oss extends Component {

  render() {
    return(
      <div>
                
             <div >
             <img src={Jobba_hos_oss_bild} className="App-logo" alt="logo" style={{width: '90%',
              height: '70%', marginLeft:'70px', marginTop:'60px',borderRadius:'30px'}} />
             <div style={{padding:'40px',marginLeft:'100px'}}>
             <h2 style={{fontFamily:'impact'}}>Jobba hos oss</h2>
             <p style={{fontSize:'17px',fontFamily:'Arial',marginRight:'100px'}}>
                Vill du bygga både din karriär och världens bästa betallösning för parkering? Om vi inte har din drömtjänst utannonserad just nu, kan du för säkerhets skull skicka en spontanansökan till info@parkster.se ändå.
                Vi är alltid nyfikna på hur nya personligheter och kompetenser kan bidra till vårt arbetslag och produktutveckling.
                Idag är Parkster ett glatt, skarpt och engagerat team som ständigt växer i antal.<br></br> Vår arbetsmiljö är trivsam och motiverande med kunniga kollegor som stöttar varandras utveckling framåt. 
                Hos oss är det lika självklart att dela med sig av sin egen kunskap som att be om att få ta del av sina kollegors. Det är ju genom att vi utvecklas som också Parkster utvecklas.
             </p>
           
             </div>
            </div>
      </div>

    )

  }

}



export default jobba_hoss_oss;