(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{564:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[t._v("Git 是分布式的版本管理系统，而 CVS 和 SVN 都是集中式的")]),t._v(" "),a("li",[t._v("运行速度极快")]),t._v(" "),a("li",[t._v("使用不用联网，本地即可提交，可联网后再同步到远程仓库")]),t._v(" "),a("li",[t._v("强大的分支管理功能，还可以打标签")])]),t._v(" "),a("h2",{attrs:{id:"状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态"}},[t._v("#")]),t._v(" 状态")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Nothing to commit, working tree clean")]),t._v("：工作区无目录。"),a("code",[t._v("commit")]),t._v(" 之后的状态")]),t._v(" "),a("li",[a("strong",[t._v("Untracked files")]),t._v("：未跟踪的文件列表。即新建了文件，还未 "),a("code",[t._v("add")]),t._v(" 到暂存区")]),t._v(" "),a("li",[a("strong",[t._v("Changes not staged for commit")]),t._v("：已跟踪的文件发生更改。需要再次 "),a("code",[t._v("add")]),t._v(" 到暂存区")]),t._v(" "),a("li",[a("strong",[t._v("Changes to be committed")]),t._v("：等待提交。修改的文件已经添加到暂存区，可以使用 "),a("code",[t._v("commit")]),t._v(" 提交")])]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("工作区(Working Directory)")]),t._v("：当前代码目录，能在本地文件夹看到的目录")]),t._v(" "),a("li",[a("strong",[t._v("暂存区(Staged/Index)")]),t._v("：临时保存文件的区域，位于版本库(.git)目录下，"),a("code",[t._v("commit")]),t._v(" 只会提交该区域的更改\n"),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("add")]),t._v(" 命令对工作区文件跟踪后，它们会进入暂存区")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("restore")]),t._v(" 命令将文件移出暂存区")]),t._v(" "),a("li",[t._v("进入暂存区的文件发生更改后，需要再次 "),a("code",[t._v("add")]),t._v(" 进入暂存区")])])]),t._v(" "),a("li",[a("strong",[t._v("提交(commit)")]),t._v("：将暂存区的所有更改一次性提交到分支上，并携带提交说明")]),t._v(" "),a("li",[a("strong",[t._v("分支(branch)")]),t._v("：从某个分支的某个 "),a("code",[t._v("commit")]),t._v(" 处复制出来的一份记录\n"),a("ul",[a("li",[t._v("分支像树叉一样，从某分支 “长” 出来")]),t._v(" "),a("li",[t._v("分支还可以合并回某分支，相当于又 “长” 回去")]),t._v(" "),a("li",[t._v("分支可以被删除")]),t._v(" "),a("li",[t._v("主干分支(master)：也是默认分支，一般约定为稳定版本分支")])])]),t._v(" "),a("li",[a("strong",[t._v("HEAD")]),t._v("：头指针，指向当前分支的所处的版本\n"),a("ul",[a("li",[t._v("创建/切换分支时，HEAD 会移动到另一个分支")]),t._v(" "),a("li",[a("code",[t._v("commit")]),t._v(" 后，HEAD 会移动到该 "),a("code",[t._v("commit")]),t._v(" 处")]),t._v(" "),a("li",[a("code",[t._v("reset")]),t._v(" 后，HEAD 会回退到指定 "),a("code",[t._v("commit")]),t._v(" 处")])])]),t._v(" "),a("li",[a("strong",[t._v("标签(tag)")]),t._v("：对某个 commit 的标记，用于快速定位和管理版本")]),t._v(" "),a("li",[a("strong",[t._v("远程仓库(remote)")]),t._v("：用于多人协作\n"),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("clone")]),t._v(" 从远程仓库拷贝代码")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("fetch")]),t._v("/"),a("code",[t._v("pull")]),t._v(" 从远程仓库拉取代码变更")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("push")]),t._v(" 将本地代码推送到远程仓库")])])])]),t._v(" "),a("h2",{attrs:{id:"连接远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接远程仓库"}},[t._v("#")]),t._v(" 连接远程仓库")]),t._v(" "),a("ol",[a("li",[t._v("创建 SSH Key，根据提示一直回车确定即可")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"youremail@example.com"')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在用户根目录下的找到 .ssh/ 目录，里面分别有 id_rsa 和 id_rsa.pub 两个文件，以文本方式打开并拷贝 id_rsa.pub 的内容")]),t._v(" "),a("li",[t._v("在远程仓库上找到管理 SSH Key 的地方，将公钥内容粘贴进去，并保存")]),t._v(" "),a("li",[t._v("关联仓库\n"),a("ul",[a("li",[t._v("-u 参数：关联远程仓库，以后操作时可以省略")]),t._v(" "),a("li",[t._v("-f 参数：强制推送至远程仓库，此操作会覆盖远程仓库的所有内容，并清空提交树")])])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 场景1：远程仓库为空仓库时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@gitee.com:username/repo_name.git  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master -u   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联推送到远程仓库 origin 的 master 分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 场景2：更换了电脑，重新生成并添加了 SSH Key 到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@gitee.com:username/repo_name.git  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将远程仓库拉取到本地，并且自动关联(添加了 SSH Key)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" repo_name\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hello.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add hello.txt"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程仓库 origin 的 master 分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 场景3：远程仓库不是空的，但忘记 clone 就直接开发了，提交时才发现还未关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@gitee.com:username/repo_name.git  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提示 fatal: refusing to merge unrelated histories")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master --allow-unrelated-histories    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加参数再拉取，并会关联远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提示：Automatic merge failed; fix conflicts and then commit the result. 说明需要处理冲突")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开出现冲突的文件处理冲突后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"merge and mixed"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加 merge 的提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程仓库")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 场景4：与场景3一样，但远程仓库是个人的，并不关心提交记录，而且我比较暴躁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@gitee.com:username/repo_name.git  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master -uf    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联远程仓库，并覆盖远程仓库的内容和提交树")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("一般来说，开发前的第一步都是 "),a("code",[t._v("clone")]),t._v(" 远程仓库，即场景2的做法")]),t._v(" "),a("li",[t._v("场景3会出现一个问题：提交树上会出现一个外部分支的插入，而不是从原分支创建分支后合并")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正常的提交树      场景3")]),t._v("\n*                 *\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" *               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" *\n*/                *\n")])])]),a("ul",[a("li",[t._v("场景4：当不再需要远程仓库的代码，或者需要清空提交树使才使用")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);