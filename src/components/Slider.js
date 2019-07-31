import * as React from 'react';

export class Slider extends React.Component {
    
    render() {
        return (            
            <section className="slider-wrap">
                <div className="slider-all-content">
                    <div className="slider">
                        <div className="slider__content">
                            <p className="content-title">Inspire your inspiration</p>
                            <p className="content-text-first">Simple to use for your app, products showcase and your inspirat</p>
                            <p className="content-title-second">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit </p>
                            <div className="content-icons">
                                <i className="fa fa-apple" aria-hidden="true"></i>
                                <i className="fa fa-android" aria-hidden="true"></i>
                                <i className="fa fa-windows" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="slider__ipad">  
                            <div className="ipad-base">
                                <div className="ipad-display">
                                    <div className="header__logo">
                                        <img className="logo" src="img/fingerprint.png" alt="logo"></img>
                                        <div className="logo-title">tinyone</div>   
                                    </div>
                                </div>      
                            </div>                      
                                                
                        </div>
                    </div>
                </div>
                
                <div className="circle">
                    <div className="circle__item active"></div>
                    <div className="circle__item"></div>
                    <div className="circle__item"></div>
                </div>
            </section>
        )
    }
}