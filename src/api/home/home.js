import axios from "axios"

// export const getPopular = () => {
//   axios({
//     url:l
//   })
// }
export const getPopular = () => {
  return axios({
    url: "http://localhost:3000/multidata",
    method: "get",
  })
}