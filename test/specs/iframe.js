describe('IFrame', () => {
    it('Working with IFrame', async () => {
       
        //Open URL
        await browser.url('https://practice.automationbro.com/iframe-sample/')

// acess the iframe 
const iframe = await $('#advanced_iframe')
await browser.switchToFrame(iframe)

        //Verify that logo exist
        await expect ($('#site-logo')).toExist()
      
//swith to parent frame
await browser.switchToParentFrame()

        //verify page title
        await expect($('h1.tg-page-header__title')).toHaveTextContaining('IFrame Sample')
    })


})