import React, { useState, useEffect } from 'react';


export const PatioInfo = (props) => {
  const { length: [length, setLength] } = {
    length: useState(0.0),
    ...(props.state || {})
  }

  const { width: [width, setWidth] } = {
    width: useState(0.0),
    ...(props.state || {})
  }

  const { unit: [unit, setUnit] } = {
    unit: useState("feet"),
    ...(props.state || {})
  }

  useEffect(
    () => {
      props.rowsFn();
      props.brickOneFn();
      props.brickTwoFn();
    }, [width])

  return (
    <div className="patioInfo">
      <label for="width">Width</label>
      <input name="width" className="width" onBlur={e => setWidth(Number(e.target.value))} defaultValue={width} />
      <p className="unit">{unit}</p>

      <label for="length">Length</label>
      <input name="length" className="length" onBlur={e => setLength(Number(e.target.value))} defaultValue={length} />
      <p className="unit">{unit}</p>

      <p className="sqft"> = {width * length } SqFt </p>
    </div>
  );
}
