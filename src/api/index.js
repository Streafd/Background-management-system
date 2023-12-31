// 将四个模块请求的接口函数同一暴露
import * as trademark from './product/tradmark'
import * as attrs from './product/attr'
import * as spu from './product/spu'
import * as sku from './product/sku'

import * as user from './acl/user'
import role from './acl/role'
import permission from './acl/permission'

export default {
  trademark,
  attrs,
  spu,
  sku,
  user,
  role,
  permission
}
