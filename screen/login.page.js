import { $ } from '@wdio/globals'

class LoginPage {
    
    // Mapeamento inputs:
    get inputEmail() { return $('//android.widget.EditText[@content-desc="input-email"]') }
    get inputSenha() { return $('//android.widget.EditText[@content-desc="input-password"]') }
    
    // Mapeamento Botôes:
    get btnMenuTelaLogin() { return $('//android.widget.TextView[@text="Login"]') }
    get btnLogin() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup') }
    get btnOk() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    
    // Mapeamento mensagens:
    get msgErroEmail() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]') }
    get msgErroSenha() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]') }

    // Métodos de Login:
    async acessarTelaLogin() {
        await this.btnMenuTelaLogin.click()
        await driver.pause(1000)
    }

    async login(usuario, senha) {
        await this.inputEmail.setValue(usuario)
        await this.inputSenha.setValue(senha)
        await this.btnLogin.click()
    }
}

export default new LoginPage();
