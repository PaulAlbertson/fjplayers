Ext.define('FJWEBAPP.view.Main',{
	extend: 'Ext.navigation.View',
	xtype: 'main',
	
	config:
	{
		 title: 'FJ Players App',
		 
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


// 
// Ext.define('FJWEBAPP.view.Main', {
    // extend: 'Ext.tab.Panel',
    // xtype: 'main',
    // requires: [
        // 'Ext.TitleBar',
         // 'Ext.carousel.Carousel',
         // 'Ext.Map',
         // 'Ext.form.FieldSet',
         // 'Ext.form.Panel'
// 
    // ],
// 
    // config: {
        // tabBarPosition: 'top',
        // items: [
            // {
                // title: 'Home',
                // iconCls: 'home',
// 
                // styleHtmlContent: true,
                // //scrollable: true,
                // scrollable: {
		            // direction: 'horizontal'
		        // },
// 
                // items: 
                // [
	                // {
	                	// xtype: 'button',
	                	// id: 'fjTweetViewButton',
				        // text: 'FJ Twitter Feed',
				        // iconCls: 'compose',
	   					// iconMask: true,
	   					// height: 50,
	   					// width: 250,
	   					// top:0
// 	   					
	                // },
	                // {
	                	// xtype: 'button',
	                	// id: 'fjLoginViewButton',
				        // text: 'Log in to FJ',
				        // iconCls:'action',
				        // iconMask: true,
				        // height: 50,
				        // width: 250,
				        // top: 125
// 	
	                // }
                // ],
// 
                // html: [
                        // '<div id="homeContainer"><div id="introPageLogo"><img src="resources/images/fj_black_trans_150.png" /></div>',
                        // '<div id="introPageCopy"><span id="introPageCopyH1">The FJ Players App</span>'
                    // ].join("")
            // },
            // {
                // title: 'Clothing',
                // iconCls: 'team',
                // xtype: 'carousel',
                // ui: 'dark',
	            // direction: 'vertical',
// 	            
	            // items: [{
	                // html: '<div id="introPageLogo"><img src="resources/images/fj_black_trans_150.png" /><br /> Scroll down for our latest products.</div>',
	                // cls: 'card dark'
	            // },
	            // {
	                // html: '<img src="resources/images/attire/brown.jpg"></img>',
	                // cls: 'card dark'
	            // },
	            // {
	                // html: '<img src="resources/images/attire/zebra.jpg">',
	                // cls: 'card dark'
	            // },
	            // {
	                // html: '<img src="resources/images/attire/umbrella.jpg">',
	                // cls: 'card dark'
	            // },
	            // {
	                // html: '<img src="resources/images/attire/hat.jpg">',
	                // cls: 'card dark'
	            // }]
//   
            // },
            // {
            	// // this is the google maps screen
           		// // title: 'Course Map',
	            // // icon: 'map',
	            // // xtype: 'map',
	            // // useCurrentLocation: true
// 	            
	            // title: 'Find Course',
	            // iconCls: 'locate',
	            // //xtype: 'formpanel',
	            // //xtype: 'fieldset',
// 	            
	            // items: [
                    // {
                        // xtype: 'fieldset',
                        // title: 'Course Information',
                        // instructions: 'Please tell us where you are playing today',
                        // defaults: {
                            // labelWidth: '35%'
                        // },
                        // items: [
                            // {
                                // xtype         : 'textfield',
                                // name          : 'name',
                                // label         : 'Name',
                                // placeHolder   : 'Torrey Pines',
                                // autoCapitalize: true,
                                // required      : true,
                                // clearIcon     : true
                            // },
                            // {
                                // xtype: 'textfield',
                                // name : 'zipcode',
                                // label: 'Zip Code',
                                // required      : true,
                                // clearIcon     : true
                            // },
                            // {
                                // xtype: 'textfield',
                                // name : 'state',
                                // label: 'Course State',
                                // required      : true,
                                // clearIcon     : true
                            // },
                             // {
		                        // xtype: 'datepickerfield',
		                        // name: 'date',
		                        // label: 'Start Date',
		                        // value: new Date(),
		                        // picker: {
		                            // yearFrom: 1980
		                        // }
		                    // },
                         // ]
                      // }
                  // ]
	           // },
	           // // {
	            // // title: 'Log In',
	            // // iconCls: 'login',
	            // // items:[
	            	// // {
                        // // xtype: 'textfield',
                        // // name : 'state',
                        // // label: 'Course State',
                        // // required      : true,
                        // // clearIcon     : true
                    // // },
	            // // ]
	           // // }
        // ]
    // }
// });
