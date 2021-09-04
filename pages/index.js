import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import Auth from '../features/auth'

export default function Home() {

  const data = useSelector(state => state.data)

  return (
    <div className="home">
      <div className="header shadow p-5 mb-10">
          <h1 className="text-center text-5xl font-black text-black-300">BrokerLead</h1>
          <p className="text-center font-thin">Property buy and sell for brokers</p>
      </div>
      <div className="container mx-auto">
        <Auth />
      </div>
    </div>
  )
}
