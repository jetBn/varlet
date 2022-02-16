import{_ as n}from"./elevation.55003d42.js";import{e as c,o as d,c as h,a as s,i as t,j as e,m as a,U as o}from"./vendor.4723551d.js";const r={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u6298\u53E0\u9762\u677F",-1),j=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002")],-1),m={class:"card"},g=s("h3",null,"\u5F15\u5165",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Collapse, CollapseItem } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(Collapse).use(CollapseItem)
`)])],-1),v={class:"card"},_=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),f=s("p",null,[a("\u901A\u8FC7 "),s("code",null,"v-model"),a(" \u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\uFF0C"),s("code",null,"value"),a(" \u4E3A\u6570\u7EC4\u683C\u5F0F\u3002")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(" @"),s("span",{class:"hljs-attr"},"change"),a("="),s("span",{class:"hljs-string"},'"changeHandle"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(">")]),a("\u5185\u5BB9"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a("\u5185\u5BB9"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" value = ref(["),s("span",{class:"hljs-string"},"'1'"),a(`])

    `),s("span",{class:"hljs-keyword"},"const"),a(" changeHandle = "),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"val"),a(") =>")]),a(` {
      `),s("span",{class:"hljs-built_in"},"console"),a(`.log(val)
    }

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      value,
      changeHandle
    }
  }
}
`)])],-1),k={class:"card"},w=s("h3",null,"\u9690\u85CF\u8FB9\u8DDD",-1),x=s("p",null,[a("\u4F7F\u7528 "),s("code",null,"offset"),a(" \u5C5E\u6027\u9690\u85CF\u8FB9\u8DDD\u3002")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(),s("span",{class:"hljs-attr"},":offset"),a("="),s("span",{class:"hljs-string"},'"false"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(">")]),a("\u5185\u5BB9"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a("\u5185\u5BB9"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),z={class:"card"},N=s("h3",null,"\u624B\u98CE\u7434\u6A21\u5F0F",-1),I=s("p",null,[a("\u4F7F\u7528 "),s("code",null,"accordion"),a(" \u5C5E\u6027\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6B64\u65F6 "),s("code",null,"value"),a(" \u4E3A\u5B57\u7B26\u4E32\u3002")],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(),s("span",{class:"hljs-attr"},"accordion"),a(),s("span",{class:"hljs-attr"},":offset"),a("="),s("span",{class:"hljs-string"},'"false"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(">")]),a("\u5185\u5BB9"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a("\u5185\u5BB9"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),$=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" value = ref("),s("span",{class:"hljs-string"},"''"),a(`)

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      value
    }
  }
}
`)])],-1),A={class:"card"},B=s("h3",null,"\u7981\u7528",-1),H=s("p",null,[a("\u5728 "),s("code",null,"collapse-item"),a(" \u4E0A\u4F7F\u7528 "),s("code",null,"disabled"),a(" \u5C5E\u6027\u7981\u7528\u5F53\u524D\u9762\u677F\u3002")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"disabled = !disabled"'),a(),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"margin-bottom: 8px"'),a(">")]),a(`
  {{ disabled ? '\u542F\u7528' : '\u7981\u7528' }}
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(),s("span",{class:"hljs-attr"},":disabled"),a("="),s("span",{class:"hljs-string"},'"disabled"'),a(">")]),a(`
    \u5185\u5BB9
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(),s("span",{class:"hljs-attr"},":disabled"),a("="),s("span",{class:"hljs-string"},'"disabled"'),a(">")]),a(`
    \u5185\u5BB9
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),a("("),s("span",{class:"hljs-params"}),a(")")]),a(` {
    `),s("span",{class:"hljs-keyword"},"const"),a(" value = ref(["),s("span",{class:"hljs-number"},"1"),a(`])
    `),s("span",{class:"hljs-keyword"},"const"),a(" disabled = ref("),s("span",{class:"hljs-literal"},"false"),a(`)

    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      value,
      disabled
    }
  }
}
`)])],-1),E={class:"card"},T=s("h3",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),U=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"value"'),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"title"),a("="),s("span",{class:"hljs-string"},'"\u8FD9\u662F\u6807\u9898"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"1"'),a(),s("span",{class:"hljs-attr"},"icon"),a("="),s("span",{class:"hljs-string"},'"account-circle"'),a(">")]),a(`
    \u8FD9\u662F\u5185\u5BB9
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-collapse-item"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"2"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"title"),a(">")]),a("\u8FD9\u662F\u6807\u9898"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"icon"),a(">")]),a("^_^"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
    \u8FD9\u662F\u5185\u5BB9
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse-item"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-collapse"),a(">")]),a(`
`)])],-1),q=o('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>Collapse \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name</td><td>\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A <em>string | number</em><br> \u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u8DDD</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>CollapseItem \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7D22\u5F15\u503C</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>\u9762\u677F\u6807\u9898</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon \u7684\u540D\u79F0</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528\u9762\u677F</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3></div><div class="card"><h3>Collapse \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td><td><code>value: \u7C7B\u578B\u4E0E v-model \u7ED1\u5B9A\u7684\u503C\u4E00\u81F4</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3></div><div class="card"><h3>CollapseItem \u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9762\u677F\u7684\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>\u9762\u677F\u7684\u6807\u9898</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7 icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',9);function D(F,G,J,K,L,M){const l=c("var-site-code-example");return d(),h("div",p,[i,j,s("div",m,[g,t(l,null,{default:e(()=>[u]),_:1})]),s("div",v,[_,f,t(l,null,{default:e(()=>[b]),_:1}),t(l,null,{default:e(()=>[y]),_:1})]),s("div",k,[w,x,t(l,null,{default:e(()=>[C]),_:1})]),s("div",z,[N,I,t(l,null,{default:e(()=>[V]),_:1}),t(l,null,{default:e(()=>[$]),_:1})]),s("div",A,[B,H,t(l,null,{default:e(()=>[P]),_:1}),t(l,null,{default:e(()=>[S]),_:1})]),s("div",E,[T,t(l,null,{default:e(()=>[U]),_:1})]),q])}var R=n(r,[["render",D]]);export{R as default};
