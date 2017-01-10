import React, {Component} from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

class componentName extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			scores: []
		}
	}

	componentDidMount() {
		console.log(this.props.location.state.playersInfo)
		githubHelpers.battle(this.props.location.state.playersInfo)
			.then((scores) => {
				this.setState({
					scores: scores,
					isLoading: false
				})
			})
	}	

	render () {
		return (
			<Results
				isLoading={this.state.isLoading}
				scores={this.state.scores}
				playersInfo={this.props.location.state.playersInfo}/>
		)
	}
}

export default componentName