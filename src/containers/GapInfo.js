import React from 'react';


export default class GapInfo extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      gap: 0.0,
      unit: "inches"
    }
  }

  handleGapChange = (event) => {
    this.setState({gap: event.target.value});
  }

  render() {
    return (
      <div className="gapInfo">
        <label for="gap">Gap between bricks</label>
        <input name="gap" className="gap" onChange={this.handleGapChange} />
        <p className="unit">{this.state.unit}</p>
      </div>
    );
  }
}
