import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data: [
				{
					component: 'First',
					id: 1
				},
				{
					component: 'Second',
					id: 2
				},
				{
					component: 'Third',
					id: 3
				}
			]
		}
	}
	render() {
		return (
			<div>
				{this.state.data.map((dynamicComponent, i) => 
					<Content key={i} componentData={dynamicComponent} />)}
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<div>{this.props.componentData.component}</div>
				<div>{this.props.componentData.id}</div>
			</div>
		);
	}
}

/*	Refs
 *********************************************************/
/*********************************************************/
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			data: ''
// 		}
// 		this.updateState = this.updateState.bind(this)
// 		this.clearInput = this.clearInput.bind(this)
// 	}
// 	updateState(e) {
// 		this.setState({data: e.target.value});
// 	}
// 	clearInput() {
// 		this.setState({data: ''})
// 		ReactDOM.findDOMNode(this.refs.myInput).focus();
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<input value={this.state.data} onChange={this.updateState} ref="myInput" />
// 				<button onClick={this.clearInput}>CLEAR</button>
// 				<h4>{this.state.data}</h4>
// 			</div>
// 		);
// 	}
// }

/*********************************************************/
/*********************************************************/
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			data: 'Initial data...'
// 		}
// 		this.updateState = this.updateState.bind(this)
// 	}
// 	updateState() {
// 		this.setState({data: 'Data updated from the child component...'})
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<Content myDataProp={this.state.data} updateStateProp={this.updateState}></Content>
// 			</div>
// 		);
// 	}
// }

// class Content extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.props.updateStateProp}>CLICK</button>
// 				<h3>{this.props.myDataProp}</h3>
// 			</div>
// 		);
// 	}
// }

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			data: 'Initial data...'
// 		}
// 		this.updateState = this.updateState.bind(this)
// 	}
// 	updateState() {
// 		this.setState({data: 'Data updated...'})
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.updateState}>CLICK</button>
// 				<h4>{this.state.data}</h4>
// 			</div>
// 		);
// 	}
// }

/*********************************************************/
/*********************************************************/
//class App extends React.Component {
//	constructor(props) {
//		super(props);
//
//		this.state = {
//			data: 'Initial data...'
//		}
//		this.updateState = this.updateState.bind(this)
//	}
//	updateState(e) {
//		this.setState({data: e.target.value});
//	}
//	render() {
//		return (
//			<div>
//				<Content myDataProp={this.state.data} updateStateProp={this.updateState}></Content>
//			</div>
//		);
//	}
//}
//
//class Content extends React.Component {
//	render() {
//		return (
//			<div>
//				<input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
//				<h3>{this.props.myDataProp}</h3>
//			</div>
//		);
//	}
//}

//class App extends React.Component {
//	constructor(props) {
//		super(props);
//
//		this.state = {
//			data: 'Initial data...'
//		}
//		this.updateState = this.updateState.bind(this);
//	}
//	updateState(e) {
//		this.setState({data: e.target.value});
//	}
//	render() {
//		return (
//			<div>
//				<input type="text" value={this.state.data} onChange={this.updateState} />
//				<h4>{this.state.data}</h4>
//			</div>
//		);
//	}
//}

/*********************************************************/
/*********************************************************/
//class App extends React.Component {
//	constructor(props) {
//		super(props)
//
//		this.state = {
//			data: 0
//		}
//		this.setNewNumber = this.setNewNumber.bind(this)
//	}
//	setNewNumber() {
//		this.setState({data: this.state.data + 1})
//	}
//	render() {
//		return (
//			<div>
//				<button onClick={this.setNewNumber}>INCREASE</button>
//				<Content myNumber={this.state.data}></Content>
//			</div>
//		);
//	}
//}
//
//class Content extends React.Component {
//	componentWillMount() {
//		console.log('Component WILL MOUNT!')
//	}
//	componentDidMount() {
//		console.log('Component DID MOUNT!')
//	}
//	componentWillReceiveProps(newProps) {
//		console.log('Component WILL RECEIVE PROPS!')
//	}
//	shouldComponentUpdate() {
//		return true;
//	}
//	componentWillUpdate() {
//		console.log('Component WILL UPDATE!')
//	}
//	componentDidUpdate() {
//		console.log('Component DID UPDATE!')
//	}
//	componentWillUnmount() {
//		console.log('Component WILL UNMOUNT!')
//	}
//	render() {
//		return (
//			<div>
//				<h3>{this.props.myNumber}</h3>
//			</div>
//		);
//	}
//}

/*********************************************************/
/*********************************************************/
//class App extends React.Component {
//	constructor() {
//		super();
//
//		this.state = {
//			data: []
//		}
//
//		this.setStateHandler = this.setStateHandler.bind(this);
//		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//		this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this);
//	};
//	setStateHandler() {
//		var item = "setState...";
//		var myArray = this.state.data.slice();
//		
//		myArray.push(item);
//
//		this.setState({data: myArray});
//	};
//	forceUpdateHandler() {
//		this.forceUpdate();
//	};
//	findDOMNodeHandler() {
//		var myDiv = document.getElementById('myDiv');
//		ReactDOM.findDOMNode(myDiv).style.color = 'green';
//	};
//	render() {
//		return (
//			<div>
//				<button onClick = {this.findDOMNodeHandler}>FIND DOM NODE</button>
//				<div id="myDiv">NODE</div>
//			</div>
//		);
//	}
//}

/*********************************************************/
/*********************************************************/
//class App extends React.Component {
//	render() {
//		return (
//			<div>
//				<h1>Hello , {this.props.name}</h1>
//				<h3>Array:  {this.props.propArray}</h3>
//				<h3>Bool:   {this.props.propBool ? "True" : "False"}</h3>
//				<h3>Func:   {this.props.propFunc(3)}</h3>
//				<h3>Number: {this.props.propNumber}</h3>
//				<h3>String: {this.props.propString}</h3>
//			</div>
//		);
//	}
//}
//
//App.propTypes = {
//	name: PropTypes.string,
//	propArray: PropTypes.array.isRequired,
//	propBool: PropTypes.bool.isRequired,
//	propFunc: PropTypes.func,
//	propNumber: PropTypes.number,
//	propString: PropTypes.string
//};
//
//App.defaultProps = {
//	name: 'Ali',
//	propArray: [1, 2, 3, 4, 5],
//	propBool: true,
//	propFunc: function(e) {
//		return e;
//	},
//	propNumber: 1,
//	propString: "String value"
//};

/*********************************************************/
/*********************************************************/
//class App extends React.Component {
//	constructor(props) {
//		super(props);
//		
//		this.state = {
//			header: "Header from props",
//			content: "Content from props"
//		}
//	}
//	render() {
//		return (
//			<div>
//				<Header headerProp={this.state.header} />
//				<Content contentProp={this.state.content} />
//			</div>
//		);
//	}
//}
//
//class Header extends React.Component {
//	render() {
//		return (
//			<div>
//				<h1>{this.props.headerProp}</h1>
//			</div>
//		);
//	}
//}
//
//class Content extends React.Component {
//	render() {
//		return (
//			<div>
//				<h2>{this.props.contentProp}</h2>
//			</div>
//		);
//	}
//}
/*********************************************************/
/*********************************************************/
//class App extends React.Component {
//	constructor() {
//		super();
//		this.state = {
//			data: [
//				{
//					"id": 1,
//					"name": "Foo",
//					"age": "20"
//				},
//				{
//					"id": 2,
//					"name": "Bar",
//					"age": "30"
//				},
//				{
//					"id": 3,
//					"name": "Baz",
//					"age": "40"
//				}
//			]
//		}
//	}
//    render() {
//		return (
//			<div>
//				<table>
//					<tbody>
//						{this.state.data.map((person, i) => <TableRow key={i}
//							data={person} />)}
//					</tbody>
//				</table>
//			</div>
//		);
//    }
//}
//
//class TableRow extends React.Component {
//	render() {
//		return (
//			<tr>
//				<td>{this.props.data.id}</td>
//				<td>{this.props.data.name}</td>
//				<td>{this.props.data.age}</td>
//			</tr>
//		);
//	}
//}

export default App;