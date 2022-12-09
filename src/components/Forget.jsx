import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Forget extends Component {
    constructor(props){
        super(props)

        this.state={
            email:"",
            responseMessage:"",
            errorMsg:"",
            loading:false
        }
    }
  
     handleSubmit = async (e) => {
        let email=this.state.email;
        e.preventDefault();
        // setLoading(true);
        try {
            const response = await axios.post("/forget_password",{email});
            this.setState({responseMessage:response?.data?.message});

          } catch ( err) {
            this.setState({errorMsg:err.response?.data?.message});
        }
    }


    render() {
        
    return (
        <div> <br /><br /><br />
        <div className="row">
            <div className="mt-4 p-5 bg-light rounded col-lg-4 offset-lg-4">
                {this.state.responseMessage?
                <div>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <h4 class="alert-heading">Check your email!</h4>
                        <p>{this.state.responseMessage}</p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=>{this.setState({responseMessage:""})}}></button>
                    </div>
                </div>
                :  "" }
            <div>
                <h2 className='text-center'>Forget Account</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                        <label   class="form-label">Email address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          onChange={(e)=>this.setState({email:e.target.value})}
                          value={this.state.email}
                          />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary ">{ ! this.state.loading? "Send" :
                            <span class="loader"></span>
                        }
                        </button>
                    </div>
                    <span className='text-danger'>
                       {this.state.errorMsg}
                    </span>        
                    <br /><br />
                    Have an account? <Link to='/login'>Login</Link><br />
                    Create New account? <Link to='/register'>Register</Link>
                </form>
             </div>
         
            </div>
        </div>
      </div>
    )
  }
}

export default Forget