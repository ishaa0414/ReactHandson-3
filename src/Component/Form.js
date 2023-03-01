import React, { Component } from 'react'
import './Style.css'
import EmployeeData from './EmployeeData'

export default class Form extends Component {
    state={
        //change
      clicked:false,
      name : "",
      department:"",
      rating:0,
      array : []
    
    }
    toggleFormClick=()=>{
      this.setState({clicked:!this.state.clicked})
      console.log(!this.state)
    }
    handleClick=(e)=>{
      // e.preventDefault();
      //   const saveData={
      //       name : this.state.name,
      //       department:this.state.department,
      //       rating:this.state.rating
      //   }
      //   const arr=this.state.data;
      //   arr.push(saveData);
      //   this.setState({data : arr});
      console.log ("Worked")
      let temp_obj={
        name:this.state.name,
        rating:this.state.rating,
        department:this.state.department
      };
      this.state.array.push(temp_obj);
      this.setState({
        clicked:true,
        name:"",
        department:"",
        rating:0,
      });
    }
    clickChange=(e)=>{
        this.setState({[e.target.name]:e.target.value,
         [e.target.department]:e.target.value,
         [e.target.rating]:e.target.value});
    }


  render() {
    return (
      <div>
        {!this.state.clicked?
     <>
     <h1>EMPLOYEE FEEDBACK FORM</h1>
     <div className='form'>
     <label className='label'>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
     <input className='input' placeholder='Enter Username' name='name' type='text' id='name' onChange={this.clickChange}/><br/>
     <label  className='label'>Department &nbsp;&nbsp;:&nbsp;</label>
     <input className='input' type='text' placeholder='Enter Department' name='department' id='department' onChange={this.clickChange}/><br/>
     <label className='label'>Rating&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
     <input className='input' type='number' placeholder='Enter Rating' name='rating'id='rating' onChange={this.clickChange}/><br/>
     <button className='submit' type='submit' id='submit' onClick={this.handleClick}>Submit</button>
     </div>
     </> :
     <EmployeeData data={this.state.array} toggleFunc={this.toggleFormClick}/>
    }
     </div>
    )
    }
}


