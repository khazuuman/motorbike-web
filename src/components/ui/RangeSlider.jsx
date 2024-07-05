import React, { useCallback, useEffect, useState, useRef } from 'react';
import './RangeSlider.css'


const RangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className='range-container'>
      <div className='range-inner-one'>
        <input
          type='range'
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className='thumb thumb--left'
          style={{ zIndex: minVal > max - 100 ? '5' : 'auto' }}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className='thumb thumb--right'
        />

        <div className='range-inner-bottom'>
          <div className='range-inner-bottom-one' />
          <div ref={range} className='range-inner-bottom-two' />
        </div>
      </div>
      <div className='range-inner-two'>
        <p>Price:</p>
        <div className='range-inner-two-inner'>
          <p

            title={minVal}
          >
            {minVal}
          </p>
          <span>-</span>
          <p
            title={maxVal}
          >
            {maxVal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
