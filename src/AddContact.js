import React from "react";
import './AddContact.css';

class AddContact extends React.Component {
 state = {
        name : "",
        email : "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the feilds are compulsory!");
            return;
        }
        console.log(this.state);
        this.props.addcontacthandler(this.state);
        this.setState({name:"", email:""});
    };
    
    render(){
    return(
        <div className="render">
            <form className="form" onSubmit={this.add}>
            <div className="y">
                <div className="name">Name:</div>
                <input type="text" placeholder="Enter name here" name="name" value={this.state.name} onChange= {(e) => this.setState({name: e.target.value})}></input>
            </div>
            <div className="y">
                <div className="form-label">Email:</div>
                <input type="text" placeholder="Enter email here" name="email" value={this.state.email} onChange= {(e) => this.setState({email: e.target.value})}></input>
            </div>
            <div className="y">
                <button className="add">ADD</button>
            </div>
            </form>
        </div>
    );
    }
    
}

export default AddContact;