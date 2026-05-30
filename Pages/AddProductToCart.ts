import { Locator, Page, expect } from "@playwright/test";
import { convertProcessSignalToExitCode } from "util";

export class AddproductToCart{

readonly productName:Locator;
readonly productPrice:Locator;
readonly addToCartButton:Locator;
readonly removeButton:Locator;
readonly shoppingCart:Locator;
constructor (page:Page, itemName:string){

this.productName=page.getByText(itemName)
this.productPrice=page.locator(`//div[text()='${itemName}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/div`)
this.addToCartButton=page.locator(`//div[text()='${itemName}']/ancestor::div[@class="inventory_item_label"]/following-sibling::div/button`)
this.removeButton=page.getByRole('button',{name:'Remove',exact:true})
this.shoppingCart=page.locator('[data-test="shopping-cart-link"]')
}

async addproductToCart()
{

await this.addToCartButton.click()
}

async verifyRemovebutton()
{
await expect(this.removeButton).toBeVisible()
}


async returnPrice():Promise<string|null>{

    
    return this.productPrice.textContent()
}

async clickOnShoppingcart(){

    await this.shoppingCart.click()
}

}