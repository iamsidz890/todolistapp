import React , {Component} from 'react';
import TodoInput from './components/Todoinput';
import TodoList from './components/TodoList';


import 'bootstrap/dist/css/bootstrap.min.css';   // as a module hence thus 
import {v1 as uuid} from 'uuid';
import Todoinput from './components/Todoinput';

class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    })
  };
  handleSubmit=(e)=>{
    e.preventDefault();  // to stop refreshing the page


    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    // console.log(newItem);

    const updatedItems = [...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  }
  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => 
      item.id != id);
    this.setState({
      items:filteredItems
    });
  };

  handleEdit = id => {
     const filteredItems = this.state.items.filter(item => 
      item.id != id);
// for puttting string to be edited
const selectedItem = this.state.items.find(item=>item.id==id)
      this.setState({
        items:filteredItems ,  //remove from there....which is to be edited
        item:selectedItem.title,
        editItem:true,


      })
  }
  render(){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-7 mt-5'>
          <h3 className='text-capitalize text-cenetr'>To do input</h3>
          <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
