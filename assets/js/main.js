const form = document.querySelector("#contactForm");
const formFields = document.querySelectorAll("[required]");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const answerList = {
        nome: e.target.elements["nome"].value,
        mensagem: e.target.elements["mensagem"].value
    };

    let formIsValid = true;
    formFields.forEach((field) => {
        if (!field.checkValidity()) {
            checkField(field);
            formIsValid = false;
        }
    });

    if (!formIsValid) return;
    alert("Formulário enviado com sucesso!");
    form.reset();

    const params = new URLSearchParams();
    params.append("subject", "Mensagem de contato");
    params.append(
        "body",
        `Nome: ${answerList.nome}\nMensagem: ${answerList.mensagem}`
    );

    const mailtoLink = `mailto:contato@alurageek.com?${params
        .toString()
        .replaceAll("+", " ")}`;
});

function checkField(field) {
    const errorType = field.validity;
    const fieldName = field.name;
    const errorMessages = erroMensagem[fieldName] || {};

    const errorElement = document.querySelector(`#erro-${fieldName}`);
    const fieldset = field.closest('fieldset');
    
    errorElement.textContent = ""; 
    fieldset.style.marginBottom = "0"; 

    for (let error in errorType) {
        if (errorType[error]) {
            const message = errorMessages[error];
            errorElement.textContent = message; 
            fieldset.style.marginBottom = "1rem";
            return;
        }
    }
}

const erroMensagem = {
    nome: {
        valueMissing: "*Campo obrigatório.",
        patternMismatch: "*Campo inválido ou vazio.",
        tooShort: "*Campo inválido ou vazio.",
    },
    mensagem: {
        valueMissing: "*Campo obrigatório.",
        tooShort: "*Campo inválido ou vazio.",
    }
};

formFields.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
    field.addEventListener("invalid", (event) => {
        event.preventDefault(); 
        checkField(event.target); 
    });
});
