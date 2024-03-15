import { Page } from '@playwright/test'
import { faker } from '@faker-js/faker';

export class RegisterPage {
  readonly page: Page

  constructor(page:Page){
    this.page = page

  }

  async go(){
    await this.page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
  }

  async create (){
    await this.page.fill('#FirstName', faker.person.firstName())
    await this.page.fill('#LastName', faker.internet.userName())
    await this.page.fill('#Email', faker.internet.email())
    await this.page.fill('#Password', 'Teste123')
    await this.page.fill('#ConfirmPassword', 'Teste123')
    await this.page.click('button >> text=Register')
  }

async valida (){
  await this.page.getByText('First name is required.')
  await this.page.getByText('Last name is required.')
  await this.page.getByText('Email is required.')
  }
}