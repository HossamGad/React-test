import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';

import { Link } from 'react-router-dom';


class App extends Component{
 render(){
  return (
    
    <div >
        
    <Layout >
      
        <Header style={{fontSize:'100px'}} className="header-color" title="ParkeringsVakt"  >
            <Navigation >
            <Link to="/Hem">Hem</Link>
            <Link to="/Tjänster">Tjänster</Link>
            <Link to="/KontaktaOss">Kontakta Oss</Link>
            <Link to="/OmOss">OmOss</Link>
            </Navigation>
        </Header>
      
        <Drawer  title="Menu" >
            <Navigation >

            <Link to="/Hitta_parkering">Hitta Parkering</Link>
            <Link to="/Starta_parkering">Starta Parkering</Link>
            <Link to="/Förlänga_parkering">Förlänga Parkering</Link>
            <Link to="/Parkera_flera_bilar">Parkera flera bilar</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            
        </Content>
        <Main/>
        <Footer className="footer-color" size="mini">
    <FooterSection style={{width: '200%', color:'black',fontSize:'20px'}} type="left" logo="ParkeringsVakt">
        <FooterLinkList style={{ color:'black', float: 'right',right:'10px',fontSize:'15px' }} type='right' >
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
        
    </Layout>
</div>
    
    
  );
}
}

export default App;

