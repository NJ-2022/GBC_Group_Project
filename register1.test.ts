import { GBC } from './gbcPageObject'
//import { Driver } from 'selenium-webdriver/chrome'
const gbc = new GBC()

//G4CP-7: To test if a user is able to register an account successfully with all the valid details.
//Result:Pass

test('Register user', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.clickRegisterNewBtn()
    await gbc.registerFirstName('ABCD')
    await gbc.registerLastName('E')
    await gbc.registerEmail('test1@gbc.com')
    await gbc.clickAccountType()
    await gbc.registerPassword('dm12345')
    await gbc.registerVerifyPassword('dm12345')
    await gbc.clickRegisterBtn()
    await gbc.driver.sleep(5000);
})


afterAll(async () => {
    await gbc.driver.quit()
})