import React from "react";

class AddComponent extends React.Component {
    state = {
        name: '',
        age: '',
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    
    handleClickButton = (event) => {
        event.preventDefault();
        if( !this.state.name || !this.state.age){
            alert('Điền đủ thông tin');
            return;
        }
        this.props.addNewUser({
            id:  Math.floor(Math.random() * 10),
            name: this.state.name,
            age: this.state.age
        })
    }

     render() {
        return (
                 <form>
                    <label>Name</label>
                        <input value={this.state.name} type="text" 
                        onChange={(event) => this.handleOnChangeName(event)} /><br/>
                    <label>Age</label>
                        <input type="text" value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)}></input>
                       <button onClick={(event) => this.handleClickButton(event)}>Save</button>
                 </form>           
        )
     }
}

export default AddComponent;