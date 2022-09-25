import React, {memo, useEffect} from 'react'

import {RecommendApi} from '@/api/recommend'

export default memo(function Recommend() {

  const fetchBanner = async () => {
    const data = await RecommendApi.fetchBanner()
    console.log(data)
  }

  useEffect(() => {
    fetchBanner()
  })

  return (
    <div>
      <h2>Recommend</h2>
    </div>
  )
})
