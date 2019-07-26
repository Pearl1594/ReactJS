 import React, {Component} from 'react'
 import AddSubscriber from './AddSubscriber'
 import ShowSubscribers from './ShowSubscribers';
 import { BrowserRouter as Router, Route } from 'react-router-dom';

 class PhoneDirectory extends Component {
     constructor(){
         super();
         this.state ={
             subscriberList: [
                 {
                     id: 1,
                     name: "Pearl",
                     phone: "9886012099"
                 },
                 {
                    id: 2,
                    name: "Shonda",
                    phone: "998402850"
                }
             ]
         }
     }

     addSubscriberHandler = (newSubscriber) => {
         let subscriberList = this.state.subscriberList
         if (subscriberList.length > 0) {
             newSubscriber.id = subscriberList[subscriberList.length - 1].id+1;
         }
         else {
             newSubscriber.id = 1;
         }
         subscriberList.push(newSubscriber)
         this.setState({subscriberList: subscriberList})
     }

     deleteSubscriberHandler = (subscriberId) => {
         let subscriberList = this.state.subscriberList
         let subscriberIndex = 0
         subscriberList.forEach(function(subscriber, index) {
             if (subscriber.id === subscriberId) {
                 subscriberIndex = index
             }
         }, this);
         let newSubscriberList = subscriberList;
         newSubscriberList.splice(subscriberIndex,1)
         this.setState({subscriberList: newSubscriberList})
     }
     render() {
        //  return(<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>)
      //  return (<ShowSubscribers subscriberList={this.state.subscriberList}/>)
      return(
          <Router >
              <div className="main-container">
              <Route exact path="/" render = {(props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/> }/>
              <Route exact path="/add" render = {({history},props) => <AddSubscriber history={history} {...props}  addSubscriberHandler={this.addSubscriberHandler}/>}/>
              </div>
          </Router>
      )
     }
 }
 export default PhoneDirectory;