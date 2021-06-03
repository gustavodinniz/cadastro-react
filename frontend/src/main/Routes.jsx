import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCadastro from '../components/user/UserCadastro'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCadastro} />
        <Redirect from='*' to='/' />
    </Switch>