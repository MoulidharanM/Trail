module.exports={
    "rainbow login":function(browser){
        browser.url("https://web.openrainbow.com/");
        browser.pause(5000);
        browser.setValue("#username","moulidharan.mohankumar@al-enterprise.com");
        browser.pause(5000);
        browser.click(".blueFill.rbButtonComponent > .c-button__label");
        browser.pause(5000);
        browser.setValue("#authPwd","Dharan@2000");
        browser.pause(5000);
        browser.click(".blueFill.rbButtonComponent > .c-button__label");
        browser.pause(20000);
        browser.end();

        
    },
};