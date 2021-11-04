const inputAttr = {
  name: {
    name: "username",
    placeholder: "Имя",
    // pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
    required: true,
  },
  email: {
    name: "email",
    placeholder: "Логин",
    // pattern: "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*",
    title: "Введите email в формате user@example.com, в качестве логина",
    required: true,
  },
  password: {
    name: "password",
    placeholder: "Пароль",
    type: "password",
    // pattern:
    // "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+",
    //   title:
    // "Введите минимум 8 символов, обязательно должны присутствовать цифры и буквы разного регистра",
    required: true,
  },
};

export default inputAttr;
