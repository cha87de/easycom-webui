/**
 * 
 */
Ext.define('albtec.easycom.view.timerecord.Window', {
    extend: 'Ext.Window',
    xtype: 'timerecordwindow',

    requires: [
	'albtec.easycom.view.timerecord.Form',
	'albtec.easycom.view.main.MainModel',
	'albtec.easycom.view.timerecord.WindowController'
    ],

    viewModel: 'main',
    controller: 'timerecordwindow',

    layout: 'fit',
    modal: true,
    title: 'Time Record',
    closeAction: 'hide',
    
    items: [{
    	xtype: 'timerecordform',
	listeners: {
		'saveSuccessful': 'onSaveSuccessful'
	}
    }],
    
    listeners: {
	close: 'onClose'
    }

});
