import React from 'react';
import PropTypes from 'prop-types';

export default function LineGraphPointSymbol({
  borderColor, borderWidth, color, size,
}) {
  return (
    <g>
      <circle fill="#fff" r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />
      <circle
        r={size / 5}
        strokeWidth={borderWidth}
        stroke={borderColor}
        fill={color}
        fillOpacity={0.35}
      />
    </g>
  );
}

LineGraphPointSymbol.propTypes = {
  size: PropTypes.number.isRequired,
  borderColor: PropTypes.string.isRequired,
  borderWidth: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
