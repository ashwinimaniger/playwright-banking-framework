import{test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';


test('ManagerLogin', async ({page})=>{
   const loginPage = new LoginPage(page);
   await loginPage.goto();
   await loginPage.clickBankManagerLogin();
});

