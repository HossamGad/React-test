import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



export default class FormDataComponent extends Component {

        constructor(props) {

        super(props);

        this.input=React.createRef()
        
        this.state={
 
            list:[],
 
           }
 
     }
 
 
 
     addTask=()=>{
 
     
 
     const Items={
 
             
             value:this.input.current.value,
             
            
         };
 
 
 
         if(localStorage.getItem('list')==null){
 
             const list=[]
 
             list.push(Items);
 
             localStorage.setItem("list",JSON.stringify(list))
 
         }
 
         else{
 
             const list=JSON.parse(localStorage.getItem('list'))
 
             list.push(Items)
 
             localStorage.setItem("list",JSON.stringify(list))
 
         }
 
         this.setState({
 
             list:JSON.parse(localStorage.getItem('list'))
 
         });
 
     }
 
 
 
     componentDidMount() {
 
         const list = window.localStorage.getItem('list');
 
         const parsedList = JSON.parse(list);
 
         if(list == null){
 
             return false
 
         }
 
         else{
 
             this.setState({
 
                 list: parsedList,
 
             })
 
             console.log(this.state.list);
 
         }
 
     }
 
        
    render() {

        return (

            <div className="container" style={{maxWidth:'400px', marginBottom:'40px'}} >

                <form onSubmit={this.onSubmit}>

                    

                    <div className="form-group">

                        <label>Skicka din e-post så kontakta vi dig...</label>

                        <input placeholder="Skriv din e-post..." ref={this.input} type="email" className="form-control"  />

                    </div>

                    

                    <button onClick={this.addTask} type="submit" className="btn btn-primary btn-block">Skicka in</button>

                </form>

            </div>

        )

    }

}