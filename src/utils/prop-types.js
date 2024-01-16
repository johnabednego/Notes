import PropTypes from 'prop-types';

export const note = PropTypes.exact({
  title: PropTypes.string,
  textContent: PropTypes.string.isRequired,
  colorHex: PropTypes.string,
  isArchived: PropTypes.bool,
  isTrashed: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number.isRequired,
  archivedAt: PropTypes.number,
  trashedAt: PropTypes.number,
  id: PropTypes.string.isRequired,
});
