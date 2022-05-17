# 思考
button标签demo里竟然不会显示？。？
适配了H5和PC端。
在js里写click事件时，发现只有H5的button能正常点击，切换回PC页面，发现没有点下去的动作。
PC端原本设置在右上方：
```
#buttons {
  top:0
  right:0
}
```
我有点不是很懂为什么会被覆盖掉，之后我更改了代码：
```
#buttons{
  top：45%
  right：0
}
```
有一个button在 id="demo" 的div里，都会使click点击失效。
