const botoes = document.querySelectorAll("button");

                botoes.forEach(function (botao)) {
                    let curtiu=false;
                    botao.addEventListener('click', botaoClicado);
                    function botaoClicado() {
                        controle.log('fui clicado');
                        let texto = botao.querySelector('span');
                        if (curtiu === false){
                            texto.textContent++;
                            curtiu = true;

                        }else{
                            .textotextContent--;
                            curtiu = false;
                        }
                    }

                }

                const btnTemaescuro = document.querySelector(".btn-tema-escuro;

                   btnTemaEscuro.addEventListener('click, mudaaTema

                    function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}
                    }`