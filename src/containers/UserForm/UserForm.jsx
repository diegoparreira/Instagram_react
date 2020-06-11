import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const DEFAULT_IMAGE =
  "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png";
const DEFAULT_ALT = "No Avatar";
const POST_URL = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users";

const UserForm = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  // Handle with name
  const handleSetName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  // Handle avatar
  const handleSetAvatar = (event) => {
    const {value} = event.target ? event.target : DEFAULT_IMAGE;
    setAvatar(value);
  };

  // Handle username
  const handleSetUsername = (event) => {
    const {value} = event.target;
    setUsername(value);
  };

  // Handle Email
  const handleSetEmail = (event) => {
    const {value} = event.target;
    setEmail(value);
  };

  // Handle avatar
  const handleAddUser = (event) => {
    event.preventDefault();

    // Mount data to send (parse to string)
    const objectData = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    //Send user data to server via fetch
    fetch(POST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: objectData,
    }).then(() => setSubmit(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ? (
                  <img src={avatar} alt={name} />
                ) : (
                  <img src={DEFAULT_IMAGE} alt={DEFAULT_ALT} />
                )}
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Digite seu nome"
              onChange={(event) => handleSetName(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Escolha um username"
              onChange={(event) => handleSetUsername(event)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(event) => handleSetEmail(event)}
            />

            <label>
              Url da Imagem de Perfil(use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              value={avatar}
              placeholder="http://..."
              onChange={(event) => handleSetAvatar(event)}
            />
            <button type="button" onClick={(event) => handleAddUser(event)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
