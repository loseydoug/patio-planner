import React from 'react';


export default class BrickInfo extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      width: 0.0,
      length: 0.0,
      unit: "inches"
    }
  }

  handleWidthChange = (event) => {
    this.setState({width: event.target.value});
  }

  handleLengthChange = (event) => {
    this.setState({length: event.target.value});
  }

  render() {
    return (
      <div className="brickInfo">
        <label for="width">Width</label>
        <input name="width" className="width" onChange={this.handleWidthChange} />
        <p className="unit">{this.state.unit}</p>

        <label for="length">Length</label>
        <input name="length" className="length" onChange={this.handleLengthChange} />
        <p className="unit">{this.state.unit}</p>

        <p className="sqft"> = {this.state.width * this.state.length / 144 } SqFt/Brick </p>
      </div>
    );
  }
}
