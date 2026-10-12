import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ handleRegistration }) {
  const [data, setData] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration(data);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Inscrever-se</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="E-mail"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Senha"
          value={data.password}
          onChange={handleChange}
          required
        />
        <button className="auth__button" type="submit">
          Inscrever-se
        </button>
      </form>
      <Link to="/signin" className="auth__link">
        Já é um membro? Faça o login aqui!
      </Link>
    </div>
  );
}