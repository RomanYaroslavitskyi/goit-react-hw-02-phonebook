import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import s from './Phonebook.module.css';

const { Component } = require('react');

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userName = e.target[0].value;
    const findUser = this.props.findContact(userName);

    if (findUser) {
      return Notify.failure(`${findUser} is already in contacts`);
    }

    Notify.success(`${userName} is added to the list of contacts`);

    this.props.onSaveSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <>
        <form onSubmit={handleSubmit} className={s.form}>
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              className={s.input}
            />
          </label>
          <button type="submit" className={s.btn}> Add contact</button>
        </form>
      </>
    );
  }
}

export default Phonebook;


Phonebook.propTypes = {
  findContact: PropTypes.func.isRequired,
  onSaveSubmit:PropTypes.func.isRequired
};