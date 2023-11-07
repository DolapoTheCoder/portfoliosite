import React from 'react'
import Home from './Homepage/Home'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact'
import Community from './Community/Community'

const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/portfolio', component: <Portfolio /> },
    { path: '/community', component: <Community /> },
    { path: '/contact', component: <Contact /> },
]

export default routes