document.querySelector('.btn-criptografar').addEventListener('click', () => {
    const inputText = document.getElementById('text-area').value;
    const result = encriptar(inputText);
    mostrarResultado(result, inputText);
});

document.querySelector('.btn-descriptografar').addEventListener('click', () => {
    const inputText = document.getElementById('text-area').value;
    const result = desencriptar(inputText);
    mostrarResultado(result, inputText);
});

function encriptar(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function desencriptar(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function mostrarResultado(result) {
    const resultContainer = document.querySelector('.result-container');

    if (result === "") {
        resultContainer.innerHTML = `
            <img src="img/result-img.svg" alt="Garoto usando uma lupa">
            <div class="no-result-text">
                <h2>Nenhuma mensagem encontrada</h2>
                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
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

function copiarTexto(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
