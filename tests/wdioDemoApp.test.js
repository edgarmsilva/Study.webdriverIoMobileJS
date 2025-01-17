import CadastroPage from "../screen/Cadastro.page";
import loginPage from "../screen/login.page"

describe('Testes WdioDemoApp', function () {

    beforeEach(() => {
        driver.activateApp('com.wdiodemoapp');
    })

    afterEach(() => {
        driver.terminateApp('com.wdiodemoapp');
    })

    it('Validar login com sucesso', async function () {
        await loginPage.acessarTelaLogin()
        await loginPage.login('teste@teste.com', 'Teste123');
        const titulo = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
        const mensagem = await $('//android.widget.TextView[@resource-id="android:id/message"]')
        await expect(titulo).toHaveText('Success')
        await expect(mensagem).toHaveText('You are logged in!')
    })

    it('Validar login com email inválido', async function () {
        await loginPage.acessarTelaLogin()
        await loginPage.login('aaaa', 'Teste123')
        await expect(loginPage.msgErroEmail).toHaveText('Please enter a valid email address')    
    })

    it('Validar login com senha inválida', async function () {
        await loginPage.acessarTelaLogin()
        await loginPage.login('teste@teste.com', '1')
        await expect(loginPage.msgErroSenha).toHaveText('Please enter at least 8 characters')
    })

    it('Cadastrar usuário com sucesso', async function () {
        await CadastroPage.acessarTelaCadastro()
        await CadastroPage.cadastro("teste2@teste.com", "teste123", "teste123")
        await expect(CadastroPage.msgCadSucessoTitulo).toHaveText('Signed Up!')
        await expect(CadastroPage.msgCadSucesso).toHaveText('You successfully signed up!')
    })

    it('Cadastrar usuário sem informar o email', async function () {
        await CadastroPage.acessarTelaCadastro()
        await CadastroPage.cadastro("", "teste123", "teste123")
        await expect(CadastroPage.msgErroEmail).toHaveText('Please enter a valid email address')
    })

    it('Cadastrar usuário sem informar a senha', async function () {
        await CadastroPage.acessarTelaCadastro()
        await CadastroPage.cadastro("teste@teste.com", "", "teste123")
        await expect(CadastroPage.msgErroSenha).toHaveText('Please enter at least 8 characters')
        await expect(CadastroPage.msgErroConfirmaSenha).toHaveText('Please enter the same password')
    })

    it('Cadastrar usuário sem confirmar a senha', async function () {
        await CadastroPage.acessarTelaCadastro()
        await CadastroPage.cadastro("teste@teste.com", "teste123", "")
        await expect(CadastroPage.msgErroConfirmaSenha).toHaveText('Please enter the same password')
    })

    
})