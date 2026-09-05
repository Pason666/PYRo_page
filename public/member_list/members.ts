// electronic
export const XiaWu = {
  avatar: 'https://github.com/vod-x.png',
  name: '夏伍',
  title: 'QQ:2665574681',
  desc: '26赛季项目管理，25赛季英雄电控，24赛季英雄电控',
  links: [
    { icon: 'github', link: 'https://github.com/vod-x' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/432161819' },
    { icon: 'zhihu', link: 'https://www.zhihu.com/people/65-71-65-76-57' },
    { icon: 'csdn', link: 'https://blog.csdn.net/The__Xia' },
    { icon: 'dji', link: 'https://bbs.robomaster.com/user/89435' }
  ]
}

export const Lucky = {
  avatar: 'https://github.com/zhou-ee.png',
  name: 'Lucky',
  title: 'QQ:2585102045',
  desc: '26赛季英雄电控，25赛季英雄电控',
  links: [
    { icon: 'github', link: 'https://github.com/zhou-ee' },
  ]
}

export const MekCraftLi =    {
        avatar: 'https://github.com/MekCraftLi.png',
        name: 'MekCraftLi',
        title: 'QQ:2653603048',
        desc:'26赛季步兵电控，25赛季步兵电控，24赛季步兵电控',
        links:[
            {icon:'github', link : 'https://github.com/MekCraftLi'},
        ]
    }

export const Pason = {
  avatar: 'https://github.com/Pason666.png',
  name: 'Pason',
  title: 'QQ:110419260',
  desc: '26赛季哨兵电控，25赛季哨兵电控',
  links: [
    { icon: 'github', link: 'https://github.com/Pason666' },
    { icon: 'dji', link: 'https://bbs.robomaster.com/user/16737991?tab=article' }
  ]
}

export const LaoBo = {
        avatar: 'https://github.com/RenshengJi.png',
        name: '人生几何',
        title: '主页: renshengji.github.io',
        desc:'25赛季队长，24赛季视觉，23赛季视觉',
        links:[
            {icon:'github', link : 'https://github.com/RenshengJi'},
        ]
    }


export const WangSir = {
  avatar: 'https://github.com/wangonewen.png',
  name: '王艺文',
  title: 'QQ:1825686853',
  desc: '24赛季项目管理，23赛季大符视觉，22赛季步兵电控，21赛季英雄电控',
  links: [
    { icon: 'github', link: 'https://github.com/wangonewen' },
  ]
}

export const FangDian = {
    avatar: 'https://github.com/SARSfang.png',
    name: '方典',
    title: 'TEL/VX:18720066325',
    desc:'22-24赛季宣传经理',
    links:[
        {icon:'github', link : 'https://github.com/SARSfang'},
        {icon:'bilibili', link: 'https://space.bilibili.com/22491017'},
        {icon:'dji', link:'https://bbs.robomaster.com/user/75365'}
    ]
}

export const LiuYuQi = {
    avatar: 'https://github.com/cqwdyzm.png',
    name: '刘玉琪',
    title: 'QQ:1652713178 ; wx：cqwdyzm',
    desc:'24赛季运营，23赛季运营/电控，22赛季电控，21赛季电控梯队，',
    links:[
        {icon:'github', link : 'https://github.com/cqwdyzm'},
        {icon:'dji', link:'https://bbs.robomaster.com/user/58882?tab=article'}
    ]
}
export const MaoMao = {
        avatar: 'https://github.com/YzmYalier.png',
        name: '杨泽鸣',
        title: 'QQ:2252283758',
        desc:'26赛季队长，25赛季视觉，24赛季视觉',
        links:[
            {icon:'github', link : 'https://github.com/YzmYalier'},
            {icon: 'zhihu', link:'https://www.zhihu.com/people/xfryar'},
        ]
    }

export const Juicer = {
    avatar: 'https://github.com/plumery-juicer.png',
    name: 'Juicer',
    title: 'QQ:1325626267',
    desc:'26赛季电控，25赛季机械',
    links:[
        {icon:'github', link : 'https://github.com/plumery-juicer'},
    ]
}

// 成员字典，方便通过名称查找
export const members = {
  XiaWu,
  Lucky,
  MekCraftLi,
  Pason,
  LaoBo,
  WangSir,
  FangDian,
  LiuYuQi,
  MaoMao,
  Juicer,
}

// 工具函数：通过成员名称获取作者数组
// 用法: author('Pason') 或 author(['XiaWu', 'Pason'])
export function author(name: string | string[]) {
  if (typeof name === 'string') {
    return [members[name as keyof typeof members]]
  }
  return name.map(n => members[n as keyof typeof members])
}