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
    // pattern:
    //   "/([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/",
    title:
      "Пароль может состоять только из цифр и латинских букв в верхнем и нижнем регистре",
    required: true,
  },
};

export default inputAttr;
