/**
 * Created by 叶子 on 2017/7/30.
 * 接口地址配置文件
 */
const EASY_MOCK = 'http://23.106.155.65:8003/api/';
//easy-mock模拟数据接口地址
//const EASY_MOCK = 'http://192.168.1.180:8001/api/';
const MOCK_AUTH = EASY_MOCK + '/597b5ed9a1d30433d8411456/auth';         // 权限接口地址
export const MOCK_AUTH_ADMIN = EASY_MOCK + 'Login/';                           // 管理员权限接口
export const MOCK_AUTH_ADMIN_REG = EASY_MOCK + 'Regiser/';                           // 注册接口接口
export const MOCK_AUTH_VISITOR = MOCK_AUTH + '/visitor';                       // 访问权限接口
export const MOCK_REQUEST_IMGS = EASY_MOCK + 'GetImgsList/';                           // 获取照片路径接口

export const MOCK_REQUEST_WEATHER = EASY_MOCK + 'GetWeather/';                           // 获取天气接口
export const MOCK_REQUEST_DEL_IMAGE = EASY_MOCK + 'DelImage/';                           // 删除照片接口