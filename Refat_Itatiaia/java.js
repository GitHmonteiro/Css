const promise = new Promise(function (resolve, reject)
{
    let condicao = true;

    if (condicao) {
        const result = { nome: "Hygor", matricula: 12456 }
    }
    else 
    {
        reject (Error("A promessa não foi cumprida"))
    }
})