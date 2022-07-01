const FilterContacts = ({ onChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" onChange={onChange} />
      </label>
    </>
  );
};

export default FilterContacts;
