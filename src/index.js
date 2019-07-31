import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Header} from './components/Header';
import {Slider} from './components/Slider';
import {Features} from './components/Features';
import {Subcrible} from './components/Subcrible';
import {SocialConnect} from './components/SocialConnect';
import {Footer} from './components/Footer';
import './style.scss';

class App extends React.Component {
    constructor(state,props){       
        super(state,props); 
        this.state = {           
            
        }
    }
    render() {
        return (
            <div className="main-wrap" >
                <Header/>                
                <Slider/>
                <Features/>
                <Subcrible/>
                <SocialConnect/>
                <Footer/>                
            </div>
            
           
        )
      
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));