
var informacoes =localStorage.getItem("informacoes")!==null?JSON.parse(localStorage.getItem("informacoes")): []
var id=""
if (informacoes.length==0){
  id=1
}else {
  informacoes.forEach(dados=>{
    id=dados.id+1
  })
}
function salvar(){
  var informacao = {}
  informacao.id=id
  
    informacao.nome = document.getElementById("um").value
    informacao.tipoAbelha = document.getElementById("dois").value
    informacao.datacolheita = document.getElementById("tres").value
    informacao.colmeiaefavos = document.getElementById("quatro").value
  informacoes.push(informacao)
   
   
   id++
   salvarLocalstorage()

}
function exibirinformacoes(){
  document.getElementById("informacoes").innerHTML=""
  informacoes.forEach(dados => {
  var divdados = document.createElement("div")
  divdados.classList.add("dados")

  var html=`<h2>Nome do apiario:${dados.nome}</h2>
        Tipo de abelha:${dados.tipoAbelha}<br>
        Data da colheita:${dados.datacolheita}<br>
        Colmeia e quantidade de favos:${dados.colmeiaefavos}
        <button onClick="excluirdados(${dados.id})">Excluir </button>`
  divdados.innerHTML= html
  document.getElementById("informacoes").appendChild(divdados)
});
  
 



}
function salvarLocalstorage(){

localStorage.setItem("informacoes",JSON.stringify(informacoes))


}
function excluirdados(id){
  
  for(let i=0;i<informacoes.length;i++){
    if(informacoes[i].id==id){
      informacoes.splice(i,1)
    }
  }
  
 salvarLocalstorage()
 exibirinformacoes()
}
///   \\\    ///
///    \\\  ///
///     \\\///

