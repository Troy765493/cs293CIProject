function caesarCipher(str, shift, decode = false) {
    shift = decode ? (26 - shift) % 26 : shift; // Adjust shift for decoding
    return str.replace(/[a-z]/gi, function (char) {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - start + shift) % 26 + start);
    });
}

function encode() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    document.getElementById('outputText').value = caesarCipher(inputText, shift);
}

function decode() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    document.getElementById('outputText').value = caesarCipher(inputText, shift, true);
}
