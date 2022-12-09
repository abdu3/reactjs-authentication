import React, { Component, Fragment } from 'react'

class Home extends Component {
  // state={childColor:"green", name:"abdu3",fromChild:""}
  // changeColor=(e)=>{
  // //  const color1=document.getElementById('color').value;
  //   this.setState({childColor:e.target.value})
  // }
  // fun1=(childData)=>{
  //   this.setState({fromChild:childData})
  // }
  // pre=()=>{
  //   console.log("wwwwowwwwowwwwoowww");
  // }
  render() {
    return (
      <Fragment>
        <div>Home</div>
        {/* <input type="text" onChange={this.changeColor} id="color" /> */}
        {/* <select value={this.state.value} onChange={this.changeColor}>
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
          </select> */}
        {/* <div>{this.state.fromChild}</div> */}
        {/* <Profile color={this.state.childColor} val={this.pre}  name={this.state.name}  parentCallback={this.fun1} /> */}
      </Fragment>
    )
  }
}

export default Home