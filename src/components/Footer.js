
import * as React from 'react';
export class Footer extends React.Component {     
    render() {
        return (
            
            <footer>
                <div className="footer-wrap">
                    <div className="footer-column contact">
                        <p>HALOVIETNAM LTD
                        66, Dang Van ngu, Dong Da
                        Hanoi, Vietnam</p>
                        <p>contact@halovietnam.com</p>
                        <p>+844 35149182</p>
                    </div>
                    <div className="footer-column">
                        <a href="">Examples</a>
                        <a href="">Shop</a>
                        <a href="">License</a>
                    </div>
                    <div className="footer-column">
                        <a href="">Contact</a>
                        <a href="">About</a>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                    <div className="footer-column">
                        <a href="">Download</a>
                        <a href="">Support</a>
                        <a href="">Documents</a>
                    </div>
                    <div className="footer-column">
                        <a href="">Media</a>
                        <a href="">Blog</a>
                        <a href="">Forums</a>
                    </div>
                </div>                
                
            </footer>           
        )      
    }
}
