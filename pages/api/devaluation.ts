
import type { NextApiRequest, NextApiResponse } from 'next';
import { calcularTasaDevaluacion } from '../../utils/calculate';
import { obtenerDatos } from '../../lib/scrape';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { tcSpotActual, tcSpotAnterior, tcFuturo, dias } = await obtenerDatos();

        const tasaActual = calcularTasaDevaluacion(tcSpotActual, tcFuturo, dias);
        const tasaAnterior = calcularTasaDevaluacion(tcSpotAnterior, tcFuturo, dias);

        res.status(200).json({
            fecha: new Date().toISOString().split('T')[0],
            tcSpotActual,
            tcSpotAnterior,
            tcFuturo,
            tasaActual: (tasaActual * 100).toFixed(2) + '%',
            tasaAnterior: (tasaAnterior * 100).toFixed(2) + '%'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo datos' });
    }
}
