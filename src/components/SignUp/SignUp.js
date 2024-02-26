import styles from './SignUp.module.scss'

export default function SignUp({
    credentials,
    signUp,
    handleChangeAuth
}) {
    return (
        <>
            <h2>SignUp</h2>
            <form
            className="sign__up__form"
            onSubmit={(e) => {
                e.preventDefault()
                signUp()
            }}>
                <input type="text" value={credentials.name} name="name" onChange={handleChangeAuth} placeholder='Email' />
                <input type="text" value={credentials.email} name="email" onChange={handleChangeAuth} placeholder='Name' />
                <input type="text" value={credentials.password} name="password" onChange={handleChangeAuth} placeholder='Password' />
                <input type="submit" value="Sign Up as New User" />
            </form>
        </>
    )
}