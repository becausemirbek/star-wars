import React, { lazy } from 'react'
import { Route, Redirect } from 'react-router-dom'

// import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';


const Home = lazy(()=>import('../pages/Home'))
const Peoples = lazy(()=>import('../pages/Peoples'))
const Planets = lazy(()=>import('../pages/Planets'))


const rootRoute = {
  path: '/',
  exact: true,
  component: () => <Redirect to="/home" />,
  route: Route,
}

const homeRoute = {
  name:'Home',
  path:'/home',
  exact:true,
  component: Home,
  route: Route
}
const peoples = {
  name:'PeoplePage',
  path:'/peoples',
  exact: true,
  component: Peoples,
  route: Route
}

const planets = {
  name: 'PlanetsPage',
  path: '/planets',
  exact: true,
  component: Planets,
  route: Route
}

const error404Route = {
  name: 'Error 404',
  component: () => <h1>Error 404</h1>,
  route: Route,
}

const flattenRoutes = routes => {
  let flatRoutes = []
  routes = routes || []
  routes.forEach(item => {
    flatRoutes.push(item)
    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
    }
  })
  return flatRoutes
}

const allRoutes = [
  rootRoute,
  homeRoute,
  peoples,
  planets
]


allRoutes.push(error404Route)


const allFlattenRoutes = flattenRoutes(allRoutes)
export { allRoutes, allFlattenRoutes }
