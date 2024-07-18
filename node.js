function verificationDeNumero() {
    let num = Number(prompt('Digita aí qualquer número: '))
    if (num % 2 === 0) {
        alert('é par')
    }
    else {
        alert('é ímpar')
    }
}

verificationDeNumero()
