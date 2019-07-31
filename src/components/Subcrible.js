import * as React from 'react';

export class Subcrible extends React.Component {
    constructor(state,props){
        super(state,props)
        this.state = {
            inpValue:""    
        }
    }
    handlerChange(event){
        this.setState({
            inpValue:event.target.value
        })
    }
    handlerSubmit(event){
        event.preventDefault();
        if(this.state.inpValue===""){
            
            alert("Поле повинно бути заповненим!!!")
        }else
        if(this.state.inpValue.indexOf("@")===-1){           
            alert("Адреса електронної пошти повинна містити символ '@'")
        }else {
            alert("Лист успішно відправлено!!!")
        }
        
        this.setState({
            inpValue:""
        })
    }
    render() {
        return (   
            <section className="subcrible-wrap">
                <div className="subcrible">                
                    <div className="subcrible__header">
                        <p className="title">Keep in touch with us</p>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                    </div>
                    <form action="" method="post"  className="subcrible__form">
                        <input value={this.state.inpValue} type="email" placeholder="Enter your email to update" onChange={()=>{this.handlerChange(event)}}></input>
                        <a href="#" onClick={()=>{this.handlerSubmit(event)}}>Submit</a>
                    </form>
                </div>
            </section>      
            
        )
    }
}