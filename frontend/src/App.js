import React, { Component } from 'react'
import './App.css';
import Modal from './components/Modal';
import axios from 'axios';

// const tasks = [
//   {
//     "id": 3,
//     "title": "Market",
//     "description": "Shopping for vegetables",
//     "completed": true
// },
// {
//     "id": 4,
//     "title": "Blogging",
//     "description": "Shopping for vegetables",
//     "completed": false
// },
// {
//     "id": 3,
//     "title": "Study",
//     "description": "Shopping for vegetables",
//     "completed": false
// }

// ]

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      activeItem:{
        title:"",
        description:"",
        completed:false,
      },
      todoList: []
    };
  }

  componentDidMount(){
    this.refreshList();
  }

  refreshList = () =>{
    axios.get("http://localhost:8000/api/task/")
    .then(res => this.setState({todoList: res.data}))
    .catch(err => console.log(err) )
  }

  // Display Completed
  displayCompleted = status =>{
  if(status) { 
    return this.setState({viewCompleted:true})
  }
  else{
    return this.setState({viewCompleted:false})
  }
}

  toggle = () =>{
    this.setState({modal: !this.state.modal});
  };
// handle submit
handleSubmit = item => {
  this.toggle();
  if(item.id){
    axios
    .put(`http://localhost:8000/api/task/${item.id}/`, item)
    .then(res => this.refreshList())
  }
  axios
  .post("http://localhost:8000/api/task/", item)
  .then(res => this.refreshList)
};
// handle delete
handleDelete = item => {
  this.toggle();
  axios
    .delete(`http://localhost:8000/api/task/${item.id}/`)
    .then(res => this.refreshList())
}

createItem = () => {
  const item = {title:"", description:"",completed: false};
  this.setState({activeItem:item, modal:!this.state.modal});
};

editItem = item =>{
  this.setState({activeItem:item, modal:!this.state.modal});
};

  

renderTablist =()=>{
  return (

    <div className='my-5 tab-list'>
      <span onClick={() => this.displayCompleted(true)}
        className= {this.state.viewCompleted? "active": ""}
      >Completed</span>
      <span onClick={()=>this.displayCompleted(false)}
        className= {this.state.viewCompleted? "": "active"}
      >Inclompleted</span>
    </div>
  );
};

renderItems = () => {
const {viewCompleted} = this.state;
const newItems = this.state.todoList.filter(
  item => item.completed === viewCompleted
);
  return newItems.map(item =>(
    <li 
    key={item.id}
    className='list-group-item d-flex justify-content-between align-item-center'
    >
      <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo": ""}`}
      title={item.description}>
        {item.title}
      </span>
      <span>
        <button className="btn btn-secondary opt-btn" onClick={() => this.editItem(item)}>Edit</button>
        <button className='btn btn-danger mr-2' onClick={() => this.handleDelete(item)}>Delete</button>
      </span>
    </li>
  ));
};

render(){
  return(
    <main className='content p-3 mb-2 bg-info'>
      <h1 className='text-white text-uppercase text-center my-4'> Task Manager</h1>
      <div className='row'>
        <div className='col-md-6 col-sma-10 mx-auto p-0'>
          <div className='card p-3'>
            <div>
              <button onClick={this.createItem} className='btn btn-warning'>Add Task</button>
            </div>
            {this.renderTablist()}
            <ul className='list-group list-group-flush'>
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
      <hr className='hrr'/>
      <footer className='my-3 mb-2 bg-info text-white text-center'>CopyRight 2024 &copy; All Rights Reserved </footer>
      {this.state.modal ?(
        <Modal activeItem={this.state.activeItem} toggle={this.toggle}  onSave={this.handleSubmit}/>
      ):null}
    </main>
  )
}

}

export default App;
