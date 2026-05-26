export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.AddCustomerBtn =page.getByRole('button', { name: 'Add Customer' })
    this.FirstNameInput = page.getByRole('textbox', { name: 'First Name' })
    this.LastNameInput = page.getByRole('textbox', { name: 'Last Name' })
    this.PostCodeInput = page.getByRole('textbox', { name: 'Post Code' })
    this.AddCustomerclkBtn =page.locator('form').getByRole('button', { name: 'Add Customer' });
   // this.AddCustomerclkBtn = page.locator('button.btn.btn-default:visible')

    this.OpenAccountBtn= page.getByRole('button', { name: 'Open Account' })
    this.AddAccountclkBtn = page.getByRole('button', { name: 'Process' })
    this.CustomerDetailsBtn = page.getByRole('button', { name: 'Customers' })
  }


  async clickAddCustomer() {
    await this.AddCustomerBtn.click();
  }

  async AddCustomerDetails(FirstName, LastName, PostCode) {
          
    await this.FirstNameInput.fill(FirstName);
    await this.LastNameInput.fill(LastName);
    await this.PostCodeInput.fill(PostCode);
    this.page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await this.AddCustomerclkBtn.click();
};

   
      


  

  async clickOpenAccount() {
    await this.OpenAccountBtn.click();
  }


    async openAccount(customerName, currency) {

  await this.page.locator('#userSelect').selectOption({ label: customerName });
  await this.page.locator('#currency').selectOption(currency);
   this.page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await this.AddAccountclkBtn.click();

}

  

  async clickCustomerDetails() {
    await this.CustomerDetailsBtn.click();
  }
  
  async CustomerDetails() {
    const rows = this.page.locator('table tbody tr');
    await rows.first().waitFor(); // waits until at least 1 row exists
    console.log('Row count:', await rows.count());

    for(let i=0; i< await rows.count(); i++){
    const values = await rows.nth(i).locator('td').allTextContents();
    if(values.includes('Sharan') && values.includes('kamath') && values.includes('57004'))
        {
    console.log(values);
    break;
}
}
  }
}
