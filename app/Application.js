/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('albtec.easycom.Application', {
    extend: 'Ext.app.Application',
    
    name: 'albtec.easycom',

    stores: [
        
    ],
    
    launch: function () {

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This/ application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
    
});

Ext.setGlyphFontFamily('FontAwesome');

// TODO integrate properly
var timeDiffCalculator = function(starttime, endtime){
	var start = new Date(starttime);
	var end = new Date(endtime);
	var diff = end - start;
	return (diff > 0 ? diff : 0);
};

var timeDiffFormatter = function(diff){
	var msec=diff;	
	var hh = Math.floor(msec / 1000 / 60 / 60);
	msec -= hh * 1000 * 60 * 60;
	var mm = Math.floor(msec / 1000 / 60);
	msec -= mm * 1000 * 60;
	var ss = Math.floor(msec / 1000);
	msec -= ss * 1000;
	return hh + ":" + (mm < 9 ? "0"+mm : mm);
};    

