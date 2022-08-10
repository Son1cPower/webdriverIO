import NavComponent from './components/nav-comp'

class HomePage {
    open() {
        return browser.url('/')
    }

    get btnGetStarted() {
        return $('#get-started')
    }

    get imageLogo() {
        return $('//img[@alt="Practice E-Commerce Site"]')
    }

    get NavComponent() {
        return NavComponent
    }

}



export default new HomePage()
