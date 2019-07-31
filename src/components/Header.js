import * as React from 'react';

export class Header extends React.Component {
    constructor(state,props){
        super(state,props)
        this.state = {
            bar:false
        }
    }
    handlerClickBar(){        
        if(this.state.bar===true){
            this.setState({
                bar:false
            })
        }
        else {
            this.setState({
                bar:true
            })
        }
    }
    render() {
        return (   
            <div className="header-wrap">
                <header>                
                    <div className="header__logo">
                        <img className="logo" src="/src/img/fingerprint.png" alt="logo"></img>
                        <div className="logo-title">tinyone</div>   
                    </div>
                    <div className="header__menu" >                    
                        <a href="#" className="menu-item">Features</a>
                        <a href="#" className="menu-item">Support</a>
                        <a href="#" className="menu-item">Blog</a>
                        <div className="menu-bar" onClick={()=>{this.handlerClickBar()}}>                        
                            <img src="/src/img/menu-icon.png" style={this.state.bar===true?{display:"none"}:{display:"block"}}></img>
                            <i className="fa fa-times" aria-hidden="true" style={this.state.bar===false?{display:"none"}:{display:"block"}}></i>
                            <p>Menu</p>
                        </div>                        
                    </div>
                    <div className="bar-menu" style={this.state.bar===false?{display:"none"}:{display:"flex"}}>
                        <a href="#" className="bar-item">Features</a>
                        <a href="#" className="bar-item">Support</a>
                        <a href="#" className="bar-item">Blog</a>
                    </div>
                </header>
            </div>      
            
        )
    }
}
