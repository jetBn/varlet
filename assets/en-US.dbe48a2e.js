import{_ as d}from"./elevation.55003d42.js";import{e as c,o as n,c as o,a as s,i as a,j as l,m as t,U as h}from"./vendor.4723551d.js";const r={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"Checkbox",-1),u={class:"card"},j=s("h3",null,"Install",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Checkbox, CheckboxGroup } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(CheckboxGroup).use(Checkbox)
`)])],-1),g={class:"card"},m=s("h3",null,"Basic Usage",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t("Current value: {{ value }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" value = ref("),s("span",{class:"hljs-literal"},"false"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),_={class:"card"},y=s("h3",null,"Set State value",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(`
  `),s("span",{class:"hljs-attr"},":unchecked-value"),t("="),s("span",{class:"hljs-string"},'"0"'),t(`
  `),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"1"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
>`)]),t(`
  Current value: {{ value }}
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(" value = ref("),s("span",{class:"hljs-number"},"0"),t(`)

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),C={class:"card"},w=s("h3",null,"Modify the icon and color",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(`
  `),s("span",{class:"hljs-attr"},"unchecked-color"),t("="),s("span",{class:"hljs-string"},'"#e99eb4"'),t(`
  `),s("span",{class:"hljs-attr"},"checked-color"),t("="),s("span",{class:"hljs-string"},'"#f44336"'),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"unchecked-icon"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"heart-half-full"'),t(),s("span",{class:"hljs-attr"},"size"),t("="),s("span",{class:"hljs-string"},'"24px"'),t("/>")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"checked-icon"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"heart"'),t(),s("span",{class:"hljs-attr"},"size"),t("="),s("span",{class:"hljs-string"},'"24px"'),t("/>")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"default"),t(">")]),t(`
    Current value: {{ value }}
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`)])],-1),S={class:"card"},T=s("h3",null,"Disabled",-1),D=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(),s("span",{class:"hljs-attr"},"disabled"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t("Current value: {{ value }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`)])],-1),P={class:"card"},z=s("h3",null,"Readonly",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(),s("span",{class:"hljs-attr"},"readonly"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t("Current value: {{ value }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`)])],-1),G={class:"card"},V=s("h3",null,"CheckboxGroup/Actions",-1),M=s("p",null,[t("In the checkbox group, you must set the "),s("code",null,"checked-value"),t(" to identify the "),s("code",null,"checkbox"),t(", The checkbox group collects all checked identifiers.")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox-group"),t(),s("span",{class:"hljs-attr"},"ref"),t("="),s("span",{class:"hljs-string"},'"group"'),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"0"'),t(">")]),t("Eat"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"1"'),t(">")]),t("Sleep"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox-group"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"button"'),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"$refs.group.checkAll()"'),t(">")]),t("Check All"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"button"'),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"$refs.group.inverseAll()"'),t(">")]),t("Inverse All"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`)])],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"export"),t(),s("span",{class:"hljs-keyword"},"default"),t(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),t("("),s("span",{class:"hljs-params"}),t(")")]),t(` {
    `),s("span",{class:"hljs-keyword"},"const"),t(` value = ref([])

    `),s("span",{class:"hljs-keyword"},"return"),t(` {
      value
    }
  }
}
`)])],-1),$={class:"card"},R=s("h3",null,"Checkbox validation",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
  `),s("span",{class:"hljs-attr"},":rules"),t("="),s("span",{class:"hljs-string"},`"[v => v || 'Please check your choices']"`),t(`
>`)]),t(`
  Current value: {{ value }}
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`)])],-1),N={class:"card"},W=s("h3",null,"CheckboxGroup validate",-1),H=s("pre",{class:"hljs"},[s("code",null,[s("link",{rel:"stylesheet",href:"./highlight.css"}),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox-group"),t(`
  `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"value"'),t(`
  `),s("span",{class:"hljs-attr"},":rules"),t("="),s("span",{class:"hljs-string"},`"[v => v.length === 2 || 'Please check all']"`),t(`
>`)]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"0"'),t(">")]),t("Eat"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-checkbox"),t(),s("span",{class:"hljs-attr"},":checked-value"),t("="),s("span",{class:"hljs-string"},'"1"'),t(">")]),t("Sleep"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-checkbox-group"),t(">")]),t(`
`)])],-1),O=h('<h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>CheckboxGroup Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any[]</em></td><td><code>[]</code></td></tr><tr><td><code>max</code></td><td>Maximum number of checked</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>The layout direction\uFF0COptional value is <code>horizontal</code> <code>vertical</code></td><td><em>string | number</em></td><td><code>horizontal</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any[]) =&gt; any&gt;</em></td><td><code>horizontal</code></td></tr></tbody></table></div><div class="card"><h3>Checkbox Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>Checked value</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>Unchecked value</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>Checked color</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>Unchecked color</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>Icon size</td><td>_string</td><td>\\ number_</td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3></div><div class="card"><h3>CheckboxGroup Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>checkAll</code></td><td>Check all</td><td><code>-</code></td><td><code>value: any</code></td></tr><tr><td><code>inverseAll</code></td><td>Inverse all</td><td><code>-</code></td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>Checkbox Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>unchecked-value</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>Toggle the checked state, pass <code>checked-value</code> to check, <code>unchecked-value</code> to uncheck, do not pass or other cases to reverse</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>CheckboxGroup Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: any[]</code></td></tr></tbody></table></div><div class="card"><h3>Checkbox Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>Trigger on change</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>CheckboxGroup Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Checkbox group content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Checkbox Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>Checked icon</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>Unchecked icon</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>Displayed text</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--checkbox-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--checkbox-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--checkbox-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--checkbox-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--checkbox-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--checkbox-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>',14);function q(F,J,K,L,Q,X){const e=c("var-site-code-example");return n(),o("div",i,[p,s("div",u,[j,a(e,null,{default:l(()=>[v]),_:1})]),s("div",g,[m,a(e,null,{default:l(()=>[k]),_:1}),a(e,null,{default:l(()=>[b]),_:1})]),s("div",_,[y,a(e,null,{default:l(()=>[f]),_:1}),a(e,null,{default:l(()=>[x]),_:1})]),s("div",C,[w,a(e,null,{default:l(()=>[A]),_:1})]),s("div",S,[T,a(e,null,{default:l(()=>[D]),_:1})]),s("div",P,[z,a(e,null,{default:l(()=>[E]),_:1})]),s("div",G,[V,M,a(e,null,{default:l(()=>[U]),_:1}),a(e,null,{default:l(()=>[I]),_:1})]),s("div",$,[R,a(e,null,{default:l(()=>[B]),_:1})]),s("div",N,[W,a(e,null,{default:l(()=>[H]),_:1})]),O])}var ss=d(r,[["render",q]]);export{ss as default};
