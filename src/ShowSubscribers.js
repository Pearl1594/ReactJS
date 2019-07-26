   import React, {Component} from 'react';
 import Header from "./Header"
 import './ShowSubscribers.css'
import {Link} from 'react-router-dom'

class ShowSubscribers extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     subscribersListtoShow:  []
  //   }
  //   console.log("Constructor called")
  // }

   onDeleteClicked(subscriberId) {
      this.props.deleteSubscriberHandler(subscriberId);  
   }

  // componentDidMount() {
  //   let newSubsciber = {
  //     id: 1,
  //     name: "Pearl Dsilva",
  //     phone: "9886012099"
  //   }

  //   let subscribersList = this.state.subscribersListtoShow
  //   subscribersList.push(newSubsciber)
  //   this.setState({subscribersListtoShow: subscribersList})
  //   console.log("componentDidMount called")
  // }

  render() {
    console.log("render called")
  // let subscribers = [
  //   {
  //     id:1,
  //     name: "Pearl Dsilva",
  //     phone: "9886012099"
  //   },
  //   {
  //     id:2,
  //     name: "Shonda James",
  //     phone: "3456543134"
  //   },
  // ]
  return (
    
    <div>
      {/* <Header />
      <button> Add </button>
      <div>
        <span> Name: </span> <br />
        <span> Phone: </span> <br />
      </div> */}

        <Header heading="Phone Directory" instructor="Pearl Dsilva"/>
        
          <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            //this.state.subscribersListtoShow.map(sub => {
              this.props.subscriberList.map(sub => {
              return(
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <span className="grid-item action-btn-container">
                    <button className="custom-btn delete-btn" onClick={this.onDeleteClicked.bind(this, sub.id)}>Delete</button></span>
                </div>
              )
            })
          }
          
        </div>
    </div>
    // React.createElement("div", {id: "module"},
    //               React.createElement("p"),null, "REACTJS"));
  
  )
     
  }
}

export default ShowSubscribers;

