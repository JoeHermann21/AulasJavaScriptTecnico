var numCerto = 0, numPalpites = 0;

function escreverMensagem(idElemento, mensagem, maisMensagens) {
	var atualizarElemento = document.getElementById(idElemento);
	if (maisMensagens) {
		atualizarElemento.innerHTML = atualizarElemento.innerHTML + mensagem;
	} else {
		atualizarElemento.innerHTML = mensagem;
	}
};

function novoJogo() {
	numCerto = Math.floor(Math.random() * 100) + 1;
	numPalpites = 0;
	escreverMensagem('listaHistorico', '');
}

function intervaloNum(palpite) {
	return (palpite > 0 && palpite < 101);
}

function palpiteUsuario() {
	var palpiteUsuario = document.getElementById('palpite').value;
	var areaStatus = document.getElementById('areaStatus');
	var listaHistorico = document.getElementById('listaHistorico');
	if (palpiteUsuario.length == 0 || ! intervaloNum(palpiteUsuario)) {
		escreverMensagem('areaStatus', '<p>Por favor, entre com um número válido de 1 a 100. Ao digitar o número correto, clique no botão "ADIVINHAR".</p>');
	} else if (palpiteUsuario.indexOf('.') != -1) {
		escreverMensagem('areaStatus', '<p>Por favor, entre com um número inteiro de 1 a 100 e clique no botão "ADIVINHAR".</p>');
	} else {
		numPalpites++;
		if (palpiteUsuario == numCerto) {
			escreverMensagem('areaStatus', '<p>Parabéns, você acertou!!! O número correto era ' + numCerto + '<br> Quantidade de tentativas: ' 
			+ numPalpites + '<br> Vamos tentar novamente?');
			novoJogo();
		} else if (palpiteUsuario < numCerto) {
			escreverMensagem('areaStatus', '<p>Tente novamente! O número é mais alto que ' + palpiteUsuario);
			escreverMensagem('listaHistorico', '<li>' + palpiteUsuario +' (muito baixo)</li>', true);
		} else {
			escreverMensagem('areaStatus', '<p>Tente novamente! O número é mais baixo que ' + palpiteUsuario);
			escreverMensagem('listaHistorico', '<li>' + palpiteUsuario + ' (muito alto)</li>', true);
		}
	}
	document.getElementById('palpite').value = '';	
}

window.onload = function() {
	novoJogo();
	document.getElementById('buttonArea').addEventListener('click', palpiteUsuario);
};