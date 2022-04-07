// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  withDraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="cw-bg">
        <div className="cw-main-container">
          <div className="cw-profile-container">
            <div className="cw-profile-div">
              <p className="cw-profile">S</p>
            </div>
            <h1 className="cw-profile-name">Sarah williams</h1>
          </div>
          <div className="cw-balance-container">
            <p className="cw-balance-description">Your Balance</p>
            <div className="cw-cw-balance-div">
              <p className="cw-balance">{balance}</p>
              <p className="cw-in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="cw-withdraw-heading">Withdraw</p>
          <p className="cw-choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="cw-lists-container">
            {denominationsList.map(eachObject => (
              <DenominationItem
                key={eachObject.id}
                value={eachObject.value}
                withDrawMoney={this.withDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
