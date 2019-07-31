import * as React from 'react';

export class Features extends React.Component {
    
    render() {
        return (   
            <section className="features-wrap">
                <div className="features">                
                    <div className="features__header">
                        <p className="features-title">Tinyone features</p>
                        <p className="features-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>   
                    </div>
                    <div className="features__items-block">
                        <div className="features__items">                    
                            <img src="img/icon-font-1.png"></img>
                            <div className="item">
                                <p className="item-title">Fully Responsive</p>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </div>
                            
                        </div>
                        <div className="features__items">                    
                            <img src="img/icon-font-2.png"></img>
                            <div className="item">
                                <p className="item-title">Fully Layered PSD</p>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </div>
                            
                        </div>
                        <div className="features__items">                    
                            <img src="img/icon-font-3.png"></img>
                            <div className="item">
                                <p className="item-title">Font Awesome Icons</p>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </div>
                            
                        </div>
                        <div className="features__items">                    
                            <img src="img/icon-font-4.png"></img>
                            <div className="item">
                                <p className="item-title">HTML3 & CSS3 </p>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </div>
                            
                        </div>
                        <div className="features__items">                    
                            <img src="img/icon-font-5.png"></img>
                            <div className="item">
                                <p className="item-title">Email Template</p>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </div>
                            
                        </div>
                        <div className="features__items">                    
                            <img src="img/icon-font-6.png"></img>
                            <div className="item">
                                <p className="item-title">Free to download</p>
                                <p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>      
            
        )
    }
}
