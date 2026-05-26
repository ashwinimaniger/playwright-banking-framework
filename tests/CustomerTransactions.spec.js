import{test, expect} from '@playwright/test';
import { LoginPage } from   '../Pages/LoginPage.js';
import { TransactionsPage } from '../Pages/TransactionsPage.js';  
import { generateRandomNumber } from '../Pages/Utility.js';   

test('CustomerLogin', async ({page})=>{
    
   const loginPage = new LoginPage(page);
   await loginPage.goto();
   await loginPage.clickCustomerLogin();
   await loginPage.SelectCustomer('Harry Potter');
   await page.waitForTimeout(1000);


//const DepositAmt = generateRandomNumber(4);
   const transactionsPage = new TransactionsPage(page);
   await transactionsPage.DepositAmount(String(generateRandomNumber(4)));
   await page.waitForTimeout(1000);

   // Get the success message
//   const message= await page.getByText('Deposit Successful', { exact: true }).allTextContents();
  // console.log(message);
   //await expect(page.getByText('Deposit Successful')).toBeVisible();

   //Amount withdraw
   await transactionsPage.WithdrawAmount(String(generateRandomNumber(3)));
  // const Withdrawmsg =await  page.getByText('Transaction successful').allTextContents();
  // console.log(Withdrawmsg);
   // await expect(page.getByText('Transaction successful')).toBeVisible();


 

   //Transaction 2
  
   await transactionsPage.DepositAmount(String(generateRandomNumber(4)));
   await page.waitForTimeout(1000);
   await transactionsPage.WithdrawAmount(String(generateRandomNumber(3)));
   await page.waitForTimeout(1000);

   
   //Trasactions Deatils
 await transactionsPage.Transactions();


 

});
