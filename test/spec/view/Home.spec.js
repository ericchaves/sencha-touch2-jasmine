describe('Home view', function() {
	var view = Ext.create('GS.view.Home');
	
	it('should have a "Home" title', function() {
		expect(view.getTitle()).toEqual('Home');
	});	
	
	it('should have a home iconCls', function() {
		expect(view.getIconCls()).toEqual('home');
	});
		
	it('should have HTML content', function() {
		expect(view.getHtml()).toBeDefined();
	});
	
	it('should contain an image', function(){
		expect(view.getHtml()).toContain('<img');
	});
});