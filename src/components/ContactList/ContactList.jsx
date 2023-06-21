import { useDispatch, useSelector } from 'react-redux'
import { IoIosClose } from 'react-icons/io'

import { deleteContact } from 'store/slices/contactsSlice'
import List from './ContactList.styled'

const ContactList = () => {
  const { contacts, filterValue } = useSelector(state => state.contacts)

  const dispatch = useDispatch()

  const removeContact = id => {
    dispatch(deleteContact(id))
  }

  const filterContacts = (contacts, filter) => {
    if (filter)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    return contacts
  }

  const filteredContacts = filterContacts(contacts, filterValue)

  return (
    <List>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button onClick={() => removeContact(contact.id)}>
            <IoIosClose className="close" size={35} />
          </button>
        </li>
      ))}
    </List>
  )
}

export default ContactList
