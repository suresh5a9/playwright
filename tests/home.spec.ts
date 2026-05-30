import { Homepage } from "../Pages/Homepage";
import { register } from "../Pages/RegisterPage";
import { test } from '@playwright/test'
import { LoginPage } from "../Pages/loginPage";

test('homepage',async({page})=>{

const home=new Homepage(page,'Computers')
const registerpage=new register(page)
const login =new LoginPage(page)

await registerpage.openapp('https://www.saucedemo.com/')
await login.login('standard_user','secret_sauce')

await home.homePage()
})


