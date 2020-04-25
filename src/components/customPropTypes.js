import PropTypes from 'prop-types';

const lineGraphDataShape = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.string.isRequired,
        y: PropTypes.string.isRequired,
      }),
    ),
  }),
);

export default {
  shapes: {
    lineGraphData: lineGraphDataShape,
  },
};
