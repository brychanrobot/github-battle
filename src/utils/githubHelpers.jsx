import axios from 'axios'

var id = "cliend_id"
var sec = "your_secret_id"
var param = `?client_id=${id}&client_secret=${sec}`

function getUserInfo (username) {
    return axios.get(`https://api.github.com/users/${username}${param}`)
}

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`)
}

function getTotalStars(repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count
    }, 0)
}

function getPlayerData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function (totalStars) {
            return {
                followers: player.followers,
                totalStars
            }
        })
}

function calculateScores(players) {
    return players.map((player) => {
      return player.followers * 3 + player.totalStars  
    })
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        })).then(function (info) {
            return info.map(function (user) {
                return user.data
            })
        }).catch(function (err) {
            console.warn('error in getPlayersInfo', err)
        })
    },
    
    battle: function(players) {

        return axios.all(players.map(getPlayerData))
            .then(calculateScores)
            .catch((err) => {console.warn('error in getPLayersInfo: ', err)})
    }
}

export default helpers