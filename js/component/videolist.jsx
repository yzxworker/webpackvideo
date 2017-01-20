var React=require('react');
var Alllist=require('./alllist.jsx');
module.exports=React.createClass({
	getInitialState:function(){
		return {
			bOk:true
		}
	},
	handleclick:function(){
		var list=this.refs['list'];
		var listtn=this.refs['listtn'];
		if(this.state.bOk){
			$(list).animate({right:'0'},function(){
				$(listtn).css({left:'0'});
				$(listtn).html('»');
			})
		}else{
			$(list).animate({right:'-150px'},function(){
				$(listtn).css({left:'-30px'});
				$(listtn).html('«');
			})
		}
		this.setState({
			bOk:!this.state.bOk
		})
	},

	render:function(){
		var arr=this.props.allsou;
		var elearr=[];
		for (var i = 0; i < arr.length; i++) {
			elearr.push(<Alllist keys={arr[i]['key']} con={arr[i]['name']} changeurl={this.props.changeurl}></Alllist>)
		}
		return (
				<div className="listbox" ref="list" >
					<div className="yclist" ref="listtn" onClick={this.handleclick}>«</div>
					<ul className="list">
						{elearr}
					</ul>
				</div>
			)
	}
})