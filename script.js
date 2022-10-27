function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'um momem'
            if(idade >= 0 && idade< 10){
                //Criança
                img.setAttribute('src', 'Images/bebeM.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'Images/jovemM.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src','Images/adultoM.png')
            }else if (idade< 100){
                //idoso
                img.setAttribute('src', 'Images/idosoM.png')
            }else{
                //rept
                img.setAttribute('src', 'Images/ReptM.png')
            }


        }else if (fsex[1].checked){
            genero = 'uma mulher'
            if(idade >= 0 && idade< 10){
                //Criança
                img.setAttribute('src', 'Images/bebeF.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'Images/jovemF.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'Images/adultoF.png')
            }else if (idade< 100){
                //idoso
                img.setAttribute('src', 'Images/idosoF.png')
            }else{
                //rept
                img.setAttribute('src', 'Images/ReptF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}