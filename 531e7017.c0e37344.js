(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{129:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(126),o=t(135);t(127),t(55);n.a=function(e){var n=i.a.useState(!1),t=n[0],r=n[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!t)}})))),t&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(a.a,{components:o.a},e.children)))}},130:function(e,n,t){"use strict";var r=t(0),i=t(131);n.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},131:function(e,n,t){"use strict";var r=t(0),i=Object(r.createContext)(void 0);n.a=i},132:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(130),o=t(128),c=t(56),l=t.n(c),d=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,b=Object(a.a)(),g=b.tabGroupChoices,h=b.setTabGroupChoices,f=Object(r.useState)(c),v=f[0],j=f[1],O=r.Children.toArray(e.children);if(null!=p){var w=g[p];null!=w&&w!==v&&u.some((function(e){return e.value===w}))&&j(w)}var N=function(e){j(e),null!=p&&h(p,e)},y=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case d:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(r.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},133:function(e,n,t){"use strict";var r=t(3),i=t(0),a=t.n(i);n.a=function(e){var n=e.children,t=e.hidden,i=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:i}),n)}},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(126)),o=t(132),c=t(133),l=(t(127),t(129),{id:"index-golang",title:"Go and Redis",sidebar_label:"Go",slug:"/develop/golang/"}),d={unversionedId:"develop/golang/index-golang",id:"develop/golang/index-golang",isDocsHomePage:!1,title:"Go and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang.",source:"@site/docs/develop/golang/index-golang.mdx",slug:"/develop/golang/",permalink:"/develop/golang/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/golang/index-golang.mdx",version:"current",sidebar_label:"Go",sidebar:"docs",previous:{title:"Node.js and Redis",permalink:"/develop/node/"},next:{title:"Rust and Redis",permalink:"/develop/rust/"}},s=[{value:"Getting Started",id:"getting-started",children:[{value:"Getting Started with redigo",id:"getting-started-with-redigo",children:[]},{value:"Step 1. Import the <code>redigo</code> module",id:"step-1-import-the-redigo-module",children:[]},{value:"Step 2. Create a connection pool",id:"step-2-create-a-connection-pool",children:[]},{value:"Step 3. Write your application code",id:"step-3-write-your-application-code",children:[]},{value:"Technical Articles &amp; Whitepapers",id:"technical-articles--whitepapers",children:[]}]}],u={toc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Golang."),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"Golang community has built many client libraries that you can find ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redis.io/clients#go"}),"here"),".\nFor your first steps with Golang and Redis, this article will show how to use the recommended library: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gomodule/redigo"}),"redigo"),"."),Object(a.b)(o.a,{defaultValue:"redigo",values:[{label:"Redigo",value:"redigo"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"redigo",mdxType:"TabItem"},Object(a.b)("h3",{id:"getting-started-with-redigo"},"Getting Started with redigo"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"redigo")," library is located in the ",Object(a.b)("inlineCode",{parentName:"p"},"https://github.com/gomodule/redigo")," that you must import in your application."),Object(a.b)("h3",{id:"step-1-import-the-redigo-module"},"Step 1. Import the ",Object(a.b)("inlineCode",{parentName:"h3"},"redigo")," module"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'```bash\n go get github.com/gomodule/redigo/redis\n```\n\n```go\nimport (\n    "fmt"\n    "context"\n    "github.com/gomodule/redigo/redis"\n)\n```\n')),Object(a.b)("h3",{id:"step-2-create-a-connection-pool"},"Step 2. Create a connection pool"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'```go\nfunc newPool() *redis.Pool {\n    return &redis.Pool{\n        MaxIdle: 80,\n        MaxActive: 12000,\n        Dial: func() (redis.Conn, error) {\n            c, err := redis.Dial("tcp", ":6379")\n            if err != nil {\n                panic(err.Error())\n            }\n            return c, err\n        },\n    }\n}\n```    \n')),Object(a.b)("h3",{id:"step-3-write-your-application-code"},"Step 3. Write your application code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'```go\npackage main\n\nimport (\n    "fmt"\n\n    "github.com/gomodule/redigo/redis"\n)\n\nvar pool = newPool()\n\nfunc main() {\n\n    client := pool.Get()\n    defer client.Close()\n\n    _, err := client.Do("SET", "mykey", "Hello from redigo!")\n    if err != nil {\n        panic(err)\n    }\n\n    value, err := client.Do("GET", "mykey")\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("%s \\n", value)\n\n    _, err = client.Do("ZADD", "vehicles", 4, "car")\n    if err != nil {\n        panic(err)\n    }\n    _, err = client.Do("ZADD", "vehicles", 2, "bike")\n    if err != nil {\n        panic(err)\n    }\n\n    vehicles, err := client.Do("ZRANGE", "vehicles", 0, -1, "WITHSCORES")\n    if err != nil {\n        panic(err)\n    }   \n    fmt.Printf("%s \\n", vehicles)\n\n    \n}\n\nfunc newPool() *redis.Pool {\n    return &redis.Pool{\n        MaxIdle: 80,\n        MaxActive: 12000,\n        Dial: func() (redis.Conn, error) {\n            c, err := redis.Dial("tcp", ":6379")\n            if err != nil {\n                panic(err.Error())\n            }\n            return c, err\n        },\n    }\n}    \n```\n')),Object(a.b)("p",null,'Find more information about Golang & Redis connections in the "',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/golang/redigo"}),"Redis Connect"),'".'))),Object(a.b)("h3",{id:"technical-articles--whitepapers"},"Technical Articles & Whitepapers"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"https://redislabs.com/docs/ultra-fast-recommendations-engine-using-redis-go/"}),"Redis and Golang: Designed to Improve Performance\n"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"https://redislabs.com/blog/jedis-vs-lettuce-an-exploration/https://redislabs.com/blog/jedis-vs-lettuce-an-exploration/"}),"A High Performance Recommendation Engine with Redis and Go"))))}p.isMDXComponent=!0}}]);