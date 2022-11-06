import { FC, useState } from 'react'
import './Tabs.scss'
interface ITabsProps {
  data: {
    title: string,
    id: string,
    navigateTo: string
  }[]
}

const Tabs: FC<ITabsProps> = ({ data }): JSX.Element => {
  const [selectedId, setSelectedId] = useState(data[0].id)


  return (
    <nav>
      <ul className='tabs' style={{ gridTemplateColumns: `repeat(${data.length},1fr)` }}>
        {data.map(({ id, title }) =>
          <li
            key={id}
            className={selectedId === id ? 'tabs__tab--active' : 'tabs__tab'}
            onClick={() => setSelectedId(id)}
          >
            {title}
          </li>)}
      </ul>
    </nav>
  )
}

export default Tabs