import {Locator, Page, expect } from "@playwright/test";

export class Homepage{

readonly welcomemessage:Locator;
readonly menu:Locator

constructor(page:Page,linkText:string){

this.welcomemessage=page.getByText('Swag Labs')
this.menu=page.getByAltText(linkText)

}

async homePage()
{
expect (this.welcomemessage).toHaveText('Swag Labs')

console.log("waiting")

}


}