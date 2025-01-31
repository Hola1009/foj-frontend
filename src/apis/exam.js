import service from '@/utils/request'

// done
export function getExamListService(params) {
  return service({
    url: '/exam/list',
    method: 'get',
    params,
  })
}

// done
export function addExamQuestionService(params) {
  // 调用service函数，传入参数url、method和data
  return service({
    url: `/exam/question/add`,
    method: 'post',
    data: params,
  })
}

// done
export function examAddService(params) {
  return service({
    url: '/exam/add',
    method: 'post',
    data: params,
  })
}
// done
export function delExamService(id) {
  return service({
    url: `/exam/${id}`,
    method: 'delete',
  })
}

// done
// 导出一个函数，用于获取考试详情
export function getExamDetailService(id) {
  // 调用service函数，传入url和请求方式
  return service({
    url: `/exam/detail/${id}`,
    method: 'get',
  })
}
// done
export function editExamService(params) {
  return service({
    url: `/exam/edit`,
    method: 'put',
    data: params,
  })
}
// done
export function publishExamService(id) {
  return service({
    url: '/exam/publish',
    method: 'put',
    data: id,
  })
}
// done
export function cancelPublishExamService(id) {
  return service({
    url: '/exam/unpublish',
    method: 'put',
    data: id,
  })
}
export function delExamQuestionService(examId, questionId) {
  return service({
    url: `/exam/question/del?examId=${examId}&questionId=${questionId}`,
    method: 'put',
  })
}
