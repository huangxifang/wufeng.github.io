import{_ as s,c as a}from"./app.7974f5b7.js";const e={},n=a(`<h1 id="\u865A\u62DF\u673A\u5B9D\u5854\u9762\u677Fmysql\u5916\u8FDE" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u673A\u5B9D\u5854\u9762\u677Fmysql\u5916\u8FDE" aria-hidden="true">#</a> \u865A\u62DF\u673A\u5B9D\u5854\u9762\u677Fmysql\u5916\u8FDE</h1><h2 id="\u901A\u8FC7ssh\u9762\u677F\u94FE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7ssh\u9762\u677F\u94FE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u901A\u8FC7ssh\u9762\u677F\u94FE\u63A5\u6570\u636E\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u5BC6\u7801</p><h2 id="\u751F\u6210\u4E00\u4E2Aroot\u8D26\u6237" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u4E00\u4E2Aroot\u8D26\u6237" aria-hidden="true">#</a> \u751F\u6210\u4E00\u4E2Aroot\u8D26\u6237</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>grant all on *.* to root@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;mysql root\u5BC6\u7801&#39;</span> with grant option<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540Ectrl+d\u9000\u51FAmysql</p><h2 id="\u91CD\u542Fmysql" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542Fmysql" aria-hidden="true">#</a> \u91CD\u542Fmysql</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> mysql restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F: \u6570\u636E\u5E93\u6743\u9650\u8BBE\u4E3A<code>\u6240\u6709\u4EBA</code></p>`,10);function r(i,l){return n}var d=s(e,[["render",r],["__file","connect-mysql.html.vue"]]);export{d as default};
