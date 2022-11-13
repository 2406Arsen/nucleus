import { useState } from 'react'
import { shallowEqual } from 'react-redux'
import './App.scss'
import { Tabs } from './components-library/Bars/Tabs'
import Switches from './components-library/Controls/Switches'
import { changeThemeMode } from './store/features/Main/MainSlice'
import { useAppDispatch, useAppSelector } from './store/hooks'

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(({ main }) => main.themeMode, shallowEqual)
  const [isChecked, setChecked] = useState(false)
  return (
    <div className='App'>
      <Switches
        isChecked={isChecked}
        changeHandler={() => setChecked(prev => !prev)}
        disabled={theme === 'light'}
      />
      <Tabs data={[
        {
          title: 'title 1',
          id: 'id1',
          navigateTo: 'title1'
        },
        {
          title: 'title 2',
          id: 'id2',
          navigateTo: 'title2'
        }
      ]} />
      <label htmlFor='changeTheme' style={{ display: 'flex', alignItems: 'center', gridColumnGap: '5px', margin: '20px 0' }}>
        Activate Dark Mode
        <Switches isChecked={theme === 'dark'} changeHandler={(e) => e.target.checked ? dispatch(changeThemeMode('dark')) : dispatch(changeThemeMode('light'))} />
      </label>
    </div>

  )
}

export default App
