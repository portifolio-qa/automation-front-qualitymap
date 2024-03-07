import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('TC1-01 - Validar cadastro na aplicação com sucesso', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

  const txtMsg = 'Your registration completed'
  await page.fill('#FirstName', faker.person.firstName())
  await page.fill('#LastName', faker.internet.userName())
  await page.fill('#Email', faker.internet.email())
  await page.fill('#Password', 'Teste123')
  await page.fill('#ConfirmPassword', 'Teste123')
  await page.click('button >> text=Register')
  
  const msg = page.locator('.result')
  await expect(msg).toContainText(txtMsg)

})

test('TC2-01 - Validar campos obrigatórios p/ cadastro', async ({ page }) => {
  
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
  await page.click('button >> text=Register')  

  await expect(page.getByTestId('FirstName-error'), 'Password is required.').toBeVisible;
  await expect(page.getByTestId('LastName-error'), 'Last name is required.').toBeVisible;
  await expect(page.getByTestId('Email-error'), 'Email is required.').toBeVisible;
  await expect(page.getByTestId('Password-error'), 'Password is required.').toBeVisible;
  });

