import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/OnePage.css'
import { NavbarContext } from './NavbarContext'

function Navbar() {
  const [page, setPage] = useState('站點資訊')
  const { menu, setMenu } = useContext(NavbarContext)
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
        {menu ? (
          <svg
            width="24"
            height="24"
            onClick={() => {
              setMenu(!menu)
            }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#B5CC22"
            />
          </svg>
        ) : (
          <svg
            className="menuBar"
            onClick={() => {
              setMenu(!menu)
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
              fill="#B5CC22"
            />
          </svg>
        )}
      </nav>
    </div>
  )
}

export default Navbar
