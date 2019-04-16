import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addReminder,deleteReminder,clearReminder} from '../actions' ;// 传递给conncet 作为参数
import  moment from 'moment';
import PropTypes from 'prop-types';


class App extends Component {

  constructor(props){
    
    super(props)
    this.state={
      text:'',
      dueDate:'',
      
    };

  }


  // 通过connect 传递的dispatch（ ）
  addReminder() {
    this.props.dispatch(addReminder(this.state.text,this.state.dueDate));
  }

  deleteReminder(id_index){
    this.props.dispatch(deleteReminder( id_index))
  }


  renderReminders(){

    const { reminders } = this.props;
    console.log('reminders',reminders,'props',this.props)
    return(
      <ul className="list-group col-sm-8 mt-2">
        {
          reminders.map((reminder,index)=>{
              return(
                <li key={index} className="list-group-item" >
                  <div className="list-item">
                   <div>{ reminder.text }</div>
                   <div><em>{ moment(new Date(reminder.dueDate)).fromNow() }</em></div>
                  </div>
                  <div className="list-item delete-button"
                        onClick={ () => this.deleteReminder(index) }> &#x2715;</div>
                </li>
              )
          })
        }
      </ul>
    )
  }

  clearReminders(){
        this.props.dispatch(clearReminder())
  }
  


  render() {
    
    console.log('pageState :', this.state);
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input 
            type="text" 
            className="form-control" 
            placeholder="I have to..." 
            onChange={(event)=>{this.setState({text:event.target.value})}}
            />
            <input
            type="datetime-local"
            className="form-control"
            onChange={ (event) => this.setState({dueDate: event.target.value}) }
             />
          </div>
          <button 
          type="button" 
          className="btn btn-success"
          onClick={()=>{this.addReminder()}}
          >Add Reminder</button>
        </div>
          { this.renderReminders() }
        <div className= "btn btn-danger mt-3" onClick={ () => this.clearReminders() } >
        Clear Reminders
        </div>
      </div>
    );
  }



}

const mapStateToProps = (state) => {
  console.log('mapStateToProps-state :', state);
  return {
    
    reminders: state  // state的key 在这里设置
  };
};


App.propTypes = {
  reminders: PropTypes.array.isRequired,
  //addReminder: PropTypes.func.isRequired
}


  export default connect( mapStateToProps, ) (App);
