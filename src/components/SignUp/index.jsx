import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: ''
}

const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'min 3 characters required')
    .required('is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('is required'),
  password: Yup.string()
    .min(8)
    .required('is required'),
  confirm: Yup.string()
    .when('password', {
      is: value => (!!(value && value.length > 0)),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords must match'
      )
    }).required('is required')
})

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

export default function SignUp() {
  return (
     <Formik
       initialValues={initialValues}
       validationSchema={schema}
       onSubmit={onSubmit}
     >
       {({ isSubmitting }) => (
          <Form style={{ width: '50vw', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'start' }}>
            <label htmlFor='username'>Username</label>
            <Field name='username' type='text' placeholder='Enter your username' />
            <ErrorMessage name="email" component="div" />
            <label htmlFor='email'>E-mail</label>
            <Field name='email' type="email" placeholder="example@example.com" />
            <ErrorMessage name="email" component="div" />
            <label htmlFor='password'>Password</label>
            <Field type="password" name="password" placeholder='Enter your password' />
            <ErrorMessage name="password" component="div" />
            <label htmlFor='confirm'>Confir Password</label>
            <Field type="password" name="confirm" placeholder='Enter your password' />
            <ErrorMessage name="confirm" component="div" />
            <button type="submit" disabled={isSubmitting}>
            Submit
            </button>
          </Form>
       )}
     </Formik>
  )
}
