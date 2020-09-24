import request from 'network/request'

export default {
  getMultidata () {
    return request.get("/home/multidata")
  },
}