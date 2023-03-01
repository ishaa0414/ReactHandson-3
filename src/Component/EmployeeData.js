import { Component } from "react";

export default class EmployeeData extends Component{
constructor(props){
    super(props)
    this.state={}
}
render(){
    return(<>
    <h1>EMPLOYEE FEEDBACK FORM</h1>
    <span className="list">
        {this.props.data.map((item) => {
            return(
                <>
            <span className='listItem'>
            <span>Name:{item.name}|</span>
            <span>Department:{item.department}|</span>
            <span>Rating:{item.rating}</span>
            </span>
            </>
            )
            })
        }
        </span>
        <button className='submit2' onClick={this.props.toggleFunc}>GO BACK</button>
            </>
        
    )
}
}