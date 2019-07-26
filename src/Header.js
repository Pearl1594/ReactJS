import React from 'react';
//import  {Component} from 'react';
import './Header.css'
;
// functional component
const Header = function(props) {
     return(
         // Inline -styling
        //<div style={{textAlign: 'center', padding: 20, background:'#000', color:'#fff',textTransform: 'uppercase'}}>
        <div className="header">
            {/* Phone Directory */}
            {props.heading}
        </div>
     );

}

//class component
// class Header extends Component{
//     render(){
//         return (
//             <div className="header">
//                {/* Phone Directory */}
//                {this.props.heading}
//             </div>
//         )
//     }
// }

export default Header;