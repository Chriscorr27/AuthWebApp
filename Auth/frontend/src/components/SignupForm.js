import React, { Component } from 'react'
import './slider.css'


class SignupForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user : "Student",
            imgs : "images/student_signup.jpg",
             email:'',
             username:'',
             pass1:'',
             pass2:'',
             is_management:false,
             err : false,
             err_msg : ""
        }
    }
    emailManager=event =>{
        this.setState({
            
            email : event.target.value
        })
    }
    usernameManager=event =>{
        this.setState({
            
            username : event.target.value
        })
    }
    pass1Manager=event =>{
        this.setState({
            
            pass1 : event.target.value
        })
    }
    pass2Manager=event =>{
        this.setState({
            
            pass2 : event.target.value
        })
    }

    signupEventManager = Event=>{
        if(this.state.pass1 !== this.state.pass2)
        {
            this.setState({
                err : true,
                err_msg : "Password should match"
            })
           Event.preventDefault()
        }
        else{
            
        alert(`${this.state.email} ${this.state.username} ${this.state.pass1} ${this.state.pass2}  ${this.state.is_management}`)
        Event.preventDefault()
        }
    }
    checkmanager= e=>{
        this.setState({
            is_management : e.target.checked,
            user : e.target.checked?"Management":"Student",
            imgs : e.target.checked?"images/management_signup.jpg":"images/student_signup.jpg"
        })


    }
    render() {
        let msg 
        
        if(this.state.err)
        {
            msg = <span className="text-danger font-italic">{this.state.err_msg}</span>
        }
        return (
            <div>
                <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                   
                        <h2 className="form-title font-italic">{this.state.user} <br />Sign up</h2>
                        <form onSubmit={this.signupEventManager} className="register-form" 
                        id="register-form">
                            <label className="switch">
                                        <input className="align-middle" 
                                        onChange={this.checkmanager} type="checkbox"/>
                                        <span class="slider round"></span>
                                </label>
                            <div className="form-group">
                            
                                <label for="name">
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" value={this.state.username} onChange={this.usernameManager} name="name" id="name" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" value={this.state.email} onChange={this.emailManager} name="email" id="email" placeholder="Your Email" required/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" value={this.state.pass1} onChange={this.pass1Manager} name="pass" id="pass" placeholder="Password" required/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" value={this.state.pass2} onChange={this.pass2Manager} name="re_pass" id="re_pass" 
                                placeholder="Repeat your password" help="password should match" required/>
                                <span>

                                </span>
                            </div>
                            {msg}
                            
                                
                        
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" 
                                id="agree-term" className="agree-term" required/>
                                <label for="agree-term" className="label-agree-term">
                                    <span><span></span></span>
                                    I agree all statements in  </label>
                                    
                                    
                            </div>
                            
                            <div className="form-group form-button ">
                                <input type="submit" name="signup"
                                 id="signup" className="form-submit"
                                  value="Register"/>
                            </div>
                            
                        </form>
                    </div>
                    
                    <div className="signup-image">
                        <figure>
                        <div>
                            <img src={this.state.imgs} alt="" />
                        </div>
                        </figure>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>

        )
    }
}

export default SignupForm

