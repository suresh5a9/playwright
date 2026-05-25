import {test} from '@playwright/test'

import { register } from '../Pages/RegisterPage'

test('registration',async({page})=>{

    const registerpage=new register(page)
    await registerpage.openapp()
    await registerpage.registration('Suresh','allam','suresh@gmail.com','Fpt','test123')

})