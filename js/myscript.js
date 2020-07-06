var nome = prompt ("qual è il tuo nome?")
var cognome = prompt ("qual è il tuo cognome?")
var colore = prompt ("qual è il tuo colore preferito?")

var password = nome + cognome + colore + '19'

console.log (password)

document.getElementById('risultato').innerHTML=password;
