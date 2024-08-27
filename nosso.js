function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("ERRO, voce esta digitando um valor invalido")
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade <= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'bebemenino.jpg' )

            } else if(idade < 12) {
                //crianca
                img.setAttribute('image', 'criancamenino.jpg' )
            
            } else if (idade < 21) {
                //jovem
            } else if (idade < 55) {
                //adulto
            } else {
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if(idade <= 0 && idade <10){
                //crianca
            } else if(idade < 21) {
                //jovem
            } else if(idade < 55) {
                //adulto
            } else {
                //idoso
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade}`
        res.appendChild(img)
    }

}