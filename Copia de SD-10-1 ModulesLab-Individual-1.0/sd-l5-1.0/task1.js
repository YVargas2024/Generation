
export function costCalculator(transaccion) {
    const tarifa = 3;           // Tarifa fija de $3
    const interes = 0.01;       // Interés del 1%
    const total = transaccion + tarifa + (transaccion * interes);
    return total;
}
