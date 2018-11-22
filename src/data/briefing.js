// 首页 - 简报数据
import moment from 'moment';

const _date = (d) => moment().subtract(d, 'days').format('YYYY-MM-DD');
const _createTime = (d) => moment().subtract(d, 'days').format('YYYY-MM-DD HH:mm:ss');

export const briefing = [
  {
    'id': '001',
    'title': '新增客户',
    'total': 12,
    'list': [
      {
        id: '101',
        name: '国家电网有限公司',
        address: '北京',
        wealth: '235809970'
      },
      {
        id: '102',
        name: '中国石油化工集团',
        address: '北京',
        wealth: '220974455'
      },
      {
        id: '103',
        name: '中国石油天然气集团',
        address: '上海',
        wealth: '220335751'
      },
      {
        id: '104',
        name: '中国工商银行股份有限公司',
        address: '北京',
        wealth: '108505900'
      },
      {
        id: '105',
        name: '中国建筑股份有限公司',
        address: '北京',
        wealth: '105410650'
      },
      {
        id: '106',
        name: '中国平安保险股份有限公司',
        address: '上海',
        wealth: '97457000'
      },
      {
        id: '107',
        name: '中国建设银行股份有限公司',
        address: '北京',
        wealth: '87063943'
      },
      {
        id: '108',
        name: '上海汽车集团股份有限公司',
        address: '上海',
        wealth: '87063943'
      },
      {
        id: '109',
        name: '中国农业银行股份有限公司',
        address: '北京',
        wealth: '82702000'
      },
      {
        id: '110',
        name: '中国移动通信股份有限公司',
        address: '上海',
        wealth: '74451800'
      },
      {
        id: '111',
        name: '中国铁路工程集团有限公司',
        address: '上海',
        wealth: '69456232'
      },
      {
        id: '112',
        name: '华为投资控股有限公司',
        address: '深圳',
        wealth: '60362100'
      },
    ]
  },
  {
    'id': '002',
    'title': '新增联系人',
    'total': 16,
    'list': [
      {
        id: '101',
        name: '马化腾',
        phone: '13811148800',
        componey: '腾讯'
      },
      {
        id: '102',
        name: '马云',
        phone: '13811148801',
        componey: '阿里巴巴'
      },
      {
        id: '103',
        name: '李彦宏',
        phone: '13811148802',
        componey: '百度'
      },
      {
        id: '104',
        name: '丁磊',
        phone: '13811148803',
        componey: '网易'
      },
      {
        id: '105',
        name: '张朝阳',
        phone: '13811148804',
        componey: '搜狐'
      },
      {
        id: '106',
        name: '柳传志',
        phone: '13811148805',
        componey: '联想'
      },
      {
        id: '107',
        name: '任正非',
        phone: '13811148806',
        componey: '华为'
      },
      {
        id: '108',
        name: '刘强东',
        phone: '13811148807',
        componey: '京东'
      },
      {
        id: '109',
        name: '小米',
        phone: '13811148808',
        componey: '雷军'
      },
      {
        id: '110',
        name: '史玉柱',
        phone: '13811148809',
        componey: '巨人'
      },
      {
        id: '111',
        name: '许家印',
        phone: '13811148810',
        componey: '恒大'
      },
      {
        id: '112',
        name: '俞敏洪',
        phone: '13811148811',
        componey: '新东方'
      },
      {
        id: '113',
        name: '李开复',
        phone: '13811148812',
        componey: '创新工场'
      },
      {
        id: '114',
        name: '张瑞敏',
        phone: '13811148813',
        componey: '海尔'
      },
      {
        id: '115',
        name: '王石',
        phone: '13811148814',
        componey: '万科'
      },
      {
        id: '116',
        name: '张一鸣',
        phone: '13811148815',
        componey: '今日头条'
      },
    ]
  },
  {
    'id': '003',
    'title': '新增商机',
    'total': 5,
    'list': [
      {
        id: '101',
        name: '太阳能热水器用橡塑件',
        description: '太能能热水器用尾座、硅圈、防尘圈',
        componey: '日出东方太阳能股份有限公司'
      },
      {
        id: '102',
        name: '城市越野大灯',
        description: '求购塑件城市越野大灯',
        componey: '个人'
      },
      {
        id: '103',
        name: '直缝钢管10吨',
        description: '求购直缝钢管10吨，目标价格1800元',
        componey: '临沂机械重工有限公司'
      },
      {
        id: '104',
        name: '电线电缆',
        description: '公司长期高价收购电线电缆，电缆铜，工厂电缆线，拆迁电缆线，设备电缆线。上面回收，诚信为本。',
        componey: '飞翔物资有限公司'
      },
      {
        id: '105',
        name: '太阳能热水器用橡塑件',
        description: '太能能热水器用尾座、硅圈、防尘圈',
        componey: '日出东方太阳能股份有限公司'
      },

    ]
  },
  {
    'id': '004',
    'title': '访客计划',
    'total': 3,
    'list': [
      {
        id: '101',
        date: moment().subtract(-1, 'days').format('YYYY.MM.DD'),
        city: '北京',
        linkman: '张小龙',
        wechat: 'mht001',
        detail: '微信小程序版本升级事宜！'
      },
      {
        id: '102',
        date: moment().subtract(-2, 'days').format('YYYY.MM.DD'),
        city: '深圳',
        linkman: '孙亚芳',
        wechat: 'syf001',
        detail: '华为荣耀12 Max销售事宜！'
      },
      {
        id: '103',
        date: moment().subtract(-3, 'days').format('YYYY.MM.DD'),
        city: '泰安',
        linkman: '王伟',
        wechat: '13811148807',
        detail: '此网站升级版本到Ant Design @2.13.11的注意事项！'
      },

    ]
  },
  {
    'id': '005',
    'title': '沟通日志',
    'total': 0,
    'list': [

    ]
  },
  {
    'id': '006',
    'title': '工作日志',
    'total': 6,
    'list': [
      {
        id: '101',
        date: _date(1),
        createTime: _createTime(1),
        type: 1,
        author: '胡彦斌',
        content: '大风大浪里翻滚，风平浪静中安稳，以为自己变得无坚不摧所向无敌，但到最后发现，所有无坚不摧也只是源于一颗变得不会再轻易为什么人或事起波澜的心，和修炼的一种可以迅速麻痹自己的能力。'
      },
      {
        id: '102',
        date: _date(2),
        createTime: _createTime(2),
        type: 1,
        author: '胡彦斌',
        content: '深夜感伤，借酒浇愁。'
      },
      {
        id: '103',
        date: _date(3),
        createTime: _createTime(3),
        type: 1,
        author: '胡彦斌',
        content: '再也没有那么多的欲语泪先流，大多数时候，只是默默的咽下这一切。'
      },
      {
        id: '104',
        date: _date(4),
        createTime: _createTime(4),
        type: 1,
        author: '胡彦斌',
        content: '它们摸不到，看不清，就像是一道不深不浅的疤，不痒也不痛，平时不会注意到它，只有在你静下来，有时间审视自己的每一寸的时候，才会想起。'
      },
      {
        id: '105',
        date: _date(5),
        createTime: _createTime(5),
        type: 1,
        author: '胡彦斌',
        content: '原来曾经这里有过一道没有流血就结痂了的疤。可笑的是，伤口划破的原因，有时候却记不起来了。'
      },
      {
        id: '106',
        date: _date(6),
        createTime: _createTime(6),
        type: 1,
        author: '胡彦斌',
        content: '然后忽然在某天恍然发现，当初拼了命想要忘记的人和事，真的就这样忘了。那些印迹淡到让你恍若一梦，甚至在心底怀疑，ta真的来过吗?'
      },

    ]
  },
]