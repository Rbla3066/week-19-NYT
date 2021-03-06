// Include React and React-Router dependencies
var React = require('react');
var helpers = require('../../utils/helpers');

// Query Component Declaration
var Query = React.createClass({ 

	getInitialState: function(){
		return {
			search: "",
			start: "",
			end: "",
		}
	},
	

    handleChange: function(event) {

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
    },

	/*This code handles the sending of the search terms to the parent Search component*/
	handleClick: function(){
		// console.log("in Query, search term=",this.state.search);
		// console.log("in Query, search start=",this.state.start);
		// console.log("in Query, search end=",this.state.end);
		this.props.updateSearch(this.state.search, this.state.start, this.state.end);
		// return false;
	},

	render: function(){

		return(
			<div className ="main-container">

					<div className="row">
						<div className="col-lg-12">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
								</div>
								<div className="panel-body">


									<form onClick={this.handleClick}>
										<div className="form-group">
											<h4 className=""><strong>Topic</strong></h4>
											<input type="text" value={this.state.value} className="form-control " id="search" onChange= {this.handleChange} required/>

											<h4 className=""><strong>Start Year</strong></h4>
											<input type="number" value={this.state.value} className="form-control " id="start" onChange= {this.handleChange} required/>

											<h4 className=""><strong>End Year</strong></h4>
											<input type="number" value={this.state.value} className="form-control " id="end" onChange= {this.handleChange} required/>

										</div>

										
										<div className="pull-right">
											<button className="btn btn-danger"><h4>Submit</h4></button>
										</div>
									</form>

								</div>
							</div>

						</div>
					</div>

			</div>

		)
	}

});

// Export the module back to the route
module.exports = Query;