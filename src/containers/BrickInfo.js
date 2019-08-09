import React, { useState, useEffect } from 'react';


export const BrickInfo = props => {
  const { length: [length, setLength] } = {
    length: useState(0.0),
    ...(props.state || {})
  }

  const { width: [width, setWidth] } = {
    width: useState(0.0),
    ...(props.state || {})
  }

  const { unit: [unit, setUnit] } = {
    unit: useState("inches"),
    ...(props.state || {})
  }

  const { rows: [rows, setRows] } = {
    rows: useState(0),
    ...(props.state || {})
  }
  
  useEffect(
    () => {
      props.rowsFn();
    }, [width]
  )
  useEffect(
    () => {
      props.brickOneFn();
      props.brickTwoFn();
    }, [length]
  )
  return (
    <div className="brickInfo">
      <label for="width">Width</label>
      <input name="width" className="width" onBlur={ e => setWidth(Number(e.target.value)) } defaultValue={width} />
      <p className="unit">{unit}</p>

      <label for="length">Length</label>
      <input name="length" className="length" onBlur={ e => setLength(Number(e.target.value)) } defaultValue={length} />
      <p className="unit">{unit}</p>

      <p className="sqft"> = {width * length / 144 } SqFt/Brick </p>
    </div>
  );

}
