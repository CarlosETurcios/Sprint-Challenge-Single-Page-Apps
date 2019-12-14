import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
export default function SearchForm({ values, errors, touched, status }) {
  const [searches, setSearch] = useState([]);

  useEffect(() => {
    console.log(status);

    status && setSearch(searches => [...searches, status]);
  }, [status]);

  return (
    <section className='search-form'>
      <Form>
        <Field id='search' type='text' name='search' placeholder='Search' />
      </Form>
    </section>
  );
}
