import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ handleLogin }) {
  const [data, setData] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(data);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Entrar</h2>
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
          Entrar
        </button>
      </form>
      <Link to="/signup" className="auth__link">
        Ainda não é membro? Inscreva-se aqui!
      </Link>
    </div>
  );
}