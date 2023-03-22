import SignInForm from '@components/sign-in-form/sign-in-form.component'
import SignUpForm from '@components/sign-up-form/sign-up-form.component'

export function AuthPage() {
  return (
    <main className="sign-in">
      <section className="flex py-6 pb-10 bg-slate-100">
        <div className="flex flex-col w-full sm:flex-row sm:mx-auto sm:w-auto">
          <SignInForm />
          <SignUpForm />
        </div>
      </section>
    </main>
  )
}
