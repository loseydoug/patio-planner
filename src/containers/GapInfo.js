import React, { useState } from 'react';


// export default class GapInfo extends React.Component {
//   constructor( props ) {
//     super( props );
//     this.state = {
//       gap: 0.0,
//       unit: "inches"
//     }
//   }

//   handleGapChange = (event) => {
//     this.setState({gap: event.target.value});
//   }

//   render() {
//     return (
//       <div className="gapInfo">
//         <label for="gap">Gap between bricks</label>
//         <input name="gap" className="gap" onBlur={this.handleGapChange} />
//         <p className="unit">{this.state.unit}</p>
//       </div>
//     );
//   }
// }

export const GapInfo = props => {
  const { gap: [gap, setGap] } = {
    gap: useState(0.0),
    ...(props.state || {})
  }
  const { unit: [unit, setUnit] } = {
    unit: useState("inches"),
    ...(props.state || {})
  }
  return (
    <div className="gapInfo">
      <label for="gap">Gap between bricks</label>
      <input name="gap" className="gap" onBlur={e => setGap(e.target.value)} defaultValue={gap}/>
      <p className="unit">{unit}</p>
    </div>
  );  
}