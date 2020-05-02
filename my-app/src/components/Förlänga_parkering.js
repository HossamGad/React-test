import React, { Component } from 'react';
import förlänga_parkeringstid_bild from '../Image/förlänga_parkeringstid.jpg'


 let favoritecolor = {
    text:'Precis som du kan avsluta din parkering innan du använt hela tiden du angav från början, kan du utöka tiden om du märker att du inte kommer att hinna tillbaka som planerat. Klart!'}
  
  
  
    class Förlänga_parkering extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: {}};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: favoritecolor})
        }, 1500)
      }
      render() {
        return (
          <div style={{padding:'30px',marginLeft:'100px'}}>
        <img src={förlänga_parkeringstid_bild} className="App-logo" alt="logo" style={{width: '60%',
         float:'right',height: '80%', marginLeft:'70px', marginTop:'60px',borderRadius:'30px'}} />
        <h1 style={{textAlign:'left',fontFamily:'impact',marginTop:'50px'}}>Förlänga parkeringstiden </h1>
        <p style={{textAlign:'left',fontSize:'17px',fontFamily:'Arial',marginRight:'100px',marginTop:'40px'}}>
          
          {this.state.favoritecolor.text} 
          
        </p>
        </div>
        );
      }
    }
    


export default Förlänga_parkering;