import{test, expect} from '@playwright/test';
import { LoginPage } from   '../Pages/LoginPage.js';       
import{AddCustomerPage} from '../Pages/AddCustomerPage.js';

test('AddCustomer', async ({page})=>{
   const loginPage = new LoginPage(page);
   await loginPage.goto();
   await loginPage.clickBankManagerLogin();
   const addCustomerPage = new AddCustomerPage(page);
   await addCustomerPage.clickAddCustomer();
   await addCustomerPage.AddCustomerDetails('Sharan', 'kamath', '57004');
 
   
 //Add Account number
await addCustomerPage.clickOpenAccount();
await addCustomerPage.openAccount('Sharan kamath', 'Dollar');


//Assertion to check the details of the customer added

await addCustomerPage.clickCustomerDetails();
await addCustomerPage.CustomerDetails();

//Customer Login
await loginPage.HomePage();
    await loginPage.clickCustomerLogin();
   await loginPage.SelectCustomer('Sharan kamath');
   await page.waitForTimeout(3000);

});


