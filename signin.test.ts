import { GBC } from './gbcPageObject'
//import { Driver } from 'selenium-webdriver/chrome'
const gbc = new GBC()

// G4CP-27: To test if a user can sign in using valid credentials (email address and password).
//Result:Pass

test('Test 1: login with valid credentials', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('sharolynshimer@gmail.com')
    await gbc.loginPassword('Devmountain!')
    await gbc.driver.sleep(5000);
}) 



//G4CP-30: To test if user account is getting disabled after multiple invalid sign in attempts.
//Result:Pass
test('Test2: Invalid login attempts', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    for (var i=0; i<= 6; i++) {
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('123456')
    }
    let text = await gbc.findErrorMessage()
    await gbc.driver.sleep(1000)
    expect(text).toContain("Sorry, you've tried too many times. Please try again later.")
    await gbc.driver.sleep(5000);
})


afterAll(async () => {
    await gbc.driver.quit()
})