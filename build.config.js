'use strict';

/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    buildDir: './build',
    prodDir: './dist',

    litmus: {
        username: 'litmus_username',
        password: 'litmus_password',
        url: 'https://yourcompany.litmus.com',
        applications: ['android4', 'aolonline', 'androidgmailapp', 'aolonline', 'ffaolonline',
            'chromeaolonline', 'iphone6', 'ipadmini', 'ipad', 'chromegmailnew',
            'iphone6plus', 'notes85', 'ol2002', 'ol2003', 'ol2007', 'ol2010', 'ol2011',
            'ol2013', 'outlookcom', 'chromeoutlookcom', 'chromeyahoo', 'windowsphone8'] // Full list at https://yourcompany.litmus.com/emails/clients.xml
    }
};