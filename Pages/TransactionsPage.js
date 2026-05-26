export class TransactionsPage {
  constructor(page) {
    this.page = page;

    this.Deposit = page.getByRole('button', { name: 'Deposit' })
   // this.AmountDepositInput = page.getByRole('textbox', { name: 'amount' })
   this.AmountDepositInput = page.getByPlaceholder('amount');
    this.DepositClkBtn = page.getByRole('form').getByRole('button', { name: 'Deposit' })
    this.WithdrawBtn = page.getByText('Withdrawl', { exact: true })
    this.WithdrawClk = page.getByRole('button', { name: 'Withdraw', exact: true })
    this.AmountWithdraw = page.getByPlaceholder('amount')
    this.TransactionDetailsBtn = page.getByRole('button', { name: 'Transactions' })
    
   //this.CurrentBalance = page.locator('div.borderM.box.padT20.ng-scope').locator('div').nth(1)

  }

  async DepositAmount(amount) {
    await this.Deposit.click();
    await this.AmountDepositInput.click();
    await this.AmountDepositInput.fill(amount);
    await this.DepositClkBtn.click();
  }

  async CurrentBalanceCurrentBalance() {
  return (await this.page
    .locator('text=Balance :')
    .locator('strong')
    .textContent())?.trim();
}

async WithdrawAmount(amount) {
  await this.WithdrawBtn.click();
  await this.AmountWithdraw.click();
  await this.page.waitForTimeout(1000);
  await this.AmountWithdraw.fill(amount);
  await this.WithdrawClk.click();

}

async Transactions()
{
await this.TransactionDetailsBtn.click();
  const rows = this.page.locator('table tbody tr');
await rows.first().waitFor({ state: 'visible' });
const count = await rows.count();
console.log('Row count:', count);
 let totalCredit = 0;
  let totalDebit = 0;
 const transactionData = [];

for (let i = 0; i < count; i++) {
  //const rowText = await rows.nth(i).locator('td').allTextContents();
   //console.log(rowText);
 const cells = await rows.nth(i).locator('td');
 const Date = await cells.nth(0).textContent();
 const AmountTxt = await cells.nth(1).textContent();
 const amount = Number(AmountTxt);
 const Type = await cells.nth(2).textContent();

 transactionData.push({ Date, Amount: amount, Type });

    if (Type === 'Credit') {
      totalCredit += amount;
    } else if (Type === 'Debit') {
      totalDebit += amount;
    }
  }

  const NetBalance = totalCredit - totalDebit;

  console.log('===== TRANSACTION TABLE =====');
  console.table(transactionData);

  console.log('===== SUMMARY =====');
  console.log(`Total Credit: ${totalCredit}`);
  console.log(`Total Debit: ${totalDebit}`);
  console.log(`Net Balance is: ${NetBalance}`);

}




}
