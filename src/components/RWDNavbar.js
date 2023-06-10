import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from './NavbarContext'
import '../styles/OnePage.css'

function RWDNavbar() {
  const { menu, setMenu, page, setPage } = useContext(NavbarContext)
  return (
    <>
      {menu ? (
        <div className="myMask">
          <div className="mask">
            <ul className="m-lg-0 maskUl">
              <li className="list-unstyled">
                <Link
                  to="/dis"
                  className="nav-link RWDPage"
                  style={{ color: page === '使用說明' ? '#677510' : '' }}
                  onClick={() => {
                    setPage('使用說明')
                    setMenu(false)
                  }}
                >
                  使用說明
                </Link>
              </li>
              <li className="list-unstyled ps-lg-4">
                <Link
                  to="/fee"
                  className="nav-link RWDPage"
                  style={{ color: page === '收費方式' ? '#677510' : '' }}
                  onClick={() => {
                    setPage('收費方式')
                    setMenu(false)
                  }}
                >
                  收費方式
                </Link>
              </li>
              <li className="list-unstyled ps-lg-4">
                <Link
                  to="/"
                  className="nav-link RWDPage"
                  style={{ color: page === '站點資訊' ? '#677510' : '' }}
                  onClick={() => {
                    setPage('站點資訊')
                    setMenu(false)
                  }}
                >
                  站點資訊
                </Link>
              </li>
              <li className="list-unstyled ps-lg-4">
                <Link
                  to="/news"
                  className="nav-link RWDPage"
                  style={{ color: page === '最新消息' ? '#677510' : '' }}
                  onClick={() => {
                    setPage('最新消息')
                    setMenu(false)
                  }}
                >
                  最新消息
                </Link>
              </li>
              <li className="list-unstyled ps-lg-4">
                <Link
                  to="act"
                  className="nav-link RWDPage"
                  style={{ color: page === '活動專區' ? '#677510' : '' }}
                  onClick={() => {
                    setPage('活動專區')
                    setMenu(false)
                  }}
                >
                  活動專區
                </Link>
              </li>
            </ul>
            <button className="RWDLoginBotton">登入</button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default RWDNavbar
