import {useState, React} from 'react';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login">
      <h1>Connexion</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={username} onChange={updateUserName}/>
        <input type="password" value={password} onChange={updatePassword}/>
        <button>Submit</button>
      </form>
    </div>
  );

  /**
   * Triggered when the user clicks the "Submit" button.
   * Attempts to login the user with the provided values.
   * @param event The submussion of the form.
   */
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Ready to submit");
  }

  /**
   * Updates the state username with the value received as a parameter.
   * @param target The target containing the value we want to use to replace the username value
   */
  function updateUserName({target}) {
    setUsername(target.value);
  }

  /**
   * Updates the state password with the value received as a parameter.
   * @param target The target containing the value we want to use to replace the password value.
   */
  function updatePassword({target}) {
    setPassword(target.value);
  }
}
