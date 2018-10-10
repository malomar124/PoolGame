import React from 'react';
import PropTypes from 'prop-types'
import map from 'lodash/map'
import '../styles/Modal.css'

const PoolGame = (solidsPlayers, stripesPlayers, onPickWinner ) => (
    <div className="play-pool-container">
        <h2>Pool Game</h2>
        <form>
            <div className="row">
                <div className="form-group col-md-4 offset-md-1">
                    <label htmlFor="playerOneSelect">Select Solids Player</label>
                    <select className="form-control" id="playerOneSelect">
                        {map(solidsPlayers, player => (
                            <option>{player.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-4 offset-md-2">
                    <label htmlFor="playerTwoSelect">Select Stripes Player</label>
                    <select className="form-control" id="playerTwoSelect">
                        {map(stripesPlayers, player => (
                            <option>{player.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-info col-md-2 offset-md-1" onClick={onPickWinner}>Pick Winner!</button>
        </form>
    </div>
)

PoolGame.propTypes = {
    solidsPlayers: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })),
    stripesPlayers: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })),
    onPickWinner: PropTypes.number.isRequired
}

export default PoolGame;