import React from "react";
import AddComponent from "../Example/AddComponent";

class ListUsers extends React.Component {
    state = {
        listUsers : [
            { id: 1, name: 'An' , age: '20' },
            { id: 2, name: 'Tú' , age: '24' },
            { id: 3, name: 'Linh' , age: '32' },
            { id: 4, name: 'Hùng' , age: '12' }
        ]

    }

    addNewUser = (user) => {
        this.setState({
            listUsers: [...this.state.listUsers,user]
        })
    }

    handleClickDelete = (user) => {
        this.setState({
            listUsers: this.state.listUsers.filter(item => item.id !== user.id)
        })
    }

     render() {
        console.log('List User')
        let { listUsers } = this.state;

        return (
                 <>
                    <AddComponent addNewUser={this.addNewUser} />
                    {
                        listUsers.map((item,index) => {
                            return (
                                <div key={index}>{index + 1} : { item.name } - {item.age} 
                                  <span onClick={(event) => this.handleClickDelete(item)}>Xóa</span>
                                </div>
                            )
                        })

                    }
                 </>           
        )
     }
}

export default ListUsers;