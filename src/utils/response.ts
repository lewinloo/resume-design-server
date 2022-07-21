/**
 * 接口返回的响应体
 */

export const ResponseSuccess = (message: string, result?: any) => {
  return {
    message,
    result,
    success: true
  }
}

export const ResponseFail = (message: string) => {
  return { success: false, message };
};
