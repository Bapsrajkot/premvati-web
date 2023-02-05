import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Dashboard from './dashboard/Dashboard'
import Layout from '../layout/Layout'
import LogRegLayout from '../layout/LogRegLayout'
import Login from './login/Login'

const Index = () => {

    const defaultLayout = ({ children }) => {
        return <Layout>
            {children}
        </Layout>
    }
    const loginLayout = ({ children }) => {
        return <LogRegLayout>
            {children}
        </LogRegLayout>
    }

    return (
        <Switch>
            <RouteWrapper exact path="/" component={Login} layout={loginLayout} />
            <RouteWrapper path="/dashboard" component={Dashboard} layout={defaultLayout} />
        </Switch>
    )
}

export default Index

function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}

