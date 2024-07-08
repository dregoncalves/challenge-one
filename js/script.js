document.querySelector('.btn-criptografar').addEventListener('click', () => {
    const inputText = document.getElementById('text-area').value;
    const result = inputText.trim() === "" ? "" : encriptar(inputText);
    mostrarResultado(result, inputText);
});

document.querySelector('.btn-descriptografar').addEventListener('click', () => {
    const inputText = document.getElementById('text-area').value;
    const result = inputText.trim() === "" ? "" : desencriptar(inputText);
    mostrarResultado(result, inputText);
});

// Função para verificar se a string contém apenas letras minúsculas e sem acento
function contemApenasMinusculasSemAcento(text) {
    return /^[a-z\s]*$/.test(text);
}

// Função para criptografar o texto
function encriptar(text) {
    if (!contemApenasMinusculasSemAcento(text)) {
        return "Erro: O texto deve conter apenas letras minúsculas e sem acentos.";
    }

    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function desencriptar(text) {
    if (!contemApenasMinusculasSemAcento(text)) {
        return "Erro: O texto deve conter apenas letras minúsculas e sem acentos.";
    }

    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Função para mostrar o resultado na tela
function mostrarResultado(result, inputText) {
    const resultContainer = document.querySelector('.result-container');

    if (inputText.trim() === "") {
        resultContainer.innerHTML = `
            <img src="img/result-img.svg" alt="Garoto usando uma lupa">
            <div class="no-result-text">
                <h2>Nenhuma mensagem encontrada</h2>
                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
            </div>`;
    } else if (result.startsWith("Erro")) {
        resultContainer.innerHTML = `
            <div class="result-text">
                <p>${result}</p>
            </div>`;
    } else {
        resultContainer.innerHTML = `
            <div class="result-text">
                <p>${result}</p>
                <button class="btn-copiar">Copiar</button>
            </div>`;
        
        const copyButton = document.querySelector('.btn-copiar');
        copyButton.addEventListener('click', () => {
            copiarTexto(result);
            alert('Texto copiado!');
        });
    }
}

// Função para copiar o texto para a área de transferência
function copiarTexto(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}