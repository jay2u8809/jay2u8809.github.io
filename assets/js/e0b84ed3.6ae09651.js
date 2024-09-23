"use strict";(self.webpackChunkonigiri=self.webpackChunkonigiri||[]).push([[6680],{32644:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(74848),r=s(28453);const t={slug:"/programming/nodejs/jest/how-to-mocking-on-jest",title:"Mocking \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","javascript","typescript","jest","unit test","mocking","mock"],keywords:["devian-lab","Job\u02d0\u8ac7","nodejs","javascript","typescript","jest","unit test","mocking","mock"],description:"Jest \ub97c \uc774\uc6a9\ud55c Mocking \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},o="[Jest] Mocking \ubc29\ubc95",c={id:"programming/nodejs/jest/how-to-mocking-on-jest",title:"Mocking \ubc29\ubc95",description:"Jest \ub97c \uc774\uc6a9\ud55c Mocking \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4.",source:"@site/docs/programming/nodejs/jest/how-to-mocking-on-jest.md",sourceDirName:"programming/nodejs/jest",slug:"/programming/nodejs/jest/how-to-mocking-on-jest",permalink:"/docs/programming/nodejs/jest/how-to-mocking-on-jest",draft:!1,unlisted:!1,tags:[{inline:!0,label:"devian-lab",permalink:"/docs/tags/devian-lab"},{inline:!0,label:"dev.ian",permalink:"/docs/tags/dev-ian"},{inline:!0,label:"Job\u02d0\u8ac7",permalink:"/docs/tags/job\u02d0\u8ac7"},{inline:!0,label:"wiki",permalink:"/docs/tags/wiki"},{inline:!0,label:"nodejs",permalink:"/docs/tags/nodejs"},{inline:!0,label:"javascript",permalink:"/docs/tags/javascript"},{inline:!0,label:"typescript",permalink:"/docs/tags/typescript"},{inline:!0,label:"jest",permalink:"/docs/tags/jest"},{inline:!0,label:"unit test",permalink:"/docs/tags/unit-test"},{inline:!0,label:"mocking",permalink:"/docs/tags/mocking"},{inline:!0,label:"mock",permalink:"/docs/tags/mock"}],version:"current",frontMatter:{slug:"/programming/nodejs/jest/how-to-mocking-on-jest",title:"Mocking \ubc29\ubc95",tags:["devian-lab","dev.ian","Job\u02d0\u8ac7","wiki","nodejs","javascript","typescript","jest","unit test","mocking","mock"],keywords:["devian-lab","Job\u02d0\u8ac7","nodejs","javascript","typescript","jest","unit test","mocking","mock"],description:"Jest \ub97c \uc774\uc6a9\ud55c Mocking \ubc29\ubc95\uc744 \uc815\ub9ac\ud55c\ub2e4."},sidebar:"labDocsSidebar",previous:{title:"\uac1c\ubc1c \ud658\uacbd \uc124\uc815",permalink:"/docs/programming/nodejs/nestjs/how-to-setup-nestjs"},next:{title:"Unit Test \ubc29\ubc95",permalink:"/docs/programming/nodejs/jest/how-to-do-unit-test-on-jest"}},l={},d=[{value:"Test Target",id:"test-target",level:2},{value:"Mocking private method",id:"mocking-private-method",level:2},{value:"- jest.spyOn \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud55c Mocking \ubc29\ubc95",id:"--jestspyon-\uba54\uc18c\ub4dc\ub97c-\uc774\uc6a9\ud55c-mocking-\ubc29\ubc95",level:4},{value:"Mocking class",id:"mocking-class",level:2},{value:"- overrideProvider \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud55c Mocking \ubc29\ubc95",id:"--overrideprovider-\uba54\uc18c\ub4dc\ub97c-\uc774\uc6a9\ud55c-mocking-\ubc29\ubc95",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"jest-mocking-\ubc29\ubc95",children:"[Jest] Mocking \ubc29\ubc95"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"  author: Dev.ian\n  createdAt: 2024-05-27\n  updatedAt: 2024-08-17\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"test-target",children:"Test Target"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Nest.js Application Code"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Test Target Method"}),": ",(0,i.jsx)(n.code,{children:"fetchUser"}),", ",(0,i.jsx)(n.code,{children:"getUser"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export class UserService {\n  async fetchUser(id: string): Promise<User> {\n    // check parameter\n    if (!id) {\n      throw new Error('no exist id');\n    }\n    // return\n    return this.getUSer(id);\n  }\n\n  // === private ===\n  private async getUser(id: string): Promise<User> {\n    const user: User = await db.get(id);\n    if (!user) {\n      return null;\n    }\n    return user;\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mocking-private-method",children:"Mocking private method"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Target Method: ",(0,i.jsx)(n.code,{children:"UserSerivce.getUser"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"--jestspyon-\uba54\uc18c\ub4dc\ub97c-\uc774\uc6a9\ud55c-mocking-\ubc29\ubc95",children:"- jest.spyOn \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud55c Mocking \ubc29\ubc95"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jest.spyOn"})," \ud568\uc218: Mocking \uc6a9 \ud568\uc218\ub098 \uac12\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uba54\uc18c\ub4dc."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["private \uba54\uc18c\ub4dc\uac00 \uc788\ub294 ",(0,i.jsx)(n.strong,{children:"class \ub97c any \ud0c0\uc785\uc73c\ub85c \ud615 \ubcc0\ud658"})," \ud558\uc5ec mocking \uba54\uc18c\ub4dc\ub97c \ub9cc\ub4e4\uc5b4\uc900\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["mocking \ud55c \uba54\uc18c\ub4dc\uac00 \ud638\ucd9c\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 ",(0,i.jsx)(n.code,{children:"toHaveBeenCalled"})," or ",(0,i.jsx)(n.code,{children:"toHaveBeenCalledTimes"})," \uba54\uc18c\ub4dc\ub97c \ud65c\uc6a9\ud55c\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"  describe('UserServiceSpec', () => {\n    let user: UserService;\n\n    beforeEach(async () => {\n      const module: TestingModule = await Test.createTestingModule({\n        providers: [UserService],\n        imports: [UserModule],\n      }).compile();\n\n      user = module.get<UserService>(UserService);\n    });\n\n    it('mocking private method', async () =>{\n      // given\n      const id = 'test_id';\n      const getUser = jest\n        .spyOn(user as any, 'getUser')  // user \ud074\ub798\uc2a4\uc758 getUser \ub97c mocking\n        .mockImplementation(async () => {\n          return {id: 'mock-user'};\n        });\n      // when & then\n      expect(getUSer).toHaveBeenCalled();\n      expect(getUSer).toHaveBeenCalledTimes(1);\n    }, 999_999_999);\n  });\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mocking-class",children:"Mocking class"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mocking \ud558\ub824\ub294 \uba54\uc18c\ub4dc\uac00 \uc788\ub294 class \ub97c \uc0c1\uc18d\ud574 Mocking \uc6a9 class \ub97c \ub9cc\ub4dc\ub294 \ud615\ud0dc\ub85c\ub3c4 Mocking \uc774 \uac00\ub2a5\ud558\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["UserService \uc758 fetchUser \uba54\uc18c\ub4dc\ub098 \uc0dd\uc131\uc790 \ub4f1\uc744 ",(0,i.jsx)(n.strong,{children:"\uc624\ubc84\ub77c\uc774\ub529"})," \ud558\ub294 \ud615\ud0dc\ub85c Mocking \ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"--overrideprovider-\uba54\uc18c\ub4dc\ub97c-\uc774\uc6a9\ud55c-mocking-\ubc29\ubc95",children:"- overrideProvider \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud55c Mocking \ubc29\ubc95"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mocking \ud55c class \ub97c jest \uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 Mocking \ud55c class \uac00 \uc788\ub294 module \uc5d0\uc11c \uc624\ubc84\ub77c\uc774\ub4dcOverride \ud574\uc57c\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"  // fetchUser \uba54\uc18c\ub4dc\ub97c Mocking \ud558\uae30 \uc704\ud574 UserService class \ub97c \uc0c1\uc18d\ud574 \uc0c8\ub85c\uc6b4 class \ub97c \ub9cc\ub4e0\ub2e4.\n  class MockUserService extends UserService {\n    async fetchUser(id: string): Promise<User> {\n      if (!id) {\n        throw new Error('no exist id');\n      }\n      // mocking code\n      return {\n        id: 'mock-user-id',\n      };\n    }\n  }\n\n  describe('UserServiceSpec', () => {\n    let user: UserService;\n\n    beforeEach(async () => {\n      const module: TestingModule = await Test.createTestingModule({\n        providers: [MockUserService], // provider \ub85c\uc11c Mocking \uc6a9 class \ub97c \uc9c0\uc815\n        imports: [UserModule],\n      })\n      .overrideProvider(UserService)  // UserService class \ub97c override \n      .useClass(MockUserService)      // override \ud560 class \uc9c0\uc815(MockUserService class)\n      .compile();\n\n      user = module.get<UserService>(UserService);\n    });\n\n    it('should be defined', () => {\n      expect(user).toBeDefined();\n    })\n  });\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Refs:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://velog.io/@hkja0111/NestJS-10-Unit-Test-JEST",children:"NestJS 10 | Unit Test - JEST"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/62171602/testing-private-method-using-spyon-and-jest",children:"Testing private method using spyOn and Jest"})}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);