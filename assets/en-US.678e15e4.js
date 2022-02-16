import{_ as l}from"./elevation.55003d42.js";import{e as o,o as c,c as n,a as t,i as d,j as a,m as e,U as r}from"./vendor.4723551d.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"Input",-1),u={class:"card"},g=t("h3",null,"Install",-1),j=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { Input } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(Input)
`)])],-1),m={class:"card"},v=t("h3",null,"Basic Usage",-1),_=t("p",null,"The behavior of the input box is consistent with the basic content, and the user can always get a string that conforms to the `type rule when inputting",-1),f=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(" value = ref("),t("span",{class:"hljs-string"},"''"),e(`)

    `),t("span",{class:"hljs-keyword"},"return"),e(` { value }
  }
}
`)])],-1),y=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(" />")]),e(`
`)])],-1),b={class:"card"},x=t("h3",null,"Plain Mode",-1),k=t("p",null,"If you only need the basic functionality of the component, you can remove some styles through attributes.",-1),T=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(` 
  `),t("span",{class:"hljs-attr"},":hint"),e("="),t("span",{class:"hljs-string"},'"false"'),e(` 
  `),t("span",{class:"hljs-attr"},":line"),e("="),t("span",{class:"hljs-string"},'"false"'),e(` 
  `),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(`
/>`)]),e(`
`)])],-1),w={class:"card"},I=t("h3",null,"Textarea",-1),P=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(),t("span",{class:"hljs-attr"},"textarea"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(" />")]),e(`
`)])],-1),C={class:"card"},A=t("h3",null,"Maxlength",-1),S=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(),t("span",{class:"hljs-attr"},":maxlength"),e("="),t("span",{class:"hljs-string"},'"10"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(" />")]),e(`
`)])],-1),V={class:"card"},D=t("h3",null,"Disabled",-1),E=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(),t("span",{class:"hljs-attr"},"disabled"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(" />")]),e(`
`)])],-1),z={class:"card"},B=t("h3",null,"Readonly",-1),W=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(),t("span",{class:"hljs-attr"},"readonly"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(" />")]),e(`
`)])],-1),M={class:"card"},N=t("h3",null,"Clearable",-1),U=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(),t("span",{class:"hljs-attr"},"clearable"),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(" />")]),e(`
`)])],-1),$={class:"card"},R=t("h3",null,"Display Icon",-1),F=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { Icon } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(Icon)
`)])],-1),H=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"template"),e(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),e(">")]),e(`
    `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-icon"),e(),t("span",{class:"hljs-attr"},"name"),e("="),t("span",{class:"hljs-string"},'"plus"'),e("/>")]),e(`
  `),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"template"),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"template"),e(" #"),t("span",{class:"hljs-attr"},"append-icon"),e(">")]),e(`
    `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-icon"),e(),t("span",{class:"hljs-attr"},"name"),e("="),t("span",{class:"hljs-string"},'"minus"'),e("/>")]),e(`
  `),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"template"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-input"),e(">")]),e(`
`)])],-1),O={class:"card"},q=t("h3",null,"Validate",-1),G=t("p",null,[e("The values are validated by passing in an array of validators\uFF0CIf the validator returns "),t("code",null,"true"),e(", the validation passes. Other values are converted to text as a user prompt.")],-1),J=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-input"),e(`
  `),t("span",{class:"hljs-attr"},"placeholder"),e("="),t("span",{class:"hljs-string"},'"Please enter text"'),e(`
  `),t("span",{class:"hljs-attr"},":rules"),e("="),t("span",{class:"hljs-string"},`"[v => v.length > 6 || 'Text length must be greater than 6']"`),e(`
  `),t("span",{class:"hljs-attr"},"v-model"),e("="),t("span",{class:"hljs-string"},'"value"'),e(`
/>`)]),e(`
`)])],-1),K=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>Input type, The optional value is <code>text</code> <code>password</code> <code>number</code></td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>maxlength</code></td><td>Maxlength</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>textarea</code></td><td>Is it a textarea</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rows</code></td><td>Number of lines to display in the textarea</td><td><em>string | number</em></td><td><code>8</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resize</code></td><td>Whether textarea can be dragged to resize</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation, The optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules, Returns <code>true</code> to indicate that the validation passed,The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: string) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Trigger while focusing</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on Clearance</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>Trigger on input</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: string</code>, <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend Icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append Icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--input-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--input-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--input-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--input-textarea-height</code></td><td><code>auto</code></td></tr><tr><td><code>--input-textarea-padding-top</code></td><td><code>8px</code></td></tr><tr><td><code>--input-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--input-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--input-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--input-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table></div>',6);function L(Q,X,Y,Z,tt,et){const s=o("var-site-code-example");return c(),n("div",i,[p,t("div",u,[g,d(s,null,{default:a(()=>[j]),_:1})]),t("div",m,[v,_,d(s,null,{default:a(()=>[f]),_:1}),d(s,null,{default:a(()=>[y]),_:1})]),t("div",b,[x,k,d(s,null,{default:a(()=>[T]),_:1})]),t("div",w,[I,d(s,null,{default:a(()=>[P]),_:1})]),t("div",C,[A,d(s,null,{default:a(()=>[S]),_:1})]),t("div",V,[D,d(s,null,{default:a(()=>[E]),_:1})]),t("div",z,[B,d(s,null,{default:a(()=>[W]),_:1})]),t("div",M,[N,d(s,null,{default:a(()=>[U]),_:1})]),t("div",$,[R,d(s,null,{default:a(()=>[F]),_:1}),d(s,null,{default:a(()=>[H]),_:1})]),t("div",O,[q,G,d(s,null,{default:a(()=>[J]),_:1})]),K])}var at=l(h,[["render",L]]);export{at as default};
