import {Locator, Page } from "@playwright/test";

export class LoginPage{

readonly page:Page;
readonly userName:Locator;
readonly password:Locator;
readonly loginButton:Locator;


constructor(page:Page){
this.page=page;
this.password=page.locator('');
this.userName=page.locator('')
this.loginButton=page.locator('');
this.userName=page.getByLabel('');
}


}