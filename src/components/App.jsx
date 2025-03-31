import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "./App.css";

import { nanoid } from "nanoid";

import phonebook from "../assets/phonebook.json";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

const App = () => {
  const [contact, setContact] = useState(
    () => JSON.parse(localStorage.getItem("contact")) ?? phonebook
  );

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  const handleSearchContact = (evt) => {
    const query = evt.target.value.toLowerCase(); // Отримуємо значення з інпуту
    setInputValue(query); // Оновлюємо стан інпуту

    // Фільтруємо контакти за ім’ям
    const filteredContacts = phonebook.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    setContact(filteredContacts); // Оновлюємо список контактів
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(), // Генеруємо унікальний ID
      ...values,
    };

    console.log(newContact);
    setContact([...contact, newContact]); // Передаємо новий контакт у функцію
    actions.resetForm();
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contact.filter((item) => item.id !== contactId);
    setContact(updatedContacts);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        onChange={handleSearchContact}
      />
      <ContactList
        phonebook={contact}
        handleDeleteContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
