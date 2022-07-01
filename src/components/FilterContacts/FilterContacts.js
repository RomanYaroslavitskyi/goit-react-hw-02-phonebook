import PropTypes from 'prop-types';
import s from './FilterContacts.module.css';

const FilterContacts = ({ onChange }) => {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input type="text" onChange={onChange} className={s.input} />
      </label>
    </>
  );
};

export default FilterContacts;

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired
}