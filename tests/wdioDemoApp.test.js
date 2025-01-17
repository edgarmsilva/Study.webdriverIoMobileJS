import loginPage from "../screen/login.page"

describe('Testes WdioDemoApp', function () {

    beforeEach(() => {
        console.log('############################ iniciando o aplicativo...')
        driver.activateApp('com.wdiodemoapp');
    })

    afterEach(() => {
        console.log('############################ fechando o aplicativo...')
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

    it('Validar login com usuário não cadastrado', async function () {
        await loginPage.acessarTelaLogin()
        await loginPage.login('aaaa@teste.com', 'Teste123');
        const titulo = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
        const mensagem = await $('//android.widget.TextView[@resource-id="android:id/message"]')
        await expect(titulo).toHaveText('Success')
        await expect(mensagem).toHaveText('You are logged in!')
    })
})