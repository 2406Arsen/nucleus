import './App.scss'
import { Tabs } from './components-library/Bars/Tabs'
import { changeThemeMode } from './store/features/Main/MainSlice'
import { useAppDispatch, useAppSelector } from './store/hooks'

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(({ main }) => main.themeMode)

  return (
    <div className='App'>
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
        <input defaultChecked={theme === 'dark'} type='checkbox' id='changeTheme' onChange={(e) => e.target.checked ? dispatch(changeThemeMode('dark')) : dispatch(changeThemeMode('light'))} />
      </label>
    </div>

  )
}

export default App
