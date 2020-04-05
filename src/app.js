

// import {Projektidé} from './classes/Projektidé.js';
//import {Prototyp} from './classes/Prototyp.js';
//import {Statistik} from './classes/Statistik.js';

//let projektidé = new Projektidé();

export function getElementString() {alert('Testing function!') /*document.getElementById("test").innerHTML = "Hello World";*/}


  $(document).ready(function() {
    var myElement = $("#01");
    myElement.text("ParkeringsVakt");
  });

  $(document).ready(function() {
    var myElement = $("#02");
    myElement.text("Projektidé");
  });

  $(document).ready(function() {
    $('#projektidé').load("load_me.html");
  });

  $(document).ready(function() {
    $('#prototyp').load("load_me.html");
  });

  