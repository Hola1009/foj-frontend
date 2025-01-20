import service from '@/utils/request'

export function loginService(adminAccount, password) {
  return service({
    url: '/admin/login',
    method: 'post',
    data: { adminAccount, password },
  })
}

export function logoutService() {
  return service({
    url: '/admin/logout',
    method: 'delete',
  })
}

export function getUserinfoService() {
  return service({
    url: '/admin/info',
    method: 'get',
  })
}
