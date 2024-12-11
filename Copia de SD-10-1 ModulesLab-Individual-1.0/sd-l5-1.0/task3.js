export function ageCalculator(nacimientoAño, nacimientoMes, nacimientoDia) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimientoAño;
    const mes = hoy.getMonth() + 1;
    const dia = hoy.getDate();


    if (mes < nacimientoMes || (mes === nacimientoMes && dia < nacimientoDia)) {
    edad--;
    }

    return edad;
}

const edad = ageCalculator(2000, 12, 25);
console.log("Edad:", edad);