function validar()
{
let nome = document.getElementById("nome").value;
let sobrenome = document.getElementById("sobrenome").value;
let rg = document.getElementById("rg").value;
let cpf = document.getElementById("cpf").value;


let rua = document.getElementById("rua").value;
let numero = document.getElementById("numero").value;
let bairro = document.getElementById("bairro").value;
let cep = document.getElementById("cep").value;
let cidade = document.getElementById("cidade").value;
let celular = document.getElementById("celular").value;
let telefone = document.getElementById("telefone").value;

if(nome == "" ||  cpf == "" || rua == "" || numero == "" || bairro  == "" || cidade == "" || celular == "" ||  telefone == ""){
    alert("por favor preencha todos os campos obrigatorios  antes de enviar o formulário ");
}
else{
    alert("seu formulário foi enviado com sucesso , obrigado por se cadastrar em nosso site ");
}
}