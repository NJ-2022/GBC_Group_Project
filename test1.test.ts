import { GBC } from './gbcPageObject'
import { Driver } from 'selenium-webdriver/chrome'
const gbc = new GBC()

/*
test('to find the whether the header contains the name post Login', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('111111')
    let text = await gbc.findHeader()
    await gbc.driver.sleep(1000)
    expect(text).toContain("$$$")
    await gbc.driver.sleep(5000);

})
*/

/*
test('test signout', async() =>{
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('111111')
    await gbc.signOutfunc()
    await gbc.driver.sleep(1000)
    await gbc.clickAccountIcon()
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('111111')
    let text = await gbc.findHeader()
    await gbc.driver.sleep(1000)
    expect(text).toContain("$$$")
    await gbc.driver.sleep(5000);

})*/


test('to find whether header contains the name after registration', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.clickRegisterNewBtn()
    await gbc.registerFirstName('$$$')
    await gbc.registerLastName('#')
    await gbc.registerEmail('b16@t.com')
    await gbc.clickAccountType()
    await gbc.registerPassword('111111')
    await gbc.registerVerifyPassword('111111')
    await gbc.clickRegisterBtn()
    await gbc.driver.sleep(1000)
    await gbc.signOutfunc()
    await gbc.driver.sleep(1000)
    await gbc.clickAccountIcon()
    await gbc.loginEmail('h16@t.com')
    await gbc.loginPassword('111111')
    let text = await gbc.findHeader()
    await gbc.driver.sleep(1000)
    expect(text).toContain("$$$")
    await gbc.driver.sleep(5000);
})


afterAll(async () => {
    await gbc.driver.quit()
})