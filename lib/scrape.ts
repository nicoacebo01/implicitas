
export async function obtenerDatos() {
    // Datos simulados para ejemplo real
    const tcSpotActual = 1231;      // TC vendedor divisa BNA actual
    const tcSpotAnterior = 1229;    // TC vendedor divisa BNA anterior
    const tcFuturo = 1450;          // Ejemplo de cotización a fin de mes ROFEX
    const dias = 30;                // Días restantes al vencimiento

    return { tcSpotActual, tcSpotAnterior, tcFuturo, dias };
}
