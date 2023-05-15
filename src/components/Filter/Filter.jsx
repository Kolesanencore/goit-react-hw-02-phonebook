import PropTypes from 'prop-types';
import { Input } from '../ContactList/ContactList.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search contacts"
      value={filter}
      onChange={onChange}
    />
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
