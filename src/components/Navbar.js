import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/OnePage.css'

function Navbar() {
  const [page, setPage] = useState('站點資訊')
  return (
    <div className="container">
      <nav className="d-flex justify-content-between align-items-center myNavbar">
        <div className="d-flex">
          <Link to="/">
            <img src="imgs/logo.jpg" alt="" />
          </Link>
          <ul className="d-flex align-items-center m-lg-0">
            <li className="list-unstyled">
              <Link
                to="/dis"
                className="nav-link page"
                style={{ color: page === '使用說明' ? '#b5cc22' : '' }}
                onClick={() => {
                  setPage('使用說明')
                }}
              >
                使用說明
              </Link>
            </li>
            <li className="list-unstyled ps-lg-4">
              <Link
                to="/fee"
                className="nav-link page"
                style={{ color: page === '收費方式' ? '#b5cc22' : '' }}
                onClick={() => {
                  setPage('收費方式')
                }}
              >
                收費方式
              </Link>
            </li>
            <li className="list-unstyled ps-lg-4">
              <Link
                to="/"
                className="nav-link page"
                style={{ color: page === '站點資訊' ? '#b5cc22' : '' }}
                onClick={() => {
                  setPage('站點資訊')
                }}
              >
                站點資訊
              </Link>
            </li>
            <li className="list-unstyled ps-lg-4">
              <Link
                to="/news"
                className="nav-link page"
                style={{ color: page === '最新消息' ? '#b5cc22' : '' }}
                onClick={() => {
                  setPage('最新消息')
                }}
              >
                最新消息
              </Link>
            </li>
            <li className="list-unstyled ps-lg-4">
              <Link
                to="act"
                className="nav-link page"
                style={{ color: page === '活動專區' ? '#b5cc22' : '' }}
                onClick={() => {
                  setPage('活動專區')
                }}
              >
                活動專區
              </Link>
            </li>
          </ul>
        </div>
        <button className="sec1Botton">登入</button>
      </nav>
    </div>
  )
}

export default Navbar
