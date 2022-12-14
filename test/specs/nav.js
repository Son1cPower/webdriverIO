import HomePage from '../pages/home-page'
import allureReporter from '@wdio/allure-reporter'

describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        allureReporter.addFeature("Navigation")
        allureReporter.addSeverity("critical")
        //Open URL
       // await browser.url('/')
        await HomePage.open()

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"]
        const actualLinks = []

        // const navLinks =  await $('#primary-menu').$$('li[id*=menu]')
        //const navLinks = await $$('#primary-menu li[id*=menu]')
        const navLinks = await HomePage.NavComponent.linksNavMenu

        for (const link of navLinks) {
            actualLinks.push(await link.getText())
        }



        await expect(expectedLinks).toEqual(actualLinks)

    })


    it('Get the text of all menu items & assert them using wait commands', async () => {
        //Open URL
        //browser.pause('5000')
       // browser.url('/')
       await HomePage.open()

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"]
        const actualLinks = []

        //await $('#primary-menu').waitForDisplayed({timeout:2000})

        await browser.waitUntil(async function () {

          //  const homeText = await $('#primary-menu li').getText()
            const homeText = await HomePage.NavComponent.firstNavNenuList.getText()
            return homeText === "Home"
        }, {
            timeout: 5000,
            timeoutMsg: 'Could not verify the home text from #primary-menu li'
        })

        //const navLinks = await $$('#primary-menu li[id*=menu]')
        const navLinks = await HomePage.NavComponent.linksNavMenu

        for (const link of navLinks) {
            actualLinks.push(await link.getText())
        }



        await expect(actualLinks).toEqual(expectedLinks)

    })

})