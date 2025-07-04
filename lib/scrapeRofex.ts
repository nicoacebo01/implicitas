
import puppeteer from 'puppeteer-core';

export async function obtenerCotizacionFuturoRofex() {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=2ScTV0jW5QHB4SDcfd8600de316404eba7c3a9f910d795b62`,
  });

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
