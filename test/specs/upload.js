

const path = require('path')

describe('Upload test', () => {
    it('Simple Upload test', async () => {
        //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload')
   
console.log(__dirname)
//C:\Users\Stanislav_Nehrii\Desktop\webdriveIO-UDEMY\test\specs\upload.js

   //Store test file path
   const filePath = path.join(__dirname,'../data/jmeter-tutorial.png')
   console.log('Image Path ' + filePath)
 

//Upload Test file
const remoteFilePath = await browser.uploadFile(filePath)

// set file path value in the input filed
await $('#file-upload').setValue(remoteFilePath)
await (await $('#file-submit')).click()

//assertion
await expect($('h3')).toHaveText('File Uploaded!')
})



it.only('Upload a hiden input field', async () => {
    //Open URL
    await browser.url('/cart/')


//Store test file path
const filePath = path.join(__dirname,'../data/jmeter-tutorial.png')



//Upload Test file
const remoteFilePath = await browser.uploadFile(filePath)


//remove hidden class
await browser.execute("document.querySelector('#upfile_1').className = ''")





// set file path value in the input filed
await $('#upfile_1').setValue(remoteFilePath)
await $('#upload_1').click()

//assertion
await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully')
})


})