Ext.define('GS.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.form.Email'
	],
	
	config: {
		title: 'Contact',
		iconCls: 'user',
		url: 'contact.php',
		
		items:[
		{
			xtype: 'fieldset',
			title: 'Contact us',
			instructions: '(email is not required)',
			items: [
				{
					xtype: 'textfield',
					name: 'name',
					label: 'Name'
				},{
					xtype: 'textfield',
					name: 'email',
					label: 'E-mail'
				},{
					xtype: 'textareafield',
					name: 'message',
					label: 'Message'
				}]
		},{
			xtype: 'button',
			text: 'Send',
			ui: 'confirm',
			handler: function() {
				this.up('contactform').submit();
			}
		}]
	}
});