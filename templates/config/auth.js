
// config/auth.js
module.exports = {
	
    'facebookAuth' : {
        'clientID'      : '0000000000000000000', // your App ID
        'clientSecret'  : '000000000000000000000000000000', // your App Secret
        'callbackURL'   : 'https://<%= appName %>.herokuapp.com/auth/facebook/callback'	//this goes in Facebook's "App URL" textbox
    },

    'twitterAuth' : {
        'consumerKey'       : '00000000000000000000000000',
        'consumerSecret'    : '0000000000000000000000000000000',
        'callbackURL'       : 'https://<%= appName %>.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '0000000000000-0000000000000000000000.apps.googleusercontent.com',
        'clientSecret'  : '00-000000000000000000000000',
        'callbackURL'   : 'https://<%= appName %>.herokuapp.com/auth/google/callback'
    }
	
};
