"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[6629],{5023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(4848),i=t(8453);const r={id:"how-to-do-unit-test-on-jest",title:"Unit Test \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","javascript","typescript","jest","unit test"]},o="[Jest] Unit Test \ubc29\ubc95",c={id:"programming/nodejs/jest/how-to-do-unit-test-on-jest",title:"Unit Test \ubc29\ubc95",description:"\x3c!--",source:"@site/docs/programming/nodejs/jest/how-to-do-unit-test-on-jest.md",sourceDirName:"programming/nodejs/jest",slug:"/programming/nodejs/jest/how-to-do-unit-test-on-jest",permalink:"/docs/programming/nodejs/jest/how-to-do-unit-test-on-jest",draft:!1,unlisted:!1,tags:[{inline:!0,label:"devian-lab",permalink:"/docs/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/docs/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/docs/tags/job\u02d0\u8ac7"},{inline:!0,label:"wiki",permalink:"/docs/tags/wiki"},{inline:!0,label:"nodejs",permalink:"/docs/tags/nodejs"},{inline:!0,label:"javascript",permalink:"/docs/tags/javascript"},{inline:!0,label:"typescript",permalink:"/docs/tags/typescript"},{inline:!0,label:"jest",permalink:"/docs/tags/jest"},{inline:!0,label:"unit test",permalink:"/docs/tags/unit-test"}],version:"current",frontMatter:{id:"how-to-do-unit-test-on-jest",title:"Unit Test \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","javascript","typescript","jest","unit test"]},sidebar:"labDocsSidebar",previous:{title:"Mocking \ubc29\ubc95",permalink:"/docs/programming/nodejs/jest/how-to-mocking-on-jest"},next:{title:"Heap \uba54\ubaa8\ub9ac \uc0ac\uc774\uc988 \uc124\uc815 \ubc29\ubc95",permalink:"/docs/programming/nodejs/how-to-increase-nodejs-default-memory"}},l={},a=[{value:"Test Target",id:"test-target",level:2},{value:"Check Error",id:"check-error",level:2},{value:"toThrowError",id:"tothrowerror",level:3},{value:"Object \ube44\uad50",id:"object-\ube44\uad50",level:2},{value:"toStrictEqual",id:"tostrictequal",level:3}];function d(e){const n={a:"a",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"jest-unit-test-\ubc29\ubc95",children:"[Jest] Unit Test \ubc29\ubc95"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-08-18\n  updatedAt: 2024-08-18\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"test-target",children:"Test Target"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Nest.js Application Code"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Test Target Method"}),": ",(0,s.jsx)(n.code,{children:"fetchUser"}),", ",(0,s.jsx)(n.code,{children:"getUser"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export class UserService {\n  async fetchUser(id: string): Promise<User> {\n    // check parameter\n    if (!id) {\n      throw new NoUserException('no exist id');\n    }\n    // return\n    return this.getUSer(id);\n  }\n\n  // === private ===\n  private async getUser(id: string): Promise<User> {\n    const user: User = await db.get(id);\n    if (!user) {\n      return null;\n    }\n    return user;\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"check-error",children:"Check Error"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc5d0\ub7ec\uac00 \uc54c\ub9de\ub294 Error Object (",(0,s.jsx)(n.em,{children:"NoUserException"}),") \uc778\uc9c0, \uc54c\ub9de\ub294 Message (",(0,s.jsx)(n.code,{children:"no exist id"}),") \uc778\uc9c0 \uccb4\ud06c"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tothrowerror",children:"toThrowError"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\ube44\ub3d9\uae30\ucc98\ub9ac Code"})," \ub97c \ud14c\uc2a4\ud2b8\ud560 \ub54c\ub294 Test \uc758 \uacb0\uacfc\ub3c4 Promise \uc774\ub2e4."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"await"})," \uc640 ",(0,s.jsx)(n.code,{children:"rejects"})," or ",(0,s.jsx)(n.code,{children:"resolves"})," \ub97c \uc774\uc6a9\ud574 \ucf54\ub4dc\ub97c \uc791\uc131\ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test code 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"  it('error: no exist id', async () =>{\n    // given\n    const id = 'test_id';\n    const testFunc = async () => {\n      await fetchUser(id);\n    };\n    // when & then\n    await expect(() => testFunc()).rejects.toThrowError(new NoUserException('no exist id'));\n  }, 999_999_999);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test code 2 (Test code 1 \uacfc \ub3d9\uc77c\ud55c \ub0b4\uc6a9)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"  it('error: no exist id', async () =>{\n    // given\n    const id = 'test_id';\n    // when & then\n    await expect(fetchUser(id)).rejects.toThrowError(new NoUserException('no exist id'));\n  }, 999_999_999);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"object-\ube44\uad50",children:"Object \ube44\uad50"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\uac1d\uccb4Object\uc758 \ubaa8\ub4e0 \ud0a4Key\uc640 \uac12Value\uc774 \uc608\uc0c1\ud55c \uac12\uacfc \ub3d9\uc77c\ud55c\uc9c0 \ube44\uad50\ud55c\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tostrictequal",children:"toStrictEqual"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Test Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"  it('Object: equal', async () =>{\n    // given\n    const id = 'test_id';\n    // when\n    const user = await fetchUser(id);\n    // then\n    await expect(user).toStrictEqual({id: 'strict-user-id'});\n  }, 999_999_999);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Refs:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://dev.to/ehsaantech/mastering-unit-testing-with-nestjs-37g9",children:"Mastering Unit Testing With NestJS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://qiita.com/YSasago/items/b5aae0c35a629f834752",children:["\u3010Jest\u5165\u9580\u3011Error\u306e\u8a55\u4fa1\u3057\u3088\u3046",(0,s.jsx)(n.del,{children:"toThrow\u95a2\u6570"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://dev.classmethod.jp/articles/testing-exception-handling-with-jest/",children:"[Jest] throw Matcher\u3067\u4f8b\u5916\u51e6\u7406\u306e\u30c6\u30b9\u30c8\u3092\u5b9f\u88c5\u3057\u3066\u307f\u305f"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/47754777/how-can-i-test-for-object-keys-and-values-equality-using-jest",children:"How can I test for object keys and values equality using Jest?"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);