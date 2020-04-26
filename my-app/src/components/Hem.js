
import React, { Component } from 'react';
import logo from './mobilapp.png';




let fakeServerData = {
    user: {
    name: ' Välkommen till Parkeringsvakt'}}

class Hem extends Component {
    constructor() {
        super();  
        this.state = {serverData: {}}
    
      }
    
      componentDidMount() {
            setTimeout(() => {
            this.setState({serverData: fakeServerData});
    
        }, 1000);}

  render() {
    return(
              
        <div >
             <h1 style={{float:'center', textAlign:'center',marginTop:'70px',fontFamily: "Times New Roman",
             borderRadius:'5px'}}>
              {this.state.serverData.user && this.state.serverData.user.name}
             </h1>
             <div style={{position: 'relative'}}>
             <img src={logo} className="App-logo" alt="logo" style={{width: '90%',
              height: '80%', marginLeft:'70px',borderRadius:'55px'}} />
              <div style={{position:'absolute',top:'200px',left:'116px',color:'white'}}>
                  <h2>Parkera där du vill, <br></br>betala inget extra</h2>
                  </div>
  
            </div>
            </div>
           
        
         
                    
    )
    


  }

}



export default Hem;