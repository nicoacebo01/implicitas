
import puppeteer from 'puppeteer';

export async function obtenerTipoCambioBNA() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://www.bna.com.ar/Personas');

  await page.waitForSelector('.table'); // Sujeto a cambios según estructura del sitio

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
