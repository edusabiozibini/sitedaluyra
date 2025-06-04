var botaoEnviar = document.querySelector("#enviar") 

    botaoEnviar.addEventListener("click", function(event){ 
        event.preventDefault(); 
    //Captura o formulario 
    var form = document.querySelector("#frmContato"); 

    //Verifica se e usuário preencheu e-mail ou telefone 
    if(form.email.value=='' && form.telefone.value==''){

    return alert('Por favor, preencha un e-mail e/ou un telefone para que possa retornar o seu contato.')
    } else {
        //Monta o texto de retorno 
        msgRetorno=form.nomeCompleto.value + ", agradecemos o seu contato! <br><br>Vamos avaliar suas considerações e retornaremos "
        //Abre a div de retorno 
        document.getElementById('formRetorno').style.display="block"; 
        //Efetua o retorne 
        document.getElementById('textoRetorno').innerHTML=msgRetorno; 
        //Feche a formulário 
        document.getElementById('formulario').style.display="none"; 
        return; 
    }
});