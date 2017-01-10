import React, {Component} from 'react'
import { Link } from 'react-router'
import styles from '../styles'

class Home extends Component {
    render () {
        return (
            <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
                <h1>Github Battle</h1>
                <p className='lead'>Our motto</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>Get Started</button>
                </Link>
            </div>
        )
    }
}

export default Home