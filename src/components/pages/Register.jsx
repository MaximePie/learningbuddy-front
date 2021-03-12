import React from 'react';
import {useForm} from "react-hook-form";
import Button from "../atoms/Button";
import Textfield from "../atoms/Textfield";

import axios from "axios";

const url = "http://localhost:8000";

export default function Register() {
  // const {register, handleSubmit} = useForm();
  const { register, handleSubmit } = useForm();

  return (
    <div className="Register">
      <h1 className="Register__header">Learning Buddy</h1>
      <div className="Register__card">
        <h2>Votre aventure commence ici !</h2>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="Register__form"
        >
          <Textfield
            name="email"
            register={register({required: true})}
            label="Email"
          />
          <Textfield
            name="password"
            register={register({required: true})}
            label="Mot de passe"
          />
          <Button onClick={() => {handleSubmit(handleFormSubmit)}} text="Je crée mon compte"/>
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
    alert("Bien reçu");
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    axios.post(`${url}/api/user/create`, userInfo)
  }
}
