Ext.define('GS.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'blog'
        },
        control: {
            'blog list': {
				itemtap: 'showPost'
			}
        }
    },
	showPost: function(list, index, element, record){
		this.getBlog().push({
			xtype: 'panel',
			title: record.get('title'),
			html:  record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	}
});