import React from 'react';

const ContactsList = ({ contacts, onClickDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name} : {number}
            <button
              type="button"
              onClick={() => {
                onClickDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
