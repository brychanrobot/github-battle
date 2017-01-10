import React, {Component, PropTypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleComponent extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isLoading: true,
            playersInfo: []
        }
    }

    componentDidMount () {
        let query = this.props.location.query
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then((players) => {
                this.setState({
                    isLoading: false, //no setting to false
                    playersInfo: players
                })
            })
    }

    handleInitateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    }

    render () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitateBattle.bind(this)}
                playersInfo={this.state.playersInfo}/>
        )
    }
}

ConfirmBattleComponent.contextTypes = {
    router: PropTypes.object.isRequired
}

export default ConfirmBattleComponent