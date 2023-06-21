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
    if (value.startsWith(' ') return
    setContactData(prev => ({ ...prev, [name]: value.trim() }))
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
        pattern="(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Rustam Aslanov"
        required
      />
      <input
        type="tel"
        name="number"
        value={contactData.number}
        onChange={handleChange}
        pattern="^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)([0-9]{10})$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="088-088-0808"
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
