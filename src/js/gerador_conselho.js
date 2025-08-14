async function gerarConselho(){
    try{
        const url  = "https://api.adviceslip.com/advice"
        const resposta = await fetch(url)
        return await resposta.json()
    }catch(error){
        console.log("Error! Não foi possivel encontrar um conselho")
    }

}

async function conselho() {
    const json = await gerarConselho()
    texto = json.slip.advice
    id = json.slip.id
    document.getElementById("titulo").innerText = `Advice #${id}`
    document.getElementById("conselho").innerText = texto
}

document
    .getElementById("gerador")
    .addEventListener("click", ()=> {
        conselho()
    })


    