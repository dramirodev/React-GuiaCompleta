export const obtenerDiferenciaYear = (year) =>
    new Date().getFullYear() - parseInt(year);

export const calcularResultadoSegunMarca = (marca, resultado) => {
    switch (marca) {
        case 'americano':
            return resultado * 1.15;
        case 'asiatico':
            return resultado * 1.03;
        case 'europeo':
            return resultado * 1.3;
        default:
            return resultado;
    }
};

export const calcularResultadoSegunPlan = (resultado, plan) => {
    switch (plan) {
        case 'completo':
            return resultado * 1.5;
        case 'basico':
            return resultado * 1.2;
        default:
            return resultado;
    }
};

export const capitalizeString = (word) =>
    word.trim().replace(/^\w/, (c) => c.toUpperCase());
