import React, { Component } from 'react'

export default class Todoinput extends Component {
     
    render() {
        const {item , handleChange , handleSubmit , editItem} = this.props;
        return (
           
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
            <div className='input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text bg-tertiary text-gray'>
                            <i className='fas fa-book'></i>
                        </div>
                    </div>  
                    <input type='text' className='form-control' placeholder='TO DO ITEM' value={item} onChange={handleChange}  />  
            </div>
            <button type='submit' className={editItem ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-secondary mt-3' } >{editItem ? 'Edit Work' : 'Add Work'}</button>
                </form>
                
            </div>
        )
    }
}
