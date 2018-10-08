### [react-im 即时通讯](https://react-im.netlify.com)

#### WHAT IT IS
基于环信IMSDK搭建一个IM系统，包含单聊，登录，注册，更换头像，搜索用户等模块。

#### Techniques
- React全家桶
- Express + mongose + mLab: 由于环信SDK,自带登录，注册功能，本可以不需要后台。但环信不提供查询对应App下所有用户，只能查询好友，所有每当有用户注册时，后台数据库会保存。其次，环信对应用户没有设置头像功能，所以后台起着保存用户信息的作用。

#### Problem
1. 删除好友功能待完成。
2. 性能优化Perf未测试。
3. 有些交互可以用EventEmitter实现，却用了reducer,感觉数据处理那块比较混乱。
4. 聊天记录没有保存,环信本不支持保存聊天记录功能，如何用后台保存聊天记录待完成。

#### Gain
1. 分离组件时，按功能来分，每个组件都有自己的view,action,reducer,遵循高内聚，低耦合。