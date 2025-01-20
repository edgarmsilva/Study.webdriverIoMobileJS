Automação WebDriverIO - App native-demo-app

Author: Edgar Silva

Data: Janeiro de 2025

Descrição:
Esta automação foi criada do zero usando a linguagem JavaScript e o FrameWork MOCHA WebDriveIO para testar o aplicativo native-demo-app

descrição do projeto
screen: page object das telas do aplicativo
tests: cenários de testes da aplicação

Requirements:
nodeJs
appium

O Escopo dessa automação é:
Validar a Busca de usuários Validar o Cadastro de usuários Validar a Edição de usuários Validar a Exclusão de usuários Validar o Login de usuários

Instalação:
Execute o comando abaixo para instalar todas as dependencias: 

```
npm init wdio@latest .
```


Execução local:
Para rodar todos os testes, executar o comando abaixo no console:
```
npm run wdio
```

Para gerar o report com o Allure executar os comandos:

```
npm run report
```