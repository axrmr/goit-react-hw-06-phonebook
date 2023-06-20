import { IoIosClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'

import { useRef } from 'react'
import { setContactsFilter } from 'store/slices/contactsSlice'
import { Input, Wrapper } from './Filter.styled'

const Filter = () => {
  const inputRef = useRef()
  const { filterValue, contacts } = useSelector(state => state.contacts)
  const dispatch = useDispatch()

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setContactsFilter(value))
  }

  const clearInput = () => {
    dispatch(setContactsFilter(''))
    inputRef.current.focus()
  }

  return (
    <Wrapper>
      {filterValue && (
        <IoIosClose className="close" onClick={clearInput} size={34} />
      )}
      <Input
        disabled={contacts.length <= 1}
        ref={inputRef}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Search contact"
      />
    </Wrapper>
  )
}

export default Filter
