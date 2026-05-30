import { Locator, Page, expect } from "@playwright/test";

export class Shoppingcart{

readonly itemName:Locator;
readonly itemPrice:Locator;
readonly removeButton:Locator;
readonly continueShopping:Locator;
readonly Checkout:Locator;

constructor(page:Page)
{

this.itemName=page.locator('[data-test="item-4-title-link"]')
this.itemPrice=page.locator('[data-test="inventory-item-price"]')
this.removeButton=page.getByRole('button',{name:'Remove',exact:true})
this.continueShopping=page.getByRole('button',{name:'Continue Shopping'})
this.Checkout=page.getByRole('button',{name:'Checkout'})
}

async verifyProductDetails(itemName:string,price:string|null){

await expect(this.itemName).toHaveText(itemName)

if (price) {
    await expect(this.itemPrice).toHaveText(price);
} else {
    // If no price, validate it's empty or not present
    await expect(this.itemPrice).toBeEmpty();
}

await expect(this.removeButton).toBeVisible()
await expect(this.continueShopping).toBeVisible()
await expect(this.Checkout).toBeVisible()

}

}