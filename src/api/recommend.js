import request from '@/utils/request'

class RecommendApi {
  static fetchBanner() {
    return request({
      url: `/banner`,
      method: 'GET',
    })
  }
}

export {
  RecommendApi
}
