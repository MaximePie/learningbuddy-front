import React from 'react';
import {useForm} from "react-hook-form";

export default function Login() {
  const {register, handleSubmit} = useForm();

  return (
    <div className="Login">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          name="username"
          type="text"
          defaultValue=""
          ref={register({
            required: true,
          })}
        />
        <input
          name="password"
          type="password"
          defaultValue=""
          ref={register({
            required: true,
          })}
        />
        <button>Se connecter</button>
      </form>
    </div>
  );

  /**
   * Triggered when the user clicks the "Submit" button.
   * Attempts to login the user with the provided values.
   * @param data The data we want to handle
   */
  function handleFormSubmit(data) {
    console.log(data);
    console.log("Ready to submit");
  }
}
