import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello , {this.props.name}</h1>
				<h3>Array:  {this.props.propArray}</h3>
				<h3>Bool:   {this.props.propBool ? "True" : "False"}</h3>
				<h3>Func:   {this.props.propFunc(3)}</h3>
				<h3>Number: {this.props.propNumber}</h3>
				<h3>String: {this.props.propString}</h3>
			</div>
		);
	}
}

App.propTypes = {
	name: PropTypes.string,
	propArray: PropTypes.array.isRequired,
	propBool: PropTypes.bool.isRequired,
	propFunc: PropTypes.func,
	propNumber: PropTypes.number,
	propString: PropTypes.string
};

App.defaultProps = {
	name: 'Ali',
	propArray: [1, 2, 3, 4, 5],
	propBool: true,
	propFunc: function(e) {
		return e;
	},
	propNumber: 1,
	propString: "String value"
}

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