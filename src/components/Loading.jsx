import React, {Component, PropTypes} from 'react'

const styles = {
	container: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '3em'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop:'1.5em'
	}
}

class Loading extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: this.props.text
		}
	}

	componentDidMount () {
		var stopper = `${this.props.text}...`
		this.interval = setInterval(() => {
			if (this.state.text === stopper) {
				this.setState({
					text: this.props.text
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}, 1000/this.props.speed)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}
	
	

	render () {
		return (
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
			</div>
		)
	}
}

Loading.defaultProps = {
	text: 'Loading',
	speed: 3
}

Loading.propTypes = {
	speed: PropTypes.number,
	text: PropTypes.string
};

export default Loading