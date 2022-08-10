class ContactPage {
    open() {
        return browser.url('/contact')
    }
    get fieldName() {
        return $('.contact-name input')
    }

    get fieldEmail() {
        return $('.contact-email input')
    }
    get fieldPhone() {
        return $('.contact-phone input')
    }
    get fieldMessage() {
        return $('.contact-message textarea')
    }
    get buttonSubmit() {
        return $('button[type=submit]')
    }
    get alertMassage() {
        return $('[role="alert"]')
    }


    async submitForm(name, email, phone, message) {


        await this.fieldName.setValue(name)

        await this.fieldEmail.setValue(email)

        await this.fieldPhone.setValue(phone)

        await this.fieldMessage.setValue(message)
    }
}



export default new ContactPage()