import request from 'network/request'

export default {
  getMultidata () {
    return request.get("/home/multidata")
  },
  getRecommendData ({type,page}) {
    // console.log(data)
    // return request.get("/home/data", {params: data})
    return request.get(`/home/data?type=${type}&page=${page}`)
  },
}