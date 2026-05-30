import {Locator, Page } from "@playwright/test";

export class LoginPage{

readonly page:Page;
readonly userName:Locator;
readonly password:Locator;
readonly loginButton:Locator;


constructor(page:Page){
this.page=page;
this.password=page.getByPlaceholder('Password');
this.userName=page.getByPlaceholder('Username')
this.loginButton=page.getByRole('button',{name:'Login',exact:true})
}

//2026Mar

async login(userName:string,password:string){

    await this.userName.fill(userName)
    await this.password.fill(password)
    await this.loginButton.click()
}


}