import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import cailiaocankao from '@/views/modules/cailiaocankao/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jianzaocaiwu from '@/views/modules/jianzaocaiwu/list'
    import jianzaojindu from '@/views/modules/jianzaojindu/list'
    import jingfeiyugu from '@/views/modules/jingfeiyugu/list'
    import xiangmu from '@/views/modules/xiangmu/list'
    import xiangmuTuzhi from '@/views/modules/xiangmuTuzhi/list'
    import yanshouCailiao from '@/views/modules/yanshouCailiao/list'
    import yanshouChengguo from '@/views/modules/yanshouChengguo/list'
    import yanshouGongyi from '@/views/modules/yanshouGongyi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import dictionaryBumen from '@/views/modules/dictionaryBumen/list'
    import dictionaryCailiao from '@/views/modules/dictionaryCailiao/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHege from '@/views/modules/dictionaryHege/list'
    import dictionaryJianzaocaiwu from '@/views/modules/dictionaryJianzaocaiwu/list'
    import dictionaryJianzaojindu from '@/views/modules/dictionaryJianzaojindu/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXiangmu from '@/views/modules/dictionaryXiangmu/list'
    import dictionaryXiangmuTuzhi from '@/views/modules/dictionaryXiangmuTuzhi/list'
    import dictionaryXiangmuTuzhiYesno from '@/views/modules/dictionaryXiangmuTuzhiYesno/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBumen',
        name: '部门',
        component: dictionaryBumen
    }
    ,{
        path: '/dictionaryCailiao',
        name: '材料类型',
        component: dictionaryCailiao
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHege',
        name: '是否合格',
        component: dictionaryHege
    }
    ,{
        path: '/dictionaryJianzaocaiwu',
        name: '消费类型',
        component: dictionaryJianzaocaiwu
    }
    ,{
        path: '/dictionaryJianzaojindu',
        name: '进度类型',
        component: dictionaryJianzaojindu
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXiangmu',
        name: '项目类型',
        component: dictionaryXiangmu
    }
    ,{
        path: '/dictionaryXiangmuTuzhi',
        name: '图纸类型',
        component: dictionaryXiangmuTuzhi
    }
    ,{
        path: '/dictionaryXiangmuTuzhiYesno',
        name: '申请状态',
        component: dictionaryXiangmuTuzhiYesno
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }


    ,{
        path: '/cailiaocankao',
        name: '材料参考',
        component: cailiaocankao
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/jianzaocaiwu',
        name: '监造财务',
        component: jianzaocaiwu
      }
    ,{
        path: '/jianzaojindu',
        name: '监造进度',
        component: jianzaojindu
      }
    ,{
        path: '/jingfeiyugu',
        name: '经费预估',
        component: jingfeiyugu
      }
    ,{
        path: '/xiangmu',
        name: '项目',
        component: xiangmu
      }
    ,{
        path: '/xiangmuTuzhi',
        name: '项目图纸',
        component: xiangmuTuzhi
      }
    ,{
        path: '/yanshouCailiao',
        name: '材料验收',
        component: yanshouCailiao
      }
    ,{
        path: '/yanshouChengguo',
        name: '成果验收',
        component: yanshouChengguo
      }
    ,{
        path: '/yanshouGongyi',
        name: '工艺验收',
        component: yanshouGongyi
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
