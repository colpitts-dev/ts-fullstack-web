import { useState } from 'react'

import Button from '@components/button/button.component'
import FormInput from '@components/form-input/form-input.component'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    try {
      //await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password': {
          alert('Incorrect password entered. Please try again.')
          break
        }
        case 'auth/user-not-found': {
          alert('No user associated with this email. Please try again.')
          break
        }
        default: {
          alert('An error occurred. Please try again.')
        }
      }
    }
  }

  return (
    <form className="flex flex-col p-4 pb-16 sm:pb-0" onSubmit={handleSubmit}>
      <h2 className="text-xl">Sign in</h2>
      <p className="mb-8 text-xs">Please sign into your account below.</p>
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Button type="submit" className="mb-2 text-white bg-secondary">
        Sign In
      </Button>
      <Button
        disabled
        type="button"
        className="login-with-google-btn"
        onClick={() => alert('Feature coming soon!')}
      >
        Sign in with Google
      </Button>
    </form>
  )
}

export default SignInForm
