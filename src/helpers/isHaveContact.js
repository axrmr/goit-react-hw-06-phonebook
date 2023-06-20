const isHaveContact = (contactsArr, newContactObj) => {
    const contact = contactsArr.find(
        contact =>
            contact.name.toLowerCase() === newContactObj.name.toLowerCase()
    );
    return contact ? true : false;
};

export default isHaveContact;
