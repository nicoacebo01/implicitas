
import puppeteer from 'puppeteer';

export async function obtenerCotizacionFuturoRofex() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://www.matbarofex.com.ar');

  await page.waitForSelector('table');

  const datos = await page.evaluate(() => {
    const filas = Array.from(document.querySelectorAll('table tbody tr'));
    const fila = filas.find(f => f.innerText.includes('31/07/2025')) || filas[0];
    const columnas = fila.querySelectorAll('td');
    return {
      fechaFuturo: columnas[0].innerText,
      tcFuturo: parseFloat(columnas[1].innerText.replace(',', '.'))
    };
  });

  await browser.close();
  return datos;
}
