import { $ } from '@wdio/globals'

class LoginPage {
    get btnMenuTelaLogin() { return $('//android.widget.TextView[@text="Login"]') }
    get inputEmail() { return $('//android.widget.EditText[@content-desc="input-email"]') }
    get inputSenha() { return $('//android.widget.EditText[@content-desc="input-password"]') }
    get btnLogin() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup') }
    get btnOk() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

    async acessarTelaLogin() {
        await this.btnMenuTelaLogin.click()
        await driver.pause(1000)
    }

    async login(usuario, senha) {
        await this.inputEmail.setValue(usuario)
        await this.inputSenha.setValue(senha)
        await this.btnLogin.click()
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
