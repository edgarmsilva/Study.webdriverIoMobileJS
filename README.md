# Automação WebDriverIO - App native-demo-app

Author: Edgar Silva

Data: Janeiro de 2025

## Descrição:
Esta automação foi criada usando a linguagem JavaScript e o FrameWork MOCHA para testar o aplicativo native-demo-app disponibilizado pelo WebDriveIO

## Estrutura do projeto
* Pasta screen: onde está localizado o page object das telas do aplicativo
* Pasta tests: onde se encontram os cenários de testes
  
## Pré Requisitos:
* Node.js: Ambiente de execução JavaScript.
* Appium: Ferramenta de automação para aplicações móveis.
* Appium inspector: ferramenta para mapeamento dos elementos 
* WebDriverIO: Framework para escrever testes de automação para aplicações web.
* MOCHA: Framework de teste JavaScript.
* Allure: Ferramenta de relatórios para testes.
* Vysor: Ferramenta para visualização do Device

## O Escopo dessa automação é:
- Validar o cadastro de usuários
- Validar o login de usuários
- Acessar o WebView:
  * acessar a página "Get Started" com sucesso
  * acessar a página "Why WebdriverIO?" com sucesso

## Instalação:
Execute o comando abaixo para instalar todas as dependencias: 

```
npm install
```

## Execução local:
é necessário um device físico conectado ao computador com o apk [native-demo-app](https://github.com/webdriverio/native-demo-app/releases) instalado.

### Para rodar todos os testes:

1. deve-se executar o Appium em um terminal de sua preferência com o comando:
```
appium
```
2. conectar o device ao computador

3. executar o comando abaixo no console para executar todos os testes:
```
npm run wdio
```

## Após a finalização dos testes, para gerar o report com o Allure execute o comando abaixo:

```
npm run report
```
