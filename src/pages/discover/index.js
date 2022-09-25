import React, {memo, Fragment} from 'react'
import {NavLink, Outlet} from 'react-router-dom'

import {dicoverMenu} from '@/common/local-data'

import {DiscoverWrapper, TopMenu} from './style'

export default memo(function HyDiscover() {

  const showItem = (item) => {
    return (
      <div className="item" key={item.title}>
        <NavLink to={item.link}>{item.title}</NavLink>
      </div>
    )
  }

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item) => {
              return (
                <Fragment key={item.title}>
                  {showItem(item)}
                </Fragment>
              )
            })
          }
        </TopMenu>
        <Outlet/>
      </div>
    </DiscoverWrapper>
  )
})
