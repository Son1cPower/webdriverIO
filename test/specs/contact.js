import ContactPage from '../pages/contact-page'
import { faker } from '@faker-js/faker';

describe('Contact Menu', () => {
    it('Fill all the input field and submit Contact form', async () => {
       
        //Fill input data
        //await browser.url('/contact')
        await ContactPage.open()


        //await $('.contact-name input').setValue('Test name')
        //await ContactPage.fieldName.setValue('Test name')
        //await $('.contact-email input').setValue('Test@gmail.com')
        //await ContactPage.fieldEmail.setValue('Test@gmail.com')
        //await $('.contact-phone input').setValue('050-999-88-77')
        //await ContactPage.fieldPhone.setValue('050-999-88-77')
       // await $('.contact-message textarea').setValue('Message will be not long becaouse I am lazy')
        //await ContactPage.fieldMassage.setValue('Message will be not long becaouse I am lazy')

//await ContactPage.submitForm('Test name','Test@gmail.com','050-999-88-77','Message will be not long becaouse I am lazy')

//FAKER LIBRARY

await ContactPage.submitForm(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(),faker.lorem.paragraphs(2))


//console.log( await $('button[type=submit]'))
// Pause
//browser.pause(5000)
// Debug
//await browser.debug()

       // await $('button[type=submit]').click()
        await ContactPage.buttonSubmit.click()

//const checkAlertMassage =  await $('[role="alert"]')
const checkAlertMassage =  await ContactPage.alertMassage

await expect(checkAlertMassage).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly')
        
   
    


  
})


})