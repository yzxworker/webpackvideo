var React=require('react');
var ReactDOM=require('react-dom');

require('../css/base.css');
require('../css/index.css');
var Videolist=require('./component/videolist.jsx');
var url='../server/server.php';
var json=[]

			
var App=React.createClass({
	getInitialState:function(){
		return {
			url:'hyj.mp4',
			allsou:[]
		}
	},
	changeurl:function(key){
		for (var i = 0; i < this.state.allsou.length; i++) {
			if(key== this.state.allsou[i]['key']){
				this.setState({
					url:this.state.allsou[i]['url']
				})
			}
		}

	},
	componentDidMount:function(){
		var that=this;
		$.ajax({
			url:url,
			type:'POST',
			success:function(json){
				console.log(json)
				json=eval('('+json+')');
				that.setState({
					allsou:json,
					url:json[0]['url']
				})
			},
		})
		

	},
    render:function(){
        return (
            <div className="player">
        		<Videolist allsou={this.state.allsou} changeurl={this.changeurl} />
            	<video autostart id="my-video" className="video-js vjs-default-skin vjs-big-play-centered" controls  width="640" height="380" src={'../MV/'+this.state.url} preload="auto" data-setup='{"example_option":true}'>
					<source src={'../MV/'+this.state.url} type='video/mp4' />
            	</video>
            </div>
        )
    }
});

ReactDOM.render(
		<App/>,
		document.getElementById('app')
	)