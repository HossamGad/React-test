import React, { Component } from 'react';
import '../App.css';
import Tjänster_bild from '../Image/Tjänster_bild.jpg';


class TextControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleshowClick = this.handleshowClick.bind(this);
    this.handlehideClick = this.handlehideClick.bind(this);
    this.state = {isShowenIn: true};
  }

  handleshowClick() {
    this.setState({isShowenIn: true});
  }

  handlehideClick() {
    this.setState({isShowenIn: false});
  }

  render() {
    const isShowenIn = this.state.isShowenIn;
    let button;

    if (isShowenIn) {
      button = <HideButton className='button' onClick={this.handlehideClick} />;
    } else {
      button = <ShowButton className='button' onClick={this.handleshowClick} />;
    }

    return (
      <div style={{float:'center', textAlign:'center',marginTop:'40px',fontFamily: "Times New Roman"}}>
        <h1 >Våra Tjänster</h1>
        {button}
        <Greeting style={{}} isShowenIn={isShowenIn} />

        <img style={{width: '90%',float:'center',borderRadius:'55px',marginBottom:'30px'}} src={Tjänster_bild}  alt="Tjänster_bild" />

         
      </div>
    );
  }
}

function UserGreeting(props) {
  return <div></div>;
}

function GuestGreeting(props) {
  return <p className='text'style={{padding:'40px',marginLeft:'50px',fontSize:'17px',fontFamily:'Arial',marginRight:'50px'}}>
  När du parkerat bilen och vill starta din parkering kan du göra det antingen genom att hitta din parkering via funktionen ”Nära dig” eller genom att ange zonkod i appen. Zonkoden hittar du antingen i kartan under ”Nära dig” eller på en skylt i anslutning till parkeringsplatsen. 
  Har du parkerat på samma adress senaste tiden så finns parkeringsplatsen sparad i appen som snabbval. Du startar din parkering genom funktionen ”Välj bil och parkera”. Klart!
  </p>
  ;
}

function Greeting(props) {
  const isShowenIn = props.isShowenIn;
  if (isShowenIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function ShowButton(props) {
  return (

    <h1></h1>
        

  );
}

function HideButton(props) {
  return (
    <button  onClick={props.onClick} className="button" style={{verticalalign:'middle'}}>
     <span>Klick här </span> 
    </button>
  );
}






export default TextControl ;