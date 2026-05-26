import{test, expect} from '@playwright/test';
import { LoginPage } from   '../Pages/LoginPage.js';

test('CustomerLogin', async ({page})=>{
   const loginPage = new LoginPage(page);
   await loginPage.goto();
   await loginPage.clickCustomerLogin();
   //await loginPage.SelectCustomer('Sharan kamath');
   await loginPage.SelectCustomer('Harry Potter');
   
});
