export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form" noValidate>
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nome"
        type="text"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__input-error name-input-error"></span>
      <input
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Sobre mim"
        type="text"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__input-error description-input-error"></span>
      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}