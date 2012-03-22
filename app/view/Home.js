Ext.define('GS.view.Home',{
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		
		html: [
            '<img src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to Sencha Touch</h1>',
            "<p>You're creating the Getting Started app. This demonstrates how ",
            "to use tabs, lists and forms to create a simple app</p>",
            '<h2>Sencha Touch (2.0.0)</h2>'
        ].join("")
	}
});