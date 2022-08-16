import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(
    { resolver: yupResolver(schema) },
    { defaultValues: { name: "", email: "", message: "" } }
  );

  const [createFormEntry, { loading, error }] = useMutation(Create_Form_Entry);

  const onSubmit = (data) => {
    createFormEntry({
      variables: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
    reset();
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
    }, 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Kontakt</h2>
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

const Create_Form_Entry = gql`
  mutation createContactFormEntry(
    $name: String!
    $email: String!
    $message: String!
  ) {
    createContactForm(data: { name: $name, email: $email, message: $message }) {
      data {
        id
        attributes {
          name
          email
          message
        }
      }
    }
  }
`;
