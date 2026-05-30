import { test, expect } from '@playwright/test';
import { AddproductToCart } from '../Pages/AddProductToCart';
import { LoginPage } from '../Pages/loginPage';
import { register } from '../Pages/RegisterPage';

test('addproduct to cart', async ({ page }) => {
  
  const login =new LoginPage(page) 
const addproduct=new AddproductToCart(page,'Sauce Labs Backpack')
const registerpage=new register(page)
await registerpage.openapp('https://www.saucedemo.com/')
await login.login('standard_user','secret_sauce')
await addproduct.addproductToCart()
await addproduct.verifyRemovebutton()
await addproduct.clickOnShoppingcart()

});