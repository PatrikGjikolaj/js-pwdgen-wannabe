alert("Generiamo insieme una password con i tuoi dati?");

let annocorrente = '2023';

let nome = prompt("Qual'è il tuo nome?");

let cognome = prompt("Qual'è il tuo cognome?");

let colore = prompt("Qual'è il tuo colore preferito?");

document.write(`La tua nuova password è ${nome + cognome +colore + annocorrente}`);