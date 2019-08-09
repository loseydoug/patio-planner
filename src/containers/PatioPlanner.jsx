import React, { useState } from 'react';
import { BrickInfo } from './BrickInfo'
import { GapInfo } from './GapInfo'
import { PatioInfo } from './PatioInfo'

// export default class PatioPlanner extends React.Component {
//   constructor( props ) {
//     super( props );
//     this.state = {
//       brickOneWidth: 5.5,
//       brickOneLength: 5.5,
//       brickOneQty: 766,
//       brickTwoLength: 8.25,
//       brickTwoWidth: 5.5,
//       brickTwoQty: 354,
//       brickUnit: "inches",
//       gap: .25,
//       patioWidth: 15,
//       patioLength: 17,
//       patioUnit: "feet",
//       maxBrickOne: 0.0,
//       maxBrickTwo: 0.0,
//       rows: 0.0,
//       brickBreakdown: 0.0,
//       brickOneOptions: [],
//       brickTwoOptions: [],
//       brickOneNeeded: [],
//       brickTwoNeeded: []
//     }
//   }
//   //small = 946
//   //large =346
//   handleBrickOneWidthChange = (event) => {
//     this.setState({brickOneWidth: Number(event.target.value)}, () => {
//       this.rowsInPatio();
//     });
//   }

//   handleBrickOneLengthChange = (event) => {
//     this.setState({brickOneLength: Number(event.target.value)}, () => {
//       this.brickOnePerRow();
//     });
//   }

//   handleBrickTwoWidthChange = (event) => {
//     this.setState({brickTwoWidth: Number(event.target.value)}, () => {
//       this.rowsInPatio();
//     });
//   }

//   handleBrickTwoLengthChange = (event) => {
//     this.setState({brickTwoLength: Number(event.target.value)}, () => {
//       this.brickTwoPerRow();
//     });
//   }

//   handlePatioWidthChange = (event) => {
//     this.setState({patioWidth: Number(event.target.value)}, () => {
//       this.rowsInPatio();
//     });
//   }

//   handlePatioLengthChange = (event) => {
//     this.setState({patioLength: Number(event.target.value)}, () => {
//       this.brickOnePerRow();
//       this.brickTwoPerRow();
//     });
//   }

//   brickTwoPerRow = () => {
//     const bricks = (this.state.patioLength * 12) / (this.state.brickTwoLength + this.state.gap);
//     this.setState({brickTwoPerRow: bricks});
//   }

//   brickOnePerRow = () => {
//     const bricks = (this.state.patioLength * 12) / (this.state.brickOneLength + this.state.gap);
//     this.setState({brickOnePerRow: bricks});
//   }



//   maxBrickOne = () => {
//     this.setState({maxBrickOne: this.state.brickOneQty / this.state.rows});
//   }

//   maxBrickTwo = () => {
//     this.setState({maxBrickTwo: this.state.brickTwoQty / this.state.rows}, () => {
//       this.brickOptions();
//     });
//   }

//   brickBreakdown = () => {
//     this.setState({brickBreakdown: ((this.state.patioLength * 12) - (Math.floor(this.state.maxBrickTwo) * (this.state.brickTwoLength + this.state.gap))) / (this.state.brickOneLength + this.state.gap) })
//   }
  
//   brickOptions = () => {
//     const brickOne = [];
//     const brickTwo = [];
//     const brickOneNeeded = [];
//     const brickTwoNeeded = [];

//     for(let i = Math.floor(this.state.maxBrickTwo); i >= 0; i--) {
//       let brickOneOption = ((this.state.patioLength * 12) - (i * (this.state.brickTwoLength + this.state.gap)))/ (this.state.brickOneLength + this.state.gap);
//       if(Math.floor(brickOneOption) <= Math.floor(this.state.maxBrickOne)) {
//         brickOne.push(Math.floor(brickOneOption));
//         brickTwo.push(i);
//         brickOneNeeded.push(Math.floor(this.state.rows) * Math.floor(brickOneOption));
//         brickTwoNeeded.push(Math.floor(this.state.rows) * i);
//       }
//     }
//     this.setState({brickOneOptions: brickOne, brickTwoOptions: brickTwo, brickOneNeeded, brickTwoNeeded}, () => {
//       this.buildBrickOptionsTable();
//     });
//   }

//   buildBrickOptionsTable = () => {
//     const container = document.getElementById("optionsContainer");
//     container.innerHTML = "";
//     this.state.brickOneOptions.forEach((brickOne, index) => {
//       let p = document.createElement('p');
//       let brickOneNeeded = this.state.brickOneNeeded[index];
//       let brickTwo = this.state.brickTwoOptions[index];
//       let brickTwoNeeded = this.state.brickTwoNeeded[index];
//       let excessBrickOne = this.state.brickOneQty - brickOneNeeded;
//       let excessBrickTwo = this.state.brickTwoQty - brickTwoNeeded;
//       let patioLength = ((brickOne * (this.state.brickOneLength + this.state.gap)) + (brickTwo * (this.state.brickTwoLength + this.state.gap))) / 12
//       let ratio = brickOne/brickTwo;

//       p.innerHTML = `brick one: ${brickOne}, brick two: ${brickTwo}, length: ${patioLength}, ratio: ${ratio}, brick one needed: ${brickOneNeeded}, brick two needed: ${brickTwoNeeded}, brick one excess: ${excessBrickOne}, brick two excess: ${excessBrickTwo}`
//       container.appendChild(p);
//     })
//   }

//   countBricksNeeded = () => {
//   }

//   excessBricks = () => {

//   }

//   render() {
//     return (
//       <div>
//         <BrickInfo 
//           width={this.state.brickOneWidth} 
//           length={this.state.brickOneLength} 
//           unit="inches" 
//           handleLengthChange={this.handleBrickOneLengthChange} 
//           handleWidthChange={this.handleBrickOneWidthChange}
//         ></BrickInfo>
//         <BrickInfo 
//           width={this.state.brickTwoWidth} 
//           length={this.state.brickTwoLength} 
//           unit="inches" 
//           handleLengthChange={this.handleBrickTwoLengthChange} 
//           handleWidthChange={this.handleBrickTwoWidthChange}
//         ></BrickInfo>
//         <PatioInfo 
//           width={this.state.patioWidth} 
//           length={this.state.patioLength} 
//           unit="feet" 
//           handleLengthChange={this.handlePatioLengthChange} 
//           handleWidthChange={this.handlePatioWidthChange}
//         />
//         <p>Rows: {this.state.rows}</p>
//         <p>Max Brick One Per Row: {this.state.maxBrickOne}</p>
//         <p>Max Brick Two Per Row: {this.state.maxBrickTwo}</p>
//         <p>Brick Breakdown: brickOne: {this.state.brickBreakdown}, brickTwo: {Math.floor(this.state.maxBrickTwo)}</p>
//         <div id="optionsContainer"></div>
//       </div>
//     );
//   }
// }


export const PatioPlanner = props => {
  const [brickOneWidth, setBrickOneWidth] = useState(5.5);
  const [brickOneLength, setBrickOneLength] = useState(5.5);
  const [brickOneQty, setBrickOneQty] = useState(766);
  const [brickTwoLength, setBrickTwoLength] = useState(8.25);
  const [brickTwoWidth, setBrickTwoWidth] = useState(5.5);
  const [brickTwoQty, setBrickTwoQty] = useState(354);
  const [brickUnit, setBrickUnit] = useState("inches");
  const [gap, setGap] = useState(.25);
  const [patioWidth, setPatioWidth] = useState(16.5);
  const [patioLength, setPatioLength] = useState(17.5);
  const [patioUnit, setPatioUnit] = useState("feet");
  const [maxBrickOne, setMaxBrickOne] = useState(0.0);
  const [maxBrickTwo, setMaxBrickTwo] = useState(0.0);
  const [rows, setRows] = useState(0.0);
  const [brickBreakdown, setBrickBreakdown] = useState(0.0);
  const [brickOnePerRow, setBrickOnePerRow] = useState(0.0);
  const [brickTwoPerRow, setBrickTwoPerRow] = useState(0.0);
  const [brickOneOptions, setBrickOneOptions] = useState([]);
  const [brickTwoOptions, setBrickTwoOptions] = useState([]);
  const [brickOneNeeded, setBrickOneNeeded] = useState([]);
  const [brickTwoNeeded, setBrickTwoNeeded] = useState([]);

  const rowsInPatio = () => {
    const rows = Math.floor((patioWidth * 12) / (brickOneWidth + gap));
    setRows(rows);
    setMaxBrickOne(brickOneQty / rows);
    setMaxBrickTwo(brickTwoQty / rows);
    setBrickBreakdown(((patioLength * 12) - (Math.floor(maxBrickTwo) * (brickTwoLength + gap))) / (brickOneLength + gap));
    brickOptions(rows);
  }

  const updateBrickTwoPerRow = () => {
    const bricks = (patioLength * 12) / (brickTwoLength + gap);
    setBrickTwoPerRow(bricks);
  }

  const updateBrickOnePerRow = () => {
    const bricks = (patioLength * 12) / (brickOneLength + gap);
    setBrickOnePerRow(bricks);
  }

  const brickOptions = (rows) => {
    const brickOne = [];
    const brickTwo = [];
    const brickOneNeeded = [];
    const brickTwoNeeded = [];

    for(let i = Math.floor(maxBrickTwo); i >= 0; i--) {
      let brickOneOption = ((patioLength * 12) - (i * (brickTwoLength + gap)))/ (brickOneLength + gap);
      if(Math.floor(brickOneOption) <= Math.floor(maxBrickOne)) {
        brickOne.push(Math.floor(brickOneOption));
        brickTwo.push(i);
        brickOneNeeded.push(Math.floor(rows) * Math.floor(brickOneOption));
        brickTwoNeeded.push(Math.floor(rows) * i);
      }
    }
    setBrickOneOptions(brickOne);
    setBrickTwoOptions(brickTwo);
    setBrickOneNeeded(brickOneNeeded);
    setBrickTwoNeeded(brickTwoNeeded);
    buildBrickOptionsTable(rows);
  }

  const buildBrickOptionsTable = (rows) => {
    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";
    brickOneOptions.forEach((brickOne, index) => {
      let p = document.createElement('p');
      let brickOneNeededOption = brickOneNeeded[index];
      let brickTwo = brickTwoOptions[index];
      let brickTwoNeededOption = brickTwoNeeded[index];
      let excessBrickOne = brickOneQty - brickOneNeededOption;
      let excessBrickTwo = brickTwoQty - brickTwoNeededOption;
      let patioLength = ((brickOne * (brickOneLength + gap)) + (brickTwo * (brickTwoLength + gap))) / 12
      let ratio = brickOne/brickTwo;

      p.innerHTML = `brick one: ${brickOne}, brick two: ${brickTwo}, width: ${rows * (brickOneWidth + gap) / 12}, length: ${patioLength}, ratio: ${ratio}, brick one needed: ${brickOneNeededOption}, brick two needed: ${brickTwoNeededOption}, brick one excess: ${excessBrickOne}, brick two excess: ${excessBrickTwo}`
      container.appendChild(p);
    })
  }

  return (
      <div>
        <BrickInfo 
          state={{ width: [brickOneWidth, setBrickOneWidth], 
            length: [brickOneLength, setBrickOneLength], 
            unit: [brickUnit, setBrickUnit]
          }}
          rowsFn={rowsInPatio}
          brickOneFn={updateBrickOnePerRow}
          brickTwoFn={updateBrickTwoPerRow}
        ></BrickInfo>
        <BrickInfo 
          state={{ width: [brickTwoWidth, setBrickTwoWidth], 
            length: [brickTwoLength, setBrickTwoLength], 
            unit: [brickUnit, setBrickUnit]
          }}
          rowsFn={rowsInPatio}
          brickOneFn={updateBrickOnePerRow}
          brickTwoFn={updateBrickTwoPerRow}
        ></BrickInfo>
        <GapInfo state={{ gap: [gap, setGap] }} />
        <PatioInfo 
          state={{ width: [patioWidth, setPatioWidth], 
            length: [patioLength, setPatioLength], 
            unit: [patioUnit, setPatioUnit]
          }} 
          rowsFn={rowsInPatio}
          brickOneFn={updateBrickOnePerRow}
          brickTwoFn={updateBrickTwoPerRow}
        />
        <p>Rows: {rows}</p>
        <p>Max Brick One Per Row: {maxBrickOne}</p>
        <p>Max Brick Two Per Row: {maxBrickTwo}</p>
        <p>Brick Breakdown: brickOne: {brickBreakdown}, brickTwo: {Math.floor(maxBrickTwo)}</p>
        <div id="optionsContainer"></div>
      </div>
    );
}
