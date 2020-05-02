import React, { Component } from 'react';
import starta_parkering_bild from '../Image/starta_parkering.jpg';

let favoritecolor = {
  text:'När du parkerat bilen och vill starta din parkering kan du göra det antingen genom att hitta din parkering via funktionen ”Nära dig” eller genom att ange zonkod i appen. Zonkoden hittar du antingen i kartan under ”Nära dig” eller på en skylt i anslutning till parkeringsplatsen. Har du parkerat på samma adress senaste tiden så finns parkeringsplatsen sparad i appen som snabbval. Du startar din parkering genom funktionen ”Välj bil och parkera”. Klart!'}



  class Starta_parkering extends React.Component {
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
        <img src={starta_parkering_bild} className="App-logo" alt="logo" style={{width: '60%',
         float:'right',height: '70%', marginLeft:'70px', marginTop:'60px',borderRadius:'30px'}} />
        <h1 style={{textAlign:'left',fontFamily:'impact',marginTop:'60px'}}>Starta parkering </h1>
        <p style={{textAlign:'left',fontSize:'17px',fontFamily:'Arial',marginRight:'100px',marginTop:'60px'}}>
          
          {this.state.favoritecolor.text} 
          
        </p>
        </div>
      );
    }
  }
  



export default Starta_parkering;