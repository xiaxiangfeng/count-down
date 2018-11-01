# 倒计时插件

> 倒计时插件

## 使用方式

``` js
import { clock } from './clock'
// 开始
const clockObj = clock('df_clock', '2018/01/01 00:00:00').start()
// 停止
clockObj.stop()
``` 

## 创建演示实例

``` bash
# 打包编译实例代码
# 用浏览器打开example文件夹下的index.html
npm run build
``` 

## 创建类库

``` bash
# 打包类库（把ts编译成es5代码）
npm run prepublish
``` 

## 演示地址
http://xiaxiangfeng.github.io/count-down/
