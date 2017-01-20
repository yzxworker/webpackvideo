var React=require('react');
module.exports=React.createClass({
	sendkey:function(){
		var key=this.props.keys;
		console.log(this.props.keys);
		this.props.changeurl(key);
	},
	render:function(){
		return (
			<li onClick={this.sendkey}>{this.props.con}</li>
			)
	}
});