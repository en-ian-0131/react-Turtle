import { createContext, useState } from 'react'

export const NavbarContext = createContext(null)

export const NavbarProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const [page, setPage] = useState('站點資訊')
  const value = {
    menu,
    setMenu,
    page,
    setPage,
  }
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  )
}
