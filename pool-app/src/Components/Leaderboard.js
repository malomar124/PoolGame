import React from 'react';
import PropTypes from 'prop-types'
import map from 'lodash/map'
import '../styles/Leaderboard.css'

const Leaderboard = ( orderedPlayersList ) => (
    <div className="leaderboard-container">
        <h2>Leaderboard</h2>
        <p>* Ordered by most wins</p>
        <div className="leaderboard">
            <div className="row leaderboard__column-headers">
                <div className="col-md-3">Player</div>
                <div className="col-md-3 offset-md-1">Wins</div>
                <div className="col-md-3 offset-md-1">Losses</div>
            </div>
            {map(orderedPlayersList, player => (
                <div className="row">
                    <div className="col-md-3">{player.name}</div>
                    <div className="col-md-3 offset-md-1">{player.winsCount}</div>
                    <div className="col-md-3 offset-md-1">{player.lossesCount}</div>
                </div>
            ))}
        </div>
    </div>
)

Leaderboard.propTypes = {
    orderedPlayersList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        winsCount: PropTypes.number.isRequired,
        lossesCount: PropTypes.number.isRequired
    }))
}

export default Leaderboard;