import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import ReactLogo from 'components/ReactLogo/ReactLogo'
import './App.css'

const CONTACTS_STORAGE_KEY = 'phonebook-contacts'

const App = () => {
  return (
    <>
      <ReactLogo />
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  )
}

export default App
