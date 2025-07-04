
export function calcularTasaDevaluacion(tcSpot: number, tcFuturo: number, dias: number): number {
    return Math.pow(tcFuturo / tcSpot, 365 / dias) - 1;
}
