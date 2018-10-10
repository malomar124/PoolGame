import React from 'react';
import PropTypes from 'prop-types'
import '../styles/Modal.css'

const CreatePlayer = ( onCreatePlayer) => (
    <div className="create-player-container">
        <h2>Create Player</h2>
        <form>
            <div className="row">
                <div className="form-group col-md-4 offset-md-1 enter-name-group">
                    <label htmlFor="playerNameInput">Enter Player Name:</label>
                    <input type="text" className="form-control" id="playerNameInput" placeholder="e.g. David Lightman"/>
                </div>
                <div className="form-group col-md-4 offset-md-2">
                    <label htmlFor="ballTypeSelect">Select Ball Type</label>
                    <select className="form-control" id="ballTypeSelect">
                    <option>Solids</option>
                    <option>Stripes</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-info col-md-2 offset-md-1" onClick={onCreatePlayer}>Create!</button>
        </form>
    </div>
)

CreatePlayer.propTypes = {
    onCreatePlayer: PropTypes.func.isRequired
}

export default CreatePlayer;