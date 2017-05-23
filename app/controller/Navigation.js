Ext.define('FJWEBAPP.controller.Navigation', {
    extend: 'Ext.app.Controller',
    config: {
    	
    	refs: {
            main: 'main',
            fjtweet: 'fjtweet',
            fjLoginViewButton: '#fjLoginViewButton',
            fjTweetViewButton: '#fjTweetViewButton',
            tweetBackButton: '#tweetBackButton'
        },
        
        control: {
        	fjLoginViewButton: {
                tap: 'onLoginHandler'
            },
            fjTweetViewButton: {
            	tap: 'onTweetViewHandler'
            },
            tweetBackButton: {
            	tap: 'onTweetBackBtnHandler'
            }
        }
    },
    onLoginHandler: function() {
       alert('Log me in!');
    },
    onTweetViewHandler:function(){
    	//alert('Show me Tweets!');
         Ext.Viewport.animateActiveItem('fjtweet', {type: 'slide', direction: 'left'});
    },
    onTweetBackBtnHandler: function(){
    	//alert('Go back now!');
    	//Ext.Viewport.setActiveItem('main');
    	Ext.Viewport.animateActiveItem('main', {type: 'slide', direction: 'right'});
    }
});
