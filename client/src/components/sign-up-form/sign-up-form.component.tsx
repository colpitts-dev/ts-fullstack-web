import { useState } from 'react'

import Button from '@components/button/button.component'
import FormInput from '@components/form-input/form-input.component'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      // const { user } = await createAuthUserWithEmailAndPassword(email, password)
      // await createUserProfileDocument(user, { displayName })

      resetFormFields()
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.error('user creation encountered an error', error)
      }
    }
  }

  return (
    <form className="flex flex-col p-4 bg-slate-200" onSubmit={handleSubmit}>
      <h2 className="pt-6 text-xl sm:pt-0">Need an account?</h2>
      <p className="mb-8 text-xs">Welcome aboard, join for free below.</p>
      <FormInput
        label="Display Name"
        type="text"
        name="displayName"
        value={displayName}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <FormInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />
      <Button type="submit" className="mb-4 text-white bg-primary">
        Create Account
      </Button>
    </form>
  )
}

export default SignUpForm
