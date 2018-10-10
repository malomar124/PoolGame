import React, { Component } from 'react';
import './styles/PoolApp.css';
import ContentModal from './Components/ContentModal.js'
import posed from 'react-pose'

const Button = posed.button({
  idle: { scale: 1 },
  hovered: { scale: 1.2 }
})  

class PoolApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isCreatePlayerVisible: false,
      isPlayPoolVisible: false,
      isLeaderboardVisible: false,
      hovering: false
    };
  }

  closeModal = () => {
    this.setState({
      isModalVisible: false
    })
  }

  openCreatePlayer = () => {
    this.setState({
      isModalVisible: true,
      isCreatePlayerVisible: true,
      isPlayPoolVisible: false,
      isLeaderboardVisible: false
    })
  }

  openPlayPool = () => {
    this.setState({
      isModalVisible: true,
      isCreatePlayerVisible: false,
      isPlayPoolVisible: true,
      isLeaderboardVisible: false
    })
  }

  openLeaderboard = () => {
    this.setState({
      isModalVisible: true,
      isCreatePlayerVisible: false,
      isPlayPoolVisible: false,
      isLeaderboardVisible: true
    })
  }

  render() {
    return (
      <div className="pool-app">
        <h2>Shall we play a game?</h2>
        <div className="row nav-buttons justify-content-md-center">
          <Button
            className="col-md-3 btn btn-dark nav-item"
            pose={this.state.hovering ? "hovered" : "idle"}
            onClick={() => this.openCreatePlayer()}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}>Create Player</Button>
          <Button
            className="col-md-3 btn btn-dark nav-item"
            pose={this.state.hovering ? "hovered" : "idle"}
            onClick={() => this.openPlayPool()}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}>Play Game</Button>
          <Button
            className="col-md-3 btn btn-dark nav-item"
            pose={this.state.hovering ? "hovered" : "idle"}
            onClick={() => this.openLeaderboard()}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}>Leaderboard</Button>
        </div>
        {this.state.isModalVisible && 
          <ContentModal
            closeModal={this.closeModal}
            isCreatePlayerVisible={this.state.isCreatePlayerVisible}
            isPlayPoolVisible={this.state.isPlayPoolVisible}
            isLeaderboardVisible={this.state.isLeaderboardVisible}>
          </ContentModal>
        }
      </div>
    );
  }
}

export default PoolApp;
