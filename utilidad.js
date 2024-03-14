const nombreInput = document.querySelector('#inputNombre');
const nombreInput2 = document.querySelector('#inputNombre2');
const nombreBoton = document.querySelector('#botonNombre');
const quoteInput = document.querySelector('#inputQuotes');
const quoteBoton = document.querySelector('#botonQuotes');
const filtrosBoton = document.querySelector('#botonFiltrosQuitar');
const contenedorSimpson = document.querySelector('#contenedor-simpsons');
const loadBoton = document.querySelector('#botonCargarMas');

async function ponerPersonajes(numeroo) {
    try {
        const apiInfo = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${numeroo}`);
        const datos = await apiInfo.json(); // Llama a la función json() para obtener los datos JSON

        datos.forEach(elementInfo => {
            const { quote, character, image } = elementInfo;
            const div = document.createElement('div');
            div.classList.add('contenedor-personajes');
            div.innerHTML = `
                <img src="${image}" alt="${character}"> 
                <h2>${character}</h2> 
                <p>${quote}</p>`;
            contenedorSimpson.appendChild(div);
        });
    } catch (error) {
        console.error('Error con la obtencion de datos: ', error);
    }
}
async function ponerPersonajesNombre(nombreperso) {
    try {
        const apiInfo = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${nombreperso}&count=10`);
        const datos = await apiInfo.json(); // Llama a la función json() para obtener los datos JSON

        datos.forEach(elementInfo => {
            const { quote, character, image } = elementInfo;
            const div = document.createElement('div');
            div.classList.add('contenedor-personajes');
            div.innerHTML = `
                <img src="${image}" alt="${character}"> 
                <h2>${character}</h2> 
                <p>${quote}</p>`;
            contenedorSimpson.appendChild(div);
        });
    } catch (error) {
        console.error('Error con la obtencion de datos: ', error);
    }
}
async function ponerPersonajesNombreNum(nombreperso,numeroo) {
    try {
        const apiInfo = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${nombreperso}&count=${numeroo}`);
        const datos = await apiInfo.json(); // Llama a la función json() para obtener los datos JSON

        datos.forEach(elementInfo => {
            const { quote, character, image } = elementInfo;
            const div = document.createElement('div');
            div.classList.add('contenedor-personajes');
            div.innerHTML = `
                <img src="${image}" alt="${character}"> 
                <h2>${character}</h2> 
                <p>${quote}</p>`;
            contenedorSimpson.appendChild(div);
        });
    } catch (error) {
        console.error('Error con la obtencion de datos: ', error);
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ponerPersonajes(10)
});

nombreBoton.addEventListener('click', async function() {
    contenedorSimpson.innerHTML = '';
    const nombreperso = nombreInput.value; 
    ponerPersonajesNombre(nombreperso); 
    nombreInput.value="";
});
quoteBoton.addEventListener('click', async function() {
    contenedorSimpson.innerHTML = '';
    const numeroquotee= quoteInput.value;
    const nombreperso = nombreInput2.value;
    ponerPersonajesNombreNum(nombreperso,numeroquotee)
    quoteInput.value="";
    nombreInput2.value="";
});

loadBoton.addEventListener('click',function(){
    ponerPersonajes(10);
})
filtrosBoton.addEventListener('click',function(){
    contenedorSimpson.innerHTML = '';
    ponerPersonajes(10);
})