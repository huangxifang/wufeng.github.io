import{_ as e,c as a}from"./app.44f8184c.js";const s={},n=a(`<h1 id="docker\u5B89\u88C5elasticsearch" tabindex="-1"><a class="header-anchor" href="#docker\u5B89\u88C5elasticsearch" aria-hidden="true">#</a> docker\u5B89\u88C5elasticsearch</h1><p>1.\u8BBE\u7F6Emax_map_count\u4E0D\u80FD\u542F\u52A8es\u4F1A\u542F\u52A8\u4E0D\u8D77\u6765</p><h2 id="\u521B\u5EFAelastic\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAelastic\u7F51\u7EDC" aria-hidden="true">#</a> \u521B\u5EFAelastic\u7F51\u7EDC</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> network create elastic
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5elasticsearch" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5elasticsearch" aria-hidden="true">#</a> \u5B89\u88C5elasticsearch</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name es --net elastic -p <span class="token number">9200</span>:9200 -p <span class="token number">9300</span>:9300 -e <span class="token string">&quot;discovery.type=single-node&quot;</span> -e <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx512m&quot;</span> -t elasticsearch:8.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><blockquote><p>Elasticsearch security features have been automatically configured! -&gt; Authentication is enabled and cluster connections are encrypted.</p></blockquote><p>-&gt; Password for the elastic user (reset with <code>bin/elasticsearch-reset-password -u elastic</code>): R+tTvVN5xhdlOrTh27kO</p><p>-&gt; HTTP CA certificate SHA-256 fingerprint: 3ec8813e61a532db3f2e4e718cf75c444e76ba5ce113860f05a6b87d53740d7f</p><p>-&gt; Configure Kibana to use this cluster:</p><ul><li>Run Kibana and click the configuration link in the terminal when Kibana starts.</li><li>Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes): eyJ2ZXIiOiI4LjAuMCIsImFkciI6WyIxNzIuMTguMC4zOjkyMDAiXSwiZmdyIjoiM2VjODgxM2U2MWE1MzJkYjNmMmU0ZTcxOGNmNzVjNDQ0ZTc2YmE1Y2UxMTM4NjBmMDVhNmI4N2Q1Mzc0MGQ3ZiIsImtleSI6Il8ySWFZSUFCWTNKLUxiNjY4eFJkOkJoZlcySkd3U3Nhcm1xRU9qVFFiMkEifQ==</li></ul><p>-&gt; Configure other nodes to join this cluster:</p><ul><li><p>Copy the following enrollment token and start new Elasticsearch nodes with <code>bin/elasticsearch --enrollment-token &lt;token&gt;</code> (valid for the next 30 minutes): eyJ2ZXIiOiI4LjAuMCIsImFkciI6WyIxNzIuMTguMC4zOjkyMDAiXSwiZmdyIjoiM2VjODgxM2U2MWE1MzJkYjNmMmU0ZTcxOGNmNzVjNDQ0ZTc2YmE1Y2UxMTM4NjBmMDVhNmI4N2Q1Mzc0MGQ3ZiIsImtleSI6IkFXSWFZSUFCWTNKLUxiNjY4eFdCOmVqcUFNUUh5UlBTWjQ2b3JSRFIyWEEifQ==</p><p>If you&#39;re running in Docker, copy the enrollment token and run: <code>docker run -e &quot;ENROLLMENT_TOKEN=&lt;token&gt;&quot; docker.elastic.co/elasticsearch/elasticsearch:8.0.0</code></p></li></ul><hr><h2 id="\u5B89\u88C5kibana" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5kibana" aria-hidden="true">#</a> \u5B89\u88C5kibana</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name kibana --net elastic -p <span class="token number">5601</span>:5601 kibana:8.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u62F7\u8D1Delastcisearch\u914D\u7F6E\u6587\u4EF6\u5230es" tabindex="-1"><a class="header-anchor" href="#\u62F7\u8D1Delastcisearch\u914D\u7F6E\u6587\u4EF6\u5230es" aria-hidden="true">#</a> \u62F7\u8D1Delastcisearch\u914D\u7F6E\u6587\u4EF6\u5230es</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> /usr/local/docker/elasticsearch/config/elasticsearch.yml es:/usr/share/elasticsearch/config/elasticsearch.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>docker cp /usr/local/docker/kibana/config/kibana.yml kibana:/usr/share/kibana/config/kibana.yml</p><p>elasticsearch.username: &quot;wufeng&quot; elasticsearch.password: &quot;wufeng&quot; i18n.locale: &quot;zh-CN&quot;</p>`,21);function c(i,t){return n}var l=e(s,[["render",c],["__file","docker-elasticsearch.html.vue"]]);export{l as default};