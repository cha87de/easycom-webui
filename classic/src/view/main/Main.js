/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('albtec.easycom.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

	'albtec.easycom.view.main.MainModel',
	
        'albtec.easycom.view.customer.List',
	'albtec.easycom.view.customer.Content'
    ],

    viewModel: 'main',
    
    layout: 'border',

    items: [{
        region: 'north',
	height: 50,
	bodyStyle: "background-image:url('resources/header.png') !important; background-repeat: no-repeat; background-position: 50% 50%; background-attachment: scroll; background-size: cover;",
	items: [{
		xtype: 'label',
		html: '<h1>alb-TEC easyCOM 0.1</h1>',
		margin: 0,
		region: 'west'
	}]
    }, {
	region: 'center',
	xtype: 'customercontent',
    }, {
	region: 'west',
	width: '30%',
	collapsible: true,
	split: true,
	
	xtype: 'customerlist',
	
	reference: 'customerlist',
	bind: '{customers}'
    } ]
});

