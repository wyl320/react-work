git 各种使用场景


git clone url     

git checkout -b daily/1.0.0     --首次切换分支，且自动复制代码过来

git add .
git commit -m "注释"
git push origin xx(daily)       -- 提交代码到远程分支


git checkout master     --切换到本地master

git pull origin master  --拉取远程master代码到本地合并(多人开发)

git merge daily/1.0.0   --拉取daily分支上的代码，合并到当前本地master上

git add .
git commit -m "注释"  
git push orgin master   --提交代码到远程master上。