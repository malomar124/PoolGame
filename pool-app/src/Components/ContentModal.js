import React from 'react';
import PropTypes from 'prop-types'
import CreatePlayer from './CreatePlayer'
import PoolGame from './PoolGame'
import Leaderboard from './Leaderboard'
import '../styles/Modal.css'

const ContentModal = ({ 
    closeModal,
    isCreatePlayerVisible,
    isPlayPoolVisible,
    isLeaderboardVisible
}) => (
    <div className="content-container">
        {isCreatePlayerVisible && 
            <CreatePlayer
                // onCreatePlayer={}
            ></CreatePlayer>
        }
        {isPlayPoolVisible &&
            <PoolGame
                // solidsPlayers={}
                // stripesPlayers={}
                // onPickWinner={}
            ></PoolGame>
        }
        {isLeaderboardVisible &&
            <Leaderboard
                // orderedPlayersList={}
            ></Leaderboard>
        }
        <button
            type="button"
            className="close-create-player-modal-button btn btn-dark col-md-4 offset-md-4"
            onClick={closeModal}>
            CLose
        </button>
    </div>
)

ContentModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isCreatePlayerVisible: PropTypes.bool.isRequired,
    isPlayPoolVisible: PropTypes.bool.isRequired,
    isLeaderboardVisible: PropTypes.bool.isRequired
}

export default ContentModal;