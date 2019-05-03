import { ajax } from './app'
export const login = (params, callback) => {
  ajax('manage/api/user/login', params, 'get').then((ret) => {
    callback(ret)
  }).catch((err) => {
    api.toast({ msg: err.message })
  })
}
