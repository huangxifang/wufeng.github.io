import { _ as _export_sfc, e as createStaticVNode } from "./app.29cea979.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="git\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Git\u5E38\u7528\u547D\u4EE4</h1><h2 id="git-\u5168\u5C40\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#git-\u5168\u5C40\u8BBE\u7F6E" aria-hidden="true">#</a> Git \u5168\u5C40\u8BBE\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;\u65E0\u98CE&quot;</span>\n<span class="token function">git</span> config --global user.email <span class="token string">&quot;2906568991@qq.com&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u521B\u5EFA-git-\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-git-\u4ED3\u5E93" aria-hidden="true">#</a> \u521B\u5EFA git \u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> an_dan_si_sure\n<span class="token builtin class-name">cd</span> an_dan_si_sure\n<span class="token function">git</span> init\n<span class="token function">touch</span> README.md\n<span class="token function">git</span> <span class="token function">add</span> README.md\n<span class="token function">git</span> commit -m <span class="token string">&quot;first commit&quot;</span>\n<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/wufengH/an_dan_si_sure.git\n<span class="token function">git</span> push -u origin master\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5DF2\u6709\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u6709\u4ED3\u5E93" aria-hidden="true">#</a> \u5DF2\u6709\u4ED3\u5E93?</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> existing_git_repo\n<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/wufengH/an_dan_si_sure.git\n<span class="token function">git</span> push -u origin master\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u8FD4\u56DE\u4E0A\u4E00\u6B21commit-\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u4E0A\u4E00\u6B21commit-\u63D0\u4EA4" aria-hidden="true">#</a> \u8FD4\u56DE\u4E0A\u4E00\u6B21commit \u63D0\u4EA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --hard HEAD\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5F3A\u5236\u8986\u76D6\u672C\u5730\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u8986\u76D6\u672C\u5730\u4ED3\u5E93" aria-hidden="true">#</a> \u5F3A\u5236\u8986\u76D6\u672C\u5730\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --hard origin/master\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5207\u6362\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u4ED3\u5E93" aria-hidden="true">#</a> \u5207\u6362\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout \u5206\u652F\u540D\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u653E\u5F03\u672C\u5730\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u653E\u5F03\u672C\u5730\u4FEE\u6539" aria-hidden="true">#</a> \u653E\u5F03\u672C\u5730\u4FEE\u6539</h2><ul><li><ol><li>\u653E\u5F03\u6240\u6709\u4FEE\u6539</li></ol></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><ol start="2"><li>\u653E\u5F03\u67D0\u4E2A\u6587\u4EF6\u4FEE\u6539 (\u6BD4\u5982\uFF1A git checkout -- readme.md \uFF0C\u4E0D\u8981\u5FD8\u8BB0\u4E2D\u95F4\u7684 \u201C--\u201D \uFF0C\u4E0D\u5199\u5C31\u6210\u4E86\u68C0\u51FA\u5206\u652F\u4E86\uFF01\uFF01)</li></ol></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -- filename\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>', 18);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var common_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "common.html.vue"]]);
export { common_html as default };
