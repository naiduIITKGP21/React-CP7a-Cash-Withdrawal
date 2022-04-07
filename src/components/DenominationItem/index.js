// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, withDrawMoney} = props

  const onClickWithDraw = () => {
    withDrawMoney(value)
  }

  return (
    <li className="cw-each-list">
      <button
        className="cw-value-button"
        type="button"
        onClick={onClickWithDraw}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
