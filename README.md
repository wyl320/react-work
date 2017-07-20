# react-work

此工程为模板工程，有学习记录，组件记录以及。

### 项目介绍

	test 中存放各种自己编写的demo，
	component 为全局组件目录
	css 为全局css 样式目录
	lib 自己的公用组件库(和业务无关的组件库)

	index.js 为默认demo展示(和test目录中的demo相同，具有同样的目录和组件)

下载代码

> git clone https://github.com/wyl320/react-work.git

安装

> npm install 或者 cnpm install

开始运行

> npm start

测试地址：

http://localhost:8080/xxx.html

### selected-linkage	意图编写一个三级联动组件。
-----------------start-数据格式----------------

> 	{"data":[
		{"id":"1","pid":"1","name":"北京市"},
		{"id":"1001","pid":"0","name":"朝阳区"},
		{"id":"1002","pid":"0","name":"大兴区"},
		{"id":"1003","pid":"0","name":"海淀区"},
		{"id":"2","pid":"2","name":"湖北省"},
		{"id":"2001","pid":"1","name":"武昌区"},
		{"id":"2002","pid":"1","name":"汉口区"},
		{"id":"2003","pid":"1","name":"东湖高新区"},
		{"id":"3","pid":"3","name":"湖北省"},
		{"id":"3001","pid":"1","name":"武昌区"},
		{"id":"3002","pid":"1","name":"汉口区"},
		{"id":"3003","pid":"1","name":"东湖高新区"}
	]}

-----------------end-----------------
我已经完成xx模块的编写工程。