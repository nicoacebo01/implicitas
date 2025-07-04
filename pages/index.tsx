
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/devaluation')
            .then(res => res.json())
            .then(setData);
    }, []);

    if (!data) return <p>Cargando datos...</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Tasa Implícita de Devaluación</h1>
            <p><strong>Fecha:</strong> {data.fecha}</p>
            <p><strong>TC Spot Actual:</strong> {data.tcSpotActual}</p>
            <p><strong>TC Spot Anterior:</strong> {data.tcSpotAnterior}</p>
            <p><strong>TC Futuro:</strong> {data.tcFuturo}</p>
            <p><strong>Tasa Actual:</strong> {data.tasaActual}</p>
            <p><strong>Tasa Día Anterior:</strong> {data.tasaAnterior}</p>
        </div>
    );
}
