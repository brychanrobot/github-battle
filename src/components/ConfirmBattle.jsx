import React, {PropTypes} from 'react';
import _, {Link} from 'react-router'
import styles from '../styles'
import UserDetails from '../components/UserDetails'
import conv from 'number-to-words'
import capitalize from 'sugar/string/capitalize'
import Loading from '../components/Loading'

/*
function puke (object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
*/

const ConfirmBattle = props => {
    return ( props.isLoading
        ? <Loading text='Prepping for Battle' speed={2} />
        : <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                {props.playersInfo.map((playerInfo, i) =>
                    <div className='col-sm-6' key={i}>
                        <p className='lead'>Player {capitalize(conv.toWords(i+1))}</p>
                        <UserDetails info={playerInfo} />
                    </div>
                )}
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12' style={styles.space}>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
                        Initiate Battle!
                    </button>
                </div>
                <div className='col-sm-12' style={styles.space}>
                    <Link to='/playerOne'>
                        <button type='button' className='btn btn-lg btn-danger'>
                            Reselect Players
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle;