import css from './SearchBar.module.css';
import { IoSearchOutline } from 'react-icons/io5';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
//npm install react-hot-toast
import toast, { Toaster } from 'react-hot-toast';

// схема валідації input
const SearchFormSchema = Yup.object().shape({
  query: Yup.string().min(1, 'Nothing to search!').required('Required'),
});

export default function SearchBar({ onSearch }) {
  const handleSubmit = async (values, actions) => {
    if (values.query.trim() === '') {
      toast.dismiss();
      toast.error('Please enter text to search images!');
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={handleSubmit}
      validationSchema={SearchFormSchema}
    >
      <header className={css.header}>
        <Toaster />
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <IoSearchOutline className={css.icon} />
          </button>
        </Form>
      </header>
    </Formik>
  );
}