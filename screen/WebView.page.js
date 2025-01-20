import { $, browser, driver } from '@wdio/globals'
import utils from "../screen/utils";

class WebViewPage {

    // Mapeamento Botôes:
    get btnWebView() { return $('//android.view.View[@content-desc="Webview"]') }
    get btnGetStarted() { return $('//android.view.View[@content-desc="Get Started"]') }
    get btnWhyWebdriver() { return $('//android.view.View[@content-desc="Why WebdriverIO?"]') }

    // Mapeamento mensagens:
    get textWebview() { return $('//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]') }
    get titleGetStarted() { return $('//android.widget.TextView[@text="Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems, you can find help and answers on our "]') }
    get titleWhy() { return $('//android.widget.TextView[@text="Why Webdriver.IO?"]') }


    // Métodos da página:
    async verificarBanner() {
        utils.waitForElement(this.textWebview)
        // await browser.pause(5000)
        const popUp = await browser.$('//android.widget.TextView[@text="🇺🇦  We stand with the people of Ukraine. We encourage compassion, and hope for peace.   🇺🇦"]');
        const isDisplayed = await popUp.isDisplayed();   
        if (isDisplayed) {
            const closeBtn = await browser.$('//android.widget.Button[@text="Close"]');
            await closeBtn.click();
        } else {
            console.log('O elemento não está visível.');
        }
    }

    async acessarTelaWebview() {
        await this.btnWebView.click()
        await this.verificarBanner()
        await this.textWebview.isDisplayed()
    }

    async selecionarOpcao(opcao) {
        const btnOpcao = await browser.$(`//android.view.View[@content-desc="${opcao}"]`)
        await btnOpcao.click()
        await driver.pause(3000)

    }
}

export default new WebViewPage();
