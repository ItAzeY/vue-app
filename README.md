# vue-app

> 去哪旅行app

## Build Setup

### 引入icon问题

文件中要引入iconfont, 我们直接再 main.js 中引入, 降低文件的多次引入

### 别名问题

再`main.js`中, 我们写路径的时候, 可以把一些公用的路径起一个别名, 来简化代码的可读性.
配置文件再 build-->webpack.base.conf.js 中的 resolve-->alias,可以添加修改别名设置
如果你要再css等模块中使用别名, 那么你需要加上 `~`紧跟别名
当你设置完这之后, 保存的时候, 编译会报错, 这个需要重新编译打包

### stylus 的使用

后缀名是 `styl` 
定义变量用 `$` 开头