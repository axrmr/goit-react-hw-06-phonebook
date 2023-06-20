import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
  filterValue: '',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload)
    },
    setContactsFilter(state, action) {
      state.filterValue = action.payload
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      )
    },
  },
})

export const { addContact, setContactsFilter, deleteContact } =
  contactsSlice.actions

export default contactsSlice.reducer
