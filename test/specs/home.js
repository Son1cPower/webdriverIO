//Practice E-Commerce Site – Automation Bro
//https://practice.automationbro.com/
import allureReporter from '@wdio/allure-reporter'


import HomePage from '../pages/home-page'

describe('Home', () => {

    before(async () => {

        console.log('THIS COULD BE USED FOR TEST SETUP')

        //Open URL
        // await HomePage.open()
    })

    beforeEach(async () => {

        console.log('THIS RUN BEFORE EACH TEST')

        //Open URL
        await HomePage.open()
    })

    afterEach(async () => {

        console.log('THIS RUN AFTER EACH TEST')

        //Open URL
        // await HomePage.open()
    })

    after(async () => {

        console.log('THIS COULD BE USED FOR TEST CLEANUP')

        //Open URL
        // await HomePage.open()
    })
    it('Open URL & assert title', async () => {
        allureReporter.addSeverity("minor")
        //Open URL
        //await browser.url('https://practice.automationbro.com/')
        //await HomePage.open()
        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro')

    })



    it('Open About Page & assert URL ', async () => {
        //Open URL
        await browser.url('https://practice.automationbro.com/about')
        // await HomePage.open()
        //Assert URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/')

    })


    it('Open Home Page & Click Get Started button & assert URL have get-started text', async () => {
        //Open URL
        //  await browser.url('https://practice.automationbro.com')

        //await $('#get-started').click()
        await HomePage.btnGetStarted.click()

        //Assert URL have text get-started
        await expect(browser).toHaveUrlContaining('get-started')

    })



    it('Open Main Logo & assert URL have not get-started text', async () => {
        allureReporter.addFeature("Logo Verification")
        //Open URL
        //   await browser.url('https://practice.automationbro.com')


        //await $('//img[@alt="Practice E-Commerce Site"]').click()
        await HomePage.imageLogo.click()
        await expect(browser).not.toHaveUrlContaining('get-started')

    })

    it('Open Main Page & assert heading text', async () => {
        //Open URL
        //   await browser.url('https://practice.automationbro.com')


        const headingEl = await $('.elementor-widget-container h1')
        //get text
        // const headingText = await headingEl.getText()
        //assert the text
        // await expect(headingText).toEqual('Think different. Make different.')
        await expect(headingEl).toHaveText('Think different. Make different.')
    })






})

