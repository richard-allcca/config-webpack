

import React, { Component } from 'react';

export class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>¡hola Mundo, Webpack con {this.props.name}</h1>
        <img className="icon" src={this.props.logo} alt={this.props.name} />
        <nav className="menu">
          {
            this.props.menu.map(el => <a key={el[0]} href={el[1]}>{el[0]}</a>)
          }
        </nav>
        {console.log(this.props)}// que es un props
      </div>
    )
  }
}

// export default helloWorld

