export class LoginPage {
  constructor(page) {
    this.page = page;

    
    this.bankManagerLoginBtn = page.getByRole('button', { name: 'Bank Manager Login'});
    this.CustomerLoginBtn= page.getByRole('button', { name: 'Customer Login' })
    this.LoginBtn = page.getByRole('button', { name: 'Login' })

  }

async goto() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  }  

  async clickBankManagerLogin() {
    await this.bankManagerLoginBtn.click(); 
  }

  async clickCustomerLogin() {
    await this.CustomerLoginBtn.click();
  }

  async SelectCustomer(customerName) {
    await this.page.locator('#userSelect').selectOption({ label: customerName });
    await this.LoginBtn.click();
  }

  async HomePage() {
    await this.page.getByRole('button', { name: 'Home' }).click();
  }
}
