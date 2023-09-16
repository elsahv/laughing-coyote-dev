import Link from "next/link"
// import {items} from '../constants'


export const items = [
  {
    menuItem: 'Home',
    url: '/'
  },
  {
    menuItem: 'About',
    url: '/web-development/#about'
  },
  {
    menuItem: 'Services',
    url: '/web-development/#services'

  },
  // {
  //     menuItem: 'Case Studies',
  //   url: '/web-development'

  //   },
    {
      menuItem: 'Package Rates',
    url: '/package-rates'

    },
    {
      menuItem: 'Contact',
    url: '/contact'

    },
]

 

const DynamicMenu = () => {
  return (
    <ul id="dynamic-menu" className="flex space-between">
         {items.map((item) => (
            <li className="px-3 mx-1" key={item.menuItem}>
                <Link href={item.url}>
                {item.menuItem}
                </Link>
                </li>
         ))}
    </ul>

    
  )
}

export default DynamicMenu