import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hem from './Hem';
import KontaktaOss from './KontaktaOss';
import Tjänster from './Tjänster';
import OmOss from './OmOss';
import Hitta_parkering from './Hitta_Parkering';
import Starta_parkering from './Starta_parkering';
import Förlänga_parkering from './Förlänga_parkering';
import Parkera_flera_bilar from './Parkera_flera_bilar';




const Main = () => (

  <Switch>

    <Route exact path="/Hem" component={Hem} />
    <Route path="/Tjänster" component={Tjänster} />
    <Route path="/KontaktaOss" component={KontaktaOss} />
    <Route path="/OmOss" component={OmOss} />
    <Route path="/Hitta_parkering" component={Hitta_parkering} />
    <Route path="/Starta_parkering" component={Starta_parkering} />
    <Route path="/Förlänga_parkering" component={Förlänga_parkering} />
    <Route path="/Parkera_flera_bilar" component={Parkera_flera_bilar} />

    


    
  </Switch>

)



export default Main;