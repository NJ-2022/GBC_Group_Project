import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class GBC extends BasePage {
    searchBar: By = By.xpath('//input[@placeholder="Search subjects, styles, colors..."]')
    results: By = By.className('gbc-basic-grid')
    accountIcon: By = By.xpath('//a[@href="https://www.greatbigcanvas.com/my-account/sign-in/"]')
    signinEmailInput: By = By.id("sign-in-email")
    signinPasswordInput: By = By.id("sign-in-password")
    signOut: By = By.xpath('//div[@class="col-auto sign-out"]')
    registerNewAccountBtn: By = By.xpath('//a[text()="Register A New Account"]')
    firstNameInput: By = By.id("register-first-name")
    lastNameInput: By = By.id("register-last-name")
    registerEmailInput: By = By.id("register-email")
    registerAccountType: By = By.xpath('//option[text()="Commercial"]')
    registerPasswordInput: By = By.id("register-password-1")
    registerVerifyPasswordInput: By = By.id("register-password-2")
    registerAccountBtn: By = By.xpath('//a[text()="Register A New Account"]')
    errorMessage: By = By.xpath('//div[@class="error message"]')
    //nameHeaderAccount: By = By.xpath('//div[@class="col-12 col-md"]')
    nameHeaderAccount: By = By.xpath('//div[@class="col-12 col-md"]')
    popUpRegister: By = By.xpath('(//button[@class="button primary"])')
    //('//div[@class="popup-wrapper"]')
    //class="fal fa-times clickable close-button"]')
    //('//div[@class="popup-container md"]')



    constructor() {
        super({url: "https://www.greatbigcanvas.com/"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
    async clickAccountIcon() {
        return this.click(this.accountIcon)
    }
    async loginEmail(searchTerm: string) {
        return this.setInput(this.signinEmailInput, `${searchTerm}\n`)
    }

    async loginPassword(searchTerm: string) {
        return this.setInput(this.signinPasswordInput, `${searchTerm}\n`)
    }

    async clickRegisterNewBtn() {
        return this.click(this.registerNewAccountBtn)
    }

    async registerFirstName(searchTerm: string) {
        return this.setInput(this.firstNameInput, `${searchTerm}\n`)
    }

    async registerLastName(searchTerm: string) {
        return this.setInput(this.lastNameInput, `${searchTerm}\n`)
    }

    async registerEmail(searchTerm: string) {
        return this.setInput(this.registerEmailInput, `${searchTerm}\n`)
    }

    async clickAccountType() {
        return this.click(this.registerAccountType)
    }

    async registerPassword(searchTerm: string) {
        return this.setInput(this.registerPasswordInput, `${searchTerm}\n`)
    }

    async registerVerifyPassword(searchTerm: string) {
        return this.setInput(this.registerVerifyPasswordInput, `${searchTerm}\n`)
    }

    async clickRegisterBtn() {
        return this.click(this.registerAccountBtn)
    }

    async findHeader() {
        return this.getText(this.nameHeaderAccount)
    }

    async findErrorMessage() {
        return this.getText(this.errorMessage)
    }

    async signOutfunc() {
        return this.click(this.signOut)
    }
}