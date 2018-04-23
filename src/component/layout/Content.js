import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import MyRoute from '../../common/myRoute/MyRoute'
import MyAuthRoute from '../../common/myRoute/MyAuthRoute'
import MyLoginRoute from '../../common/myRoute/MyLoginRoute'
import Analysis from '../analysis/Analysis'
import tablelist from '../tablelist'
import NotFound from '../notfound/404'
import ServerError from '../servererror/500'
import Forbidden from '../forbidden/403'
import basicinfo from '../basicinfo'
import basicform from '../basicform'
import advancedform from '../advancedform'
import advancedinfo from '../advancedinfo'
import TablelistForm from '../tablelistForm/TablelistForm'
import Profile from '../profile/Profile'

export default () => (
    <Switch>
        <Redirect exact from="/" to="/analysis" />
        {/* MyLoginRoute 是登录就可以查看的页面 */}
        <MyLoginRoute path="/analysis" component={Analysis} />

        {/* 不需要权限的页面使用 Route/MyRoute, 如果整个app都不需要权限， 那应该都使用Route/MyRoute
          * MyRoute具有 Route的所有功能， 扩展可以title， content属性 会根据对象title， content自动渲染 面包屑和内容部分
          */
        }
        <Route path="/500" component={ServerError} />
        <MyRoute path="/403" component={Forbidden} />


        {/* 需要权限的页面使用 MyAuthRoute , 配合auth的配置使用 */}
        <MyAuthRoute path="/tablelist" {...tablelist} />
        <MyAuthRoute path="/basicinfo" {...basicinfo} />
        <MyAuthRoute path="/basicform" {...basicform} />
        <MyAuthRoute path="/advancedform" {...advancedform} />
        <MyAuthRoute path="/advancedinfo" {...advancedinfo} />
        <MyAuthRoute path="/tablelistForm/:id/:type" component={TablelistForm} />
        <MyAuthRoute path="/myprofile" component={Profile} />

        {/* 404 页面不需要权限 始终放在最后 */}
        <MyRoute component={NotFound} />
    </Switch>
)
