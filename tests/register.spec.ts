import { test, expect } from '@playwright/test';
import { RegisterPage } from './support/pages/register';


test('TC1-01 - Validar cadastro na aplicação com sucesso', async ({ page }) => {

  const registerPage: RegisterPage = new RegisterPage(page)
  registerPage.go()
  registerPage.create()

  const txtMsg = 'Your registration completed'
  const msg = page.locator('.result')
  await expect(msg).toContainText(txtMsg)
})

test('TC2-01 - Validar campos obrigatórios p/ cadastro', async ({ page }) => {
  
  const registerPage: RegisterPage = new RegisterPage(page)
  registerPage.go()
  registerPage.valida()
  await page.click('button >> text=Register')  

  });

