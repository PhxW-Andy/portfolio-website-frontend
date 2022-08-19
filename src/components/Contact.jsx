import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name muss ausgefüllt werden"),
    email: yup
      .string()
      .email("Email muss gültig sein")
      .required("Email muss ausgefüllt werden"),
    message: yup.string().required("Nachricht muss ausgefüllt werden"),
  })
  .required();

const Contact = () => {
  const [confirm, setConfirm] = useState(false);

  const URL = import.meta.env.VITE_EMAIL_SEND_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(
    { resolver: yupResolver(schema) },
    { defaultValues: { name: "", email: "", message: "" } }
  );

  const onSubmit = async (formData) => {
    await fetch(URL, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // setConfirm(true);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    reset();

    setTimeout(() => {
      setConfirm(false);
    }, 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Kontakt</h2>
        <p className="intro-text">
          Über das Formular könnt ihr mir gerne eine Nachricht schicken oder
          auch einfach per Mail an&nbsp;
          <a href="mailto:andrelebioda@hotmail.de">andrelebioda@hotmail.de</a>.
          Ich werde Eure Nachricht schnellstmöglich beantworten.
        </p>
        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-wrapper">
              <div className="form-field">
                <label htmlFor="name">
                  <p>Name</p>
                  <input
                    id="name"
                    placeholder="Name eingeben..."
                    {...register("name", { required: true })}
                  />
                  <span className="error">{errors.name?.message}</span>
                </label>
              </div>
              <div className="form-field">
                <label htmlFor="email">
                  <p>Email</p>
                  <input
                    id="email"
                    placeholder="Email eingeben..."
                    {...register("email", { required: true })}
                  />
                  <span className="error">{errors.email?.message}</span>
                </label>
              </div>
              <div className="form-field">
                <label htmlFor="message">
                  <p>Nachricht</p>
                  <textarea
                    id="message"
                    placeholder="Nachricht eingeben..."
                    {...register("message", { required: true })}
                  ></textarea>
                  <span className="error">{errors.message?.message}</span>
                </label>
              </div>
            </div>
            <button type="submit">
              <span className="circle">
                <span className="arrow"></span>
              </span>
              Abschicken
            </button>
          </form>
          <div className={`form-confirm ${confirm ? "show" : ""}`}>
            <p>Deine Nachricht wurde erfolgreich verschickt.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
