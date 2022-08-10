class NavComponent {
    get linksNavMenu() {

        return $$('#primary-menu li[id*=menu]')
    }
    get firstNavNenuList() {

        return $('#primary-menu li')
    }
}
export default new NavComponent()