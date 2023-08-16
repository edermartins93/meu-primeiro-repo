const temIngresso = true;
const censura = 16;
const idade = 16;
const estaComOsPais = false;

// tem ingresso E
// tem idade maior ou igual a censura Ou está com os pais

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada.");
}