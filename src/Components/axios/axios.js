import React from "react";
import axios from axios;


export default class PersonList extends React.Component{
    state={
        persons:[],
    };

    componentDidMount()
    {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>{
            console.log(res);
                this.setState({persons:res.data});
                    
        });
    }
render(){
    return <ul>{this.state.persons.map(persons=><li>{persons.name}</li>)}</ul>
    
}





}