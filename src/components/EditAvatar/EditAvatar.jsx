export default function EditAvatar() {
  return (
    <form className="popup__form" id="avatar-form" noValidate>
      <input
        className="popup__input popup__input_type_avatar"
        name="avatar"
        placeholder="https://somewebsite.com/someimage.jpg"
        required
        type="url"
      />
      <span className="popup__input-error avatar-input-error"></span>
      <button className="button popup__button" type="submit" disabled>
        Salvar
      </button>
    </form>
  );
}