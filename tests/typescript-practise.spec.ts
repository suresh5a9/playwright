import {test} from "@playwright/test"
/* -------*/
test("firsttest",()=>{

 console.log("Test")

})
/* -------*/
test("second test",()=>{

    console.log("second test")
})


/* page fixture with locators*/

test("pagefixture",async({page})=>{

await page.goto('https://www.saucedemo.com/')
await page.locator('id=user-name').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByText('Login').click()
//await page.
})

// Locators 

test("locators",async({page})=>{

await page.locator('id=user-name',{has:page.locator('id=user-name')}).fill('standard_user')


})