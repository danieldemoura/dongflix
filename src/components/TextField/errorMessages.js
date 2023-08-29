export const errorTypes = [
    "valueMissing", 
    "typeMismatch", 
    "tooShort"
];

export const errorMessages = {
   name: {
      valueMissing: "Esse campo é de preenchimento obrigatório",
   },

   email: {
      typeMismatch: "O email digitado não é válido, verifique e tente de novo",
      valueMissing: "Esse campo é de preenchimento obrigatório",
   },

   password: {
      tooShort: "A senha deve ter no mínimo 4 caracteres",
      valueMissing: "Esse campo é de preenchimento obrigatório",
   },
};

