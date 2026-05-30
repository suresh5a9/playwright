import { Locator, Page } from "@playwright/test";

export class register{

    readonly page:Page;
    readonly registerButton:Locator;
    readonly genderRadioButton:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly Email:Locator;
    readonly companyName:Locator;
    readonly password:Locator; 
    readonly confirmPassword:Locator;
    
    constructor(page:Page)
    {
        this.page=page
   this.registerButton=page.getByRole('button',{name:'Register',exact:true})
   this.genderRadioButton=page.getByRole('radio', { name: 'Male', exact: true })
   this.firstName=page.getByLabel('First name:')
   this.lastName=page.getByLabel('Last name:')
   this.Email=page.getByLabel('Email:')
   this.companyName=page.getByLabel('Company name:')
   this.password=page.getByLabel('Password:',{exact:true})
   this.confirmPassword=page.getByLabel('Confirm password:',{exact:true})
    }

async openapp(url:string)
{

    await this.page.goto(url)
}

  async registration(firstname:string , lastName:string, emai:string,company:string,password:string)
  {
await this.registerButton.click()
await this.genderRadioButton.click()
await this.firstName.fill(firstname)
await this.lastName.fill(lastName)
await this.Email.fill(emai)
await this.companyName.fill(company)
await this.password.fill(password)
await this.confirmPassword.fill(password)
  }


}