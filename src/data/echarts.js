// 首页 - 指标数据
import { momentMonth } from '../utils/momentTimes'

export const echartsData = {
  'sevenDays': [
    {
      'id': '01',
      'name': '新增客户',
      'data': [2, 1, 2, 1, 5, 1, 0]
    },
    {
      'id': '02',
      'name': '新增联系人',
      'data': [0, 2, 3, 2, 6, 3, 0]
    },
    {
      'id': '03',
      'name': '新增商机',
      'data': [0, 0, 1, 1, 2, 1, 0]
    },
  ],
  'oneYear': [
    {
      'id': momentMonth(0),
      'date': momentMonth(0),
      'finished': 30,
      'aim': 200, 
    },
    {
      'id': momentMonth(1),
      'date': momentMonth(1),
      'finished': 300,
      'aim': 200, 
    },
    {
      'id': momentMonth(2),
      'date': momentMonth(2),
      'finished': 420,
      'aim': 200, 
    },
    {
      'id': momentMonth(3),
      'date': momentMonth(3),
      'finished': 50,
      'aim': 200, 
    },
    {
      'id': momentMonth(4),
      'date': momentMonth(4),
      'finished': 45,
      'aim': 200, 
    },
    {
      'id': momentMonth(5),
      'date': momentMonth(5),
      'finished': 110,
      'aim': 200, 
    },
    {
      'id': momentMonth(6),
      'date': momentMonth(6),
      'finished': 340,
      'aim': 200, 
    },
    {
      'id': momentMonth(7),
      'date': momentMonth(7),
      'finished': 330,
      'aim': 200, 
    },
    {
      'id': momentMonth(8),
      'date': momentMonth(8),
      'finished': 280,
      'aim': 200, 
    },
    {
      'id': momentMonth(9),
      'date': momentMonth(9),
      'finished': 150,
      'aim': 200, 
    },
    {
      'id': momentMonth(10),
      'date': momentMonth(10),
      'finished': 370,
      'aim': 200, 
    },
    {
      'id': momentMonth(11),
      'date': momentMonth(11),
      'finished': 270,
      'aim': 200, 
    },
  ]
}
