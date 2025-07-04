
import puppeteer from 'puppeteer-core';

export async function obtenerTipoCambioBNA() {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=2ScTV0jW5QHB4SDcfd8600de316404eba7c3a9f910d795b62`,
  });

  const page = await browser.newPage();
  await page.goto('https://www.bna.com.ar/Personas');
  await page.waitForSelector('.table');

  const datos = await page.evaluate(() => {
    const valores = document.querySelectorAll('.table tbody tr td');
    const actual = parseFloat(valores[2].innerText.replace(',', '.'));
    const anterior = parseFloat(valores[6].innerText.replace(',', '.'));
    return {
      tcSpotActual: actual,
      tcSpotAnterior: anterior
    };
  });

  await browser.close();
  return datos;
}
