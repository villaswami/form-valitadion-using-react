import React, { Component } from "react";

export default class Signup extends Component{
   constructor(){
       super();
       this.state={
           name:"" ,
           password:"",
           mobile_No:"",
           Email:"",
           error:{ name:"" ,
           password:"",
           mobile_No:"",
           Email:"",}
       }

   }
   nameChangeHandler=(e)=>{
       this.setState({name:e.target.value})
       let regex_name=/^[A-Za-z0-9]{5,20}$/
       if(!regex_name.test(this.state.name)){
           this.setState({error:{name:"name must eneter"}})
       }else{
           this.setState({error:{name:''}})
       }
   }

   emailChangeHandler=(e)=>{
    this.setState({Email:e.target.value})
    let regex_Email=/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
    if(!regex_Email.test(this.state.Email)){
        this.setState({error:{name:"Email must eneter"}})
    }else{
        this.setState({error:{Email:''}})
    }
}


passwordChangeHandler=(e)=>{
    this.setState({password:e.target.value})
    let regex_pass=/^[A-Za-z0-9!@#$%^&*()]{7,20}$/
    if(!regex_pass.test(this.state.password)){
        this.setState({error:{password:"password must be captial must eneter"}})
    }else{
        this.setState({error:{password:''}})
    }
}

mobileChangeHandler=(e)=>{
    this.setState({password:e.target.value})
   
    if(this.state.mobile_No.match(/^(\+\d{1,3}[- ]?)?\d{9}$/)){
        this.setState({error:{mobile_No:"Enter number"}})
    }else{
        this.setState({error:{mobile_No:''}})
    }
}
submitButton=(e)=>{
alert("submitted")
}

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.submitButton}>
                    <h1>Sign up form</h1>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.nameChangeHandler}/>
                    <span>{this.state.error.name}</span>

                    <label>Email</label>
                    <input type="text" value={this.state.Email} onChange={this.emailChangeHandler}/>
                    <span>{this.state.error.Email}</span>

                    <label>password</label>
                    <input type="text" value={this.state.password} onChange={this.passwordChangeHandler}/>
                    <span>{this.state.error.password}</span>

                    <label>Modile</label>
                    <input type="text" value={this.state.mobile_No} onChange={this.mobileChangeHandler}/>
                    <span>{this.state.error.mobile_No}</span>
                    <button type="submit">onSubmit</button>
                </form>
            </div>
        )
    }
}