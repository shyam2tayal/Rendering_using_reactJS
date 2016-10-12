import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

  constructor(){
    super();
    this.state = {abc :0};
  }
  update(e) {
    this.setState({abc : this.state.abc + 1})
  }
  render(){
    return <button style={{width : 250}} onClick={this.update.bind(this)}>{this.state.abc}</button>
  }
}

class Wrapper extends React.Component{

  constructor(){
    super();
  }

  mount(){
    ReactDOM.render(<App />,document.getElementById('bu'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('bu'))
  }

  render(){
    return (
      <div>
      <button onClick={this.mount.bind(this)}>Mount</button>
      <button onClick={this.unmount.bind(this)}>Unmount</button>
      <div id="bu"></div>
      </div>
    )
  }


}


export default Wrapper
