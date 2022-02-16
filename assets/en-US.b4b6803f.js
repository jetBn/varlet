import{_ as l}from"./elevation.55003d42.js";import{e as o,o as r,c as n,a as s,i as d,j as a,m as t,U as c}from"./vendor.4723551d.js";const h={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"PullRefresh",-1),u=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Provides a drop-down refresh interaction.")],-1),f={class:"card"},m=s("h3",null,"install",-1),j=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { PullRefresh } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(PullRefresh)
`)])],-1),_={class:"card"},v=s("h3",null,"Basic Usage",-1),g=s("p",null,[t("The refresh event will be Emitted when pull refresh, you should set "),s("code",null,"v-model"),t(" to "),s("code",null,"true"),t(" at the beginning of the event indicates that loading is under way, and setting "),s("code",null,"v-model"),t(" to "),s("code",null,"false"),t(" after completion indicates that loading is over.")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"isRefresh"'),t(" @"),s("span",{class:"hljs-attr"},"refresh"),t("="),s("span",{class:"hljs-string"},'"refresh"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(`
    `),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"(item, index) in data"'),t(`
    `),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"index"'),t(`
    `),s("span",{class:"hljs-attr"},"border"),t(`
  >`)]),t(`
    {{ item + ' ' + (index + 1) }}
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),t(">")]),t(`
`)])],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" data1 = "),s("span",{class:"hljs-built_in"},"Array"),t("("),s("span",{class:"hljs-number"},"10"),t(").fill("),s("span",{class:"hljs-string"},"'List Item'"),t(`)
`),s("span",{class:"hljs-keyword"},"const"),t(" data2 = "),s("span",{class:"hljs-built_in"},"Array"),t("("),s("span",{class:"hljs-number"},"10"),t(").fill("),s("span",{class:"hljs-string"},"'This is new List Item'"),t(`)

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" isRefresh = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
    `),s("span",{class:"hljs-keyword"},"const"),t(` data = ref(data1)

    `),s("span",{class:"hljs-keyword"},"const"),t(" refresh = "),s("span",{class:"hljs-function"},"() =>"),t(` {
      `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
        data.value = data.value[`),s("span",{class:"hljs-number"},"0"),t("] === "),s("span",{class:"hljs-string"},"'List Item'"),t(` ? data2 : data1
        isRefresh.value = `),s("span",{class:"hljs-literal"},"false"),t(`
      }, `),s("span",{class:"hljs-number"},"2000"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      refresh,
      isRefresh,
      data
    }
  }
}
`)])],-1),k=c('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>Emitted after pulling refresh</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Default slot</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',5);function w(x,S,P,A,C,R){const e=o("var-site-code-example");return r(),n("div",i,[p,u,s("div",f,[m,d(e,null,{default:a(()=>[j]),_:1})]),s("div",_,[v,g,d(e,null,{default:a(()=>[b]),_:1}),d(e,null,{default:a(()=>[y]),_:1})]),k])}var T=l(h,[["render",w]]);export{T as default};
