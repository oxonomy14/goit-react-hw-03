import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ phonebook, handleDeleteContact }) => {
  return (
    <>
      <div className={css.wrapperContactList}>
        <h2 className={css.titleContactList}>ContactList</h2>
        <ul className={css.contactList}>
          {phonebook.map((item) => (
            <Contact key={item.id} item={item} onDelete={handleDeleteContact} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
