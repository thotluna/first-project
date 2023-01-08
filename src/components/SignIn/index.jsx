import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import InputLayout from './input-layout'
import styles from './signin.module.css'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('is required'),
  password: Yup.string()
    .min(8)
    .required('is required')
})

export default function SignIn({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const handleOnSubmit = data => {
    onSubmit(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
      <InputLayout>
        <label htmlFor='email' className={styles.label}>
        E-mail</label>
        <input id='email' className={styles.input} type='text' autoComplete="username" placeholder='Enter your E-mail' {...register('email')} />
        <span className={styles['span-error']}>{errors.email?.message}</span>
      </InputLayout>

      <InputLayout>
      <label htmlFor='password' className={styles.label}>Password</label>
      <input className={styles.input} type='password' autoComplete="current-password" placeholder='Enter your password' {...register('password')} />
      <span className={styles['span-error']}>{errors.password?.message}</span>
      </InputLayout>

      <InputLayout>
      <button className={styles['button-signin']} type="submit">Sign In</button>
      </InputLayout>
    </form>
  )
}

SignIn.propTypes = {
  onSubmit: PropTypes.func
}
