import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags:['tag1', 'tag2', 'tag3']
     }
     /*constructor()
     {
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
     }*/
    render() { 
        return (
         <div>
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={this.handleIncrement} className='badge badge-secondary m-1 btn-sm' style={this.style}>Increment</button>
             <ul>
                 {this.state.tags.map(tag => <li key={tag} >{ tag }</li>)}
             </ul>
         </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        //this is cobject distructuring
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }

}
 
export default Counter;