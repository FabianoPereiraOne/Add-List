var conteiner = document.getElementById("conteiner")
var status = false
if(status == "false"){
    var select = document.createElement("select")
    var corpo = document.getElementById("corpo") 
    select.setAttribute("class","list")
    console.log("[info] Status atualizado para true.")
}



document.getElementById("button").addEventListener("click",function() {
    if(status == "false" && conteiner.value.length != 0){
        corpo.appendChild(select)
        status = true
    }   
    
    if(conteiner.value.length == 0){
            alert("Antes de adicionar digite algo!")
    }else{ 
            var grupo = []
            grupo.push(conteiner.value)
            var opt = document.createElement("option")
            opt.text = conteiner.value
            select.appendChild(opt)
    }
})
var rodape = document.getElementById("rodape")
var buttom = document.createElement("button")
buttom.setAttribute("class","buttonOver")
buttom.innerHTML = "New"
rodape.appendChild(buttom)
buttom.addEventListener("click",function () {
    window.location.reload()
})