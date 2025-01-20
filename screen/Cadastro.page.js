import { $ } from '@wdio/globals'
import loginPage from './login.page'

class CadastroPage {
    
    // Mapeamento inputs:
    get inputEmail() { return $('//android.widget.EditText[@content-desc="input-email"]') }
    get inputSenha() { return $('//android.widget.EditText[@content-desc="input-password"]') }
    get inputConfirmarSenha() { return $('//android.widget.EditText[@content-desc="input-repeat-password"]') }
    
    // Mapeamento Botôes:
    get btnAbaSignUp() { return $('//android.widget.TextView[@text="Sign up"]') }
    get btnSignUp() { return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup') }
    
    // Mapeamento mensagens:
    get msgCadSucessoTitulo() { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]') }
    get msgCadSucesso() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get msgErroEmail() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]') }
    get msgErroSenha() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]') }
    get msgErroConfirmaSenha() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[3]') }

    // Métodos da página:
    async acessarTelaCadastro() {
        loginPage.acessarTelaLogin()
        await this.btnAbaSignUp.click()
    }

    async cadastro(usuario, senha, confSenha) {
        await this.inputEmail.setValue(usuario)
        await this.inputSenha.setValue(senha)
        await this.inputConfirmarSenha.setValue(confSenha)
        await this.btnSignUp.click()
    }
}

export default new CadastroPage();
