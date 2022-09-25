import * as actionTypes from './constants'

import {RecommendApi} from '@/api/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return async dispatch => {
    const res = await RecommendApi.fetchBanner()
    dispatch(changeTopBannerAction(res))
  }
}
