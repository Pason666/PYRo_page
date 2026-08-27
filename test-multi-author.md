# 测试多作者

这是一个测试页面，用于验证多个作者的显示。

## 单个作者测试
<Author name="Pason" />

## 多个作者测试（方式1：字符串数组）
<Author name="['XiaWu', 'Pason']" />

## 多个作者测试（方式2：v-bind）
<Author :name="['XiaWu', 'Pason']" />
