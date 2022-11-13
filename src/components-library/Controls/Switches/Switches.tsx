import React, { FC } from 'react'
import './Switches.scss'
interface ISwitchesProps {
  isChecked: boolean
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Switches: FC<ISwitchesProps> = ({ isChecked, changeHandler, disabled = false }): JSX.Element => {
  return (
    <input
      type='checkbox'
      id='switch'
      checked={isChecked}
      onChange={changeHandler}
      disabled={disabled}
    />
  )
}

export default Switches