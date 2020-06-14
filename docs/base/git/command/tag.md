## 标签管理

+ `git tag`：标签管理
```sh
git tag     # 显示当前所有标签

git tag v1.0          # 在当前提交记录打标签
git tag v1.1 0a2bce6  # 在指定记录处打标签
git tag -a v1.2 -m "@beta" 0a2bce6  # 打标签并指定标签说明

git push origin v1.0    # 推送标签到远程仓库
git push origin --tags  # 推送所有标签到远程仓库

git tag -d v1.2         # 删除指定标签
git push origin :refs/tags/v0.9  # 删除远程仓库的标签
```

+ `git show`：显示标签
```sh
git show v1.0           # 显示标签所在的提交详情
```