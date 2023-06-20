import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import isHaveContact from 'helpers/isHaveContact'
import { addContact } from 'store/slices/contactsSlice'
import Form from './ContactForm.styled'

const INITIAL_VALUE = { name: '', number: '' }

const ContactForm = () => {
  const [contactData, setContactData] = useState({ ...INITIAL_VALUE })
  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch()

  const createContact = newContact => {
    if (isHaveContact(contacts, newContact)) {
      alert(` ${newContact.name} is already in contacts!`)
    } else {
      dispatch(addContact(newContact))
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setContactData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    createContact({
      id: nanoid(),
      ...contactData,
    })
    setContactData({ ...INITIAL_VALUE })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contactData.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        value={contactData.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter number"
        required
      />
      <button>Create</button>
    </Form>
  )
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
}

export default ContactForm