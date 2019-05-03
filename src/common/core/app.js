const Promise = require('bluebird')
const config = require('../../../config/config')

const hostPort = `${config.dev.host}:${config.dev.port}`
const isDev = process.env.NODE_ENV === 'development'

export const ajax = (url, params, method = 'post') => {
  let apiUrl = isDev ? config.dev.apiUrl : config.pro.apiUrl
  return new Promise((resolve, reject) => {
    console.log(`url     ---->  ${url}`)
    console.log(`params  ---->  ${JSON.stringify(params)}`)
    api.ajax({
      url: apiUrl + url,
      method: method,
      data: {
        values: params
      },
      timeout: 10
    }, function (ret, err) {
      console.log(JSON.stringify(ret))
      if (ret) {
        if (ret.code + '' === '200') {
          resolve(ret)
        } else {
          reject(ret)
        }
      } else {
        let e = { code: '-200', message: '网络错误', data: err }
        reject(e)
      }
    })
  })
}

/**
 * 打开窗口
 * @param defualtConfig 个性化窗口配置, name 窗口名称 ,pageParam 页面参数
 */
export const openWinFun = (defualtConfig = {}) => (name, pageParam) => {
  pageParam = pageParam || {}
  let url = `http://${hostPort}/${name}/win.html`
  let params = {
    bgColor: '#fff',
    animation: {
      type: 'movein', // 动画类型（详见动画类型常量）
      subType: 'from_right', // 动画子类型（详见动画子类型常量）
      duration: 300 // 动画过渡时间，默认300毫秒
    },
  }
  if (process.env.NODE_ENV !== 'development') {
    url = `widget://html/${name}/win.html`
  }
  params = {
    ...params,
    ...defualtConfig,
    name: name,
    url: url,
    pageParam: pageParam
  }
  api.openWin(params)
}

/**
 * 打开frm
 * @param defualtConfig 个性化窗口配置,
 * url frm路径 ,
 * pageParam 页面参数,
 * bounces 是否需要弹动效果
 */
export const openFrmFun = (defualtConfig = {}) => (rect = null, name, pageParam = {}, bounces = false) => {
  let params = {
    bgColor: 'rgba(0,0,0,0)',
    rect: {
      marginTop: 0, // main页面距离win顶部的高度
      marginBottom: 0, // main页面距离win底部的高度
      w: 'auto' // main页面的宽度 自适应屏幕宽度
    },
    allowEdit: true,
    reload: true,
    bounces: false,
    pageParam: {},
    name: 'frm',
    url: './frm.html'
  }
  let url = `http://${hostPort}/${name}/frm.html`
  if (process.env.NODE_ENV !== 'development') {
    url = `widget://html/${name}/frm.html`
  }
  params = {
    ...params,
    ...defualtConfig,
    rect:{
      ...params.rect,
      ...rect
    },
    url,
    pageParam,
    bounces
  }
  api.openFrame(params)
}

/**
 * 获取某页面的访问地址
 * @param path
 * @returns {string}
 */
export const retRul = (path) => {
  if (!isDev) {
    return `widget://html/${path}`
  }
  return `http://${hostPort}/${path}`
}

// 关闭当前窗口win
export const closeWin = () => {
  api.closeWin({})
}

// 关闭当前窗口frm
export const closeFrm = () => {
  api.closeFrame({})
}

// 设置偏好数据
export const setPrefs = (key, value) => {
  api.setPrefs({
    key: key,
    value: value
  })
}

// 获取偏好数据
export const getPrefs = (key) => {
  return api.getPrefs({
    sync: true,
    key: key
  })
}

// 移除偏好数据
export const removePrefs = (key) => {
  api.removePrefs({
    key: key
  })
}

// 验证手机号的合法性
export const checkTel = (num) => {
  return !!(/^1(3|4|5|7|8)\d{9}$/.test(num))
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
export const dateFormate = (dateTime = new Date(), fmt = 'yyyy.MM.dd HH:mm:ss') => { // author: meizz
  var o = {
    'M+': dateTime.getMonth() + 1, // 月份
    'd+': dateTime.getDate(), // 日
    'H+': dateTime.getHours(), // 小时
    'm+': dateTime.getMinutes(), // 分
    's+': dateTime.getSeconds(), // 秒
    'q+': Math.floor((dateTime.getMonth() + 3) / 3), // 季度
    'S': dateTime.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}

export const openWin = openWinFun()

export const openFrm = openFrmFun()
