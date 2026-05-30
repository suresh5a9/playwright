import {test} from '@playwright/test'

import { register } from '../Pages/RegisterPage'

import { LoginPage } from '../Pages/loginPage'

test('registration',async({page})=>{

    const registerpage=new register(page)
    await registerpage.openapp("https://www.saucedemo.com/")
    await registerpage.registration('Suresh','allam','suresh@gmail.com','Fpt','test123')

})

test('login',async({page})=>{
const login =new LoginPage(page)
const registerpage=new register(page)
await registerpage.openapp('https://demo.nopcommerce.com/login')
await login.login('suresh@gmail.com','2026mar')
})

