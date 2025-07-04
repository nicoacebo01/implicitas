
import { obtenerTipoCambioBNA } from './scrapeBNA';
import { obtenerCotizacionFuturoRofex } from './scrapeRofex';

export async function obtenerDatos() {
  const { tcSpotActual, tcSpotAnterior } = await obtenerTipoCambioBNA();
  const { tcFuturo } = await obtenerCotizacionFuturoRofex();
  const dias = 30; // Ejemplo fijo
  return { tcSpotActual, tcSpotAnterior, tcFuturo, dias };
}
