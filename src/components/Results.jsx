import React, {PropTypes} from 'react';
import UserDetails from '../components/UserDetails'
import conv from 'number-to-words'
import capitalize from 'sugar/string/capitalize'
import Loading from '../components/Loading'

const Results = props => {
	return ( props.isLoading
		? <Loading text='Battling' speed={25}/>
		: <div>
			<h1>Results</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				{props.playersInfo.map((playerInfo, i) =>
				<div className='col-sm-6' key={i}>
					<p className='lead'>Player {capitalize(conv.toWords(i+1))}</p>
					<UserDetails info={playerInfo} score={props.scores[i]}/>
				</div>)}
            </div>
		</div>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired,
	playersInfo: PropTypes.array.isRequired
}

export default Results