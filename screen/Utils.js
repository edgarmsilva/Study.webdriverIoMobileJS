async function capturarTela() {
    await driver.pause(1000)
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const fileName = `screenshot-${timestamp}.png`
    await driver.saveScreenshot(`./screenshots/${fileName}`)
    
}

async function waitForElement(element){
    await driver.waitUntil( async () => await  element.isDisplayed() === true, {
        timeout: 5000, 
        timeoutMsg: 'Element was not displayed after 5 seconds' 
       });
    
}

const utils = {capturarTela, waitForElement}

export default utils