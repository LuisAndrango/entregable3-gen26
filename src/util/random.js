//Función que me retorna una página aleatoria del 1 al 126
export const getRandomDimension = () => {
    return Math.floor(Math.random()*126) + 1
    }