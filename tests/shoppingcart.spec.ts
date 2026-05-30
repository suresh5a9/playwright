import {test} from "@playwright/test";
import { Shoppingcart } from "../Pages/shoppingcart";
import { register } from "../Pages/RegisterPage";
import { LoginPage } from "../Pages/loginPage";
import { AddproductToCart } from "../Pages/AddProductToCart";

test("shopping cart",async({page})=>{

const sCart =new Shoppingcart(page)
const login= new LoginPage(page);
const register1=new register(page)
const addproduct=new AddproductToCart(page,'Sauce Labs Backpack')
await register1.openapp("https://www.saucedemo.com/")
await login.login("standard_user","secret_sauce")
await addproduct.addproductToCart()
const itemprice=await addproduct.returnPrice()
await addproduct.clickOnShoppingcart()

await sCart.verifyProductDetails('Sauce Labs Backpack',itemprice)


})