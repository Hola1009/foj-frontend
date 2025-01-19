import service from '@/utils/request'

export function loginService(userAccount, password) {
  return service({
    url: '/user/login',
    method: 'post',
    data: { userAccount, password },
  })
}

export function logoutService() {
  return service({
    url: '/user/logout',
    method: 'delete',
  })
}
