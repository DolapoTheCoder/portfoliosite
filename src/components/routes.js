import React from 'react'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'

const routes = [
    { path: '/', component: <Home/>, exact: true },
    { path: '/portfolio', component: <Portfolio/> },
    { path: '/contact', component: <Contact/>},
]

export default routes