import React from 'react';
import { withFormik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from './Button';

const FormikForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Title </label>
          <Field
            type="text"
            value={values.title}
            onChange={handleChange}
            name="title"
            style={styles.input}
          />
          <ErrorMessage name="title" />
        </div>

        <div>
          <label>Release Year </label>
          <Field
            type="number"
            value={values.releaseYear}
            onChange={handleChange}
            name="releaseYear"
            style={styles.input}
          />
          <ErrorMessage name="releaseYear" />
        </div>

        <div>
          <label> IMDb</label>
          <Field
            type="number"
            value={values.imdb}
            onChange={handleChange}
            name="imdb"
            style={styles.input}
          />
          <ErrorMessage name="imdb" />
        </div>

        <div>
          <label>Directors:</label>
          <FieldArray
            render={arrayHelpers => (
              <div>
                {values.directors.map((director, index) => (
                  <div key={index}>
                    <Field
                      type="text"
                      name={`directors.${index}`}
                      style={styles.input}
                    />
                  </div>
                ))}

                <Button onClick={() => arrayHelpers.push('')}>
                  Add Director
                </Button>
              </div>
            )}
            name="directors"
          />
        </div>

        <Button type="submit">Add new movie</Button>
      </Form>
    </div>
  );
};

const InputFormik = withFormik({
  mapPropsToValues: () => ({
    title: '',
    releaseYear: 2019,
    imdb: 0,
    director: '',
    directors: [],
  }),

  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(2)
      .max(45)
      .required('Title is required!'),
    releaseYear: Yup.number()
      .min(1900)
      .max(2019)
      .required('Release year is required!'),
    imdb: Yup.number()
      .min(0)
      .max(10)
      .required('IMDb is required!'),
    director: Yup.string()
      .min(6)
      .max(45),
  }),

  handleSubmit: (values, { setSubmitting, props, resetForm }) => {
    props.onSubmit(values, setSubmitting);
    resetForm();
  },
})(FormikForm);

const MovieForm = ({ addMovie }) => (
  <div>
    <InputFormik onSubmit={addMovie} />
  </div>
);

const styles = {
  input: {
    padding: '8px 10px',
    margin: '5px',
    borderColor: '#333',
    border: '1px solid',
    borderRadius: '2px',
  },
};

export default MovieForm;
