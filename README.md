# [ChrAlpha 的好伙伴](https://blog.ichr.me/links/)

你这是要和我交换友链嘛？诶嘿嘿～

## 基本要求

为不使 ChrAlpha 的友链页沦为引流的工具，还是得有些规矩的说。

友链友链，先友后链。最好先混个脸熟再来交换呢！除非你的内容真的让我一眼爱上，否则可别怪我直接关掉初次见面的人的请求哈。

网站的域名是很重要的，免费域名可以绕路了哦。

>   任何包含于 Public Suffix List 的免费子域名服务，如 `github.io`，`gitlab.io`，`now.sh` 等，均不包含于「免费域名」之列。

内容有触犯中国大陆及香港地区法律法规、违背普世价值观的还是不要了吧。原创实质性内容占比一定要足够高，充斥着采集、洗稿的网站也是很讨厌的。宁可长草，不滥竽充数。

如果你自认为符合这些要求，那就继续往下看看如何和 ChrAlpha 交换友链吧！

## 如何交换

都说是交换，那也还请先将 ChrAlpha 先添加到你的友链中：

-   名称：`ChrAlpha 的幻想乡` 或者 `ChrAlpha's` 
-   URL：`https://ichr.me` 或者 `https://blog.ichr.me` 
-   Slogan：`你必须拼尽全力，才能显得毫不费力` （非强制，也可以按你认为的来填）
-   头像：[链接](https://friends.ichr.me/img/ichr.me.jpg) （如果无需头像就不用管它啦）

然后，也要让我知道你的信息——修改 `data.yml`：

-   将一张中心对称、不大于 1M 的头像提交至 `src/img/` 下，命名格式为 `[domain].[format]`，如 `blog.ichr.me.png`

-   按照以下格式将你的信息添加到 `data.yml` 文件中

    ```yaml
    - name: "站点名称"  # 请使用双引号包裹
      url: https://example.com  # 你的网站的 URL
      avatar: example.com.png  # 头像的文件名
      desc: "Hello, World"  # Slogan，请使用双引号包裹
    ```

-   确保你所提供的所有网站信息（头像、描述等）适合展示给任何年龄段的任何人

-   完成后请新建一个 Pull Request

-   当你的 Pull Request 被通过、合并后，你的网站就将在 24 小时内展示在 [ChrAlpha 的友链页面](https://blog.ichr.me/links/)。

别交换完友链就走了哦，还是要经常互访互动的。

---

想法参考自 [SukkaW/Friends](https://github.com/SukkaW/Friends)，ChrAlpha 保留一切最终解释权。