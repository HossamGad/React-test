import React, { Component } from 'react';
import om_oss_bild from '../Image/om_oss.jpg';





class OmOss extends Component {

  render() {
    return(
      <div>
        <div >
             <img src={om_oss_bild} className="App-logo" alt="logo" style={{width: '90%',
              height: '70%', marginLeft:'70px', marginTop:'60px',borderRadius:'30px'}} />
             <div style={{padding:'40px',marginLeft:'100px'}}>
             <h2 style={{fontFamily:'impact'}}>Parkeringsvakt ...<br></br> Enklare parkering - utan extra kostnader.</h2>
             <p style={{fontSize:'17px',fontFamily:'Arial',marginRight:'100px'}}>
                 Parkera med Parkeringsvakt. Gör vad du behöver göra. Förläng parkeringstiden från kön på apoteket.
                 Hämta bilen när du behöver hämta bilen – inte för att parkeringen håller på att gå ut.
                 Betala i slutet av månaden. Slipp parkeringsböter för all framtid. Och betala inga extra kostnader. Allt det gör våra parkeringstjänster verklighet av.     </p>
         </div>
        </div>
      </div>

    )

  }

}



export default OmOss;