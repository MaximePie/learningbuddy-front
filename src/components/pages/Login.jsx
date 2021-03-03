import React from 'react';
import {useForm} from "react-hook-form";
import Button from "../atoms/Button";
import Textfield from "../atoms/Textfield";

export default function Login() {
  const {register, handleSubmit} = useForm();

  return (
    <div className="Login">
      <h1 className="Login__header">Learning Buddy</h1>
      <div className="Login__card">
        <h2>Connexion</h2>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="Login__form"
        >
          <Textfield
            name="username"
            register={register({required: true})}
            label="Identifiant"
          />
          <Textfield
            name="password"
            register={register({required: true})}
            label="Mot de passe"
          />
          <Button onClick={() => {}} text="Se connecter"/>
        </form>
      </div>
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
