// Enviar mensagem
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    e.preventDefault();

    const answerList = {
        nome: e.target.elements["nome"].value,
        message: e.target.elements["mensagem"].value,
    };

    const params = new URLSearchParams();
    params.append("subject", answerList.assunto);
    params.append(
        "body",
        `      Nome: ${answerList.nome}
      Mensagem: ${answerList.mensagem}`
    );

    const mailtoLink = `mirraely:contato@alurageek.com?${params
        .toString()
        .replaceAll("+", " ")}`;

    window.open(mailtoLink, "_blank");
});

// validação
const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
    field.addEventListener("invalid", (event) => event.preventDefault());
});

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
];

const erroMensagem = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
    },

    mensagem: {
        valueMissing: "O campo não pode estar vazio.",
        tooShort: "O campo não tem caracteres suficientes.",
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido.",
    },
}