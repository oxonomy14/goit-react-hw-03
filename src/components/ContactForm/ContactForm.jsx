import { Formik, Form, Field } from "formik";
import { useId } from "react";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ handleSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
