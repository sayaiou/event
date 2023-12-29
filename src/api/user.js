import request from '@/utils/request'

//注册接口
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}
export const userLoginService = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}

//获取用户基本信息
export const userGetInfoService = () => request.get('/my/userInfo')

//修改用户基本信息
export const userUpdateInfoService = ({ id, nickname, email }) => {
  request.put('/my/userInfo', { id, nickname, email })
}
//更新头像
export const userUpdateAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })
//重置密码
export const userUpdatePwdService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
