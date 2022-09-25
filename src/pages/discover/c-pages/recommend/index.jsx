import React, {memo, useEffect} from 'react'
import {connect, useDispatch, useSelector} from "react-redux";

import {getTopBannerAction} from './store/actionCreators'

function Recommend(props) {

  //组件和redux关联：获取数据和进行操作
  const {topBanners} = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))
  const dispatch = useDispatch()

  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>Recommend:{topBanners.length}</h2>
    </div>
  )
}


export default memo(Recommend)

