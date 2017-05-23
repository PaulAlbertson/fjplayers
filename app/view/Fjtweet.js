Ext.define('FJWEBAPP.view.Fjtweet',{
	extend: 'Ext.Container',
	xtype: 'fjtweet',
	
	config:
	{
		 tabBarPosition: 'top',
		 
		 items:
		[
		 	{
		 		xtype: 'button',
		 		text: 'Home',
		 		iconCls: 'home',
		 		id: 'tweetBackButton',
		 		iconMask: true,
		 			
		 			items:
		 			[
		 			 	{
		 			 		 html: 'This is where the tweets will be.'
		 			 	}
		 			 
		 			 ]
		 	}
		 
		 ]
		
	}
	
	
})
