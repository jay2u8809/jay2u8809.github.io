---
# slug: /etc/how-to-use-markdown-in-goolge-blogger
id: how-to-use-markdown-in-goolge-blogger
title: Google Blogger 에서 Markdown 사용하기
tags: [devian-lab, markdown, blogger, md-in-blogger, 구글 블로거, 마크다운, 블로거]
# sidebar_position: 1
---

<!--title -->
# 구글 블로거(Blogger)에서 Markdown 으로 포스팅하려면?
<!--//title -->

```json
{
  "author": "Dev.ian",
  "createdAt": "2024-06-02",
  "updatedAt": "2024-06-23"
}
```

---
<br />

## 0. 마크다운을 사용하려는 이유?

나는 평소에 마크다운(Markdown)을 사용해 문서를 작성하는 편이다. 회사에서 개발 문서를 작성하거나 Wiki 를 작성할 때도 마크다운으로 하는 편이고, 자주 쓰는 메모앱도 Obsidian 이나 Notion 이기에 마크다운이 익숙하고 편하다.
 
마크다운의 가장 큰 강점은 html 처럼 웹 페이지로 관리할 수 있지만 html 보다는 훨씬 보기 좋다는 점이다. 

html 로 문서를 관리하게 되면 워드 파일이나 엑셀 파일로 관리 할 때보다 검색이나 링크 활용 등이 훨씬 용이하다. 문서를 웹 브라우저에서 보기 때문에 PC 나 태블릿, 스마트폰 어디서 보더라도 크기가 잘 조정되는 것도 큰 장점이다.

다만, html 로 직접 문서를 작성하게 되면 여러 태그(tag)들로 인해 작성과 수정이 매우 불편하다. 읽기만 편하고 문서를 관리하기 위해 내용을 갱신하거나 새롭게 작성할 때는 워드 파일이나 엑셀 파일보다 훨씬 힘들어진다.

이러한 단점을 해결할 것이 마크다운이다. 몇 가지의 특수기호(`#, ~, *` 등)로 html 과 같은 효과를 낼 수 있다. html 의 단점은 해소하고 장점은 그대로 살려둔 것이다.

 마크다운을 사용한다면 Obsidian 이나 다른 마크다운 에디터로 작성한 뒤 그대로 복사/붙여넣기도 가능하다. 특정 블로그 서비스에 맞춰서 글을 쓸 필요가 없다. 어디서든 내 스타일의 글을 쓰고 어느 블로그 서비스에라도 포스팅 할 수 있다.


<br /><br />


## 1. 마크다운을 적용해 보자

 구글 블로거에서 마크다운으로 포스팅하기 위해 [md-in-blogger](https://github.com/cs905s/md-in-blogger?tab=readme-ov-file) 라는 라이브러리를 사용해 본다. 구글 블로거의 테마 html 에 css 와 js 를 추가하는 것으로 간단하게 적용할 수 있다. 
  
### 1-1)  테마 Html 편집창 열기
 아래의 스크린샷을 참고하여 html 편집 화면을 연다.

- 블로그 관리화면: `테마 -> 맞춤설정 -> html 편집`

![blogger-theme-edit](https://velog.velcdn.com/images/jay2u8809/post/4221d765-5f15-4db8-b7db-7652e153351f/image.png)
- _이미 html 편집을 했기 때문에 미리보기를 볼수 없고, custom 이라고 표시된다._

![blogger-html-edit](https://velog.velcdn.com/images/jay2u8809/post/6292dac6-37a9-4e1e-9d48-7c0141279ec0/image.png)


### 1-2)  md-in-blogger 적용
- html 편집 화면을 열었다면 아래와 같이 `</head> 태그` 바로 위에 css 파일을 복사/붙여넣기 한다.

```html
<head>
	...
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css"/>
</head>
```

- 이어서 아래와 같이 4개의 script 코드를 `</body> 태그` 바로 위에 복사/붙여넣기한 후, 저장한다.

```html
<body>
	...
	<script src='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js' type='text/javascript'></script>
	<script src='//cdnjs.cloudflare.com/ajax/libs/showdown/1.6.2/showdown.min.js' type='text/javascript'></script>
	<script src='//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' type='text/javascript'></script>
	<script src='//mxp22.surge.sh/markdown-highlight-in-blogger.js' type='text/javascript'></script>
</body>
```


### 1-3) 마크다운으로 포스팅하기
 위의 html 편집이 끝났다면 글 쓰기로 이동하여 에디트 모드를 `html 모드` 로 바꾼다. 그리고 아래와 같이 html 코드를 적어주고 그 안에서 마크다운 문법을 사용할 수 있다.
 
```html
<pre class="markdown">
<xmp>
 ## Edit Markdown 
</xmp>
</pre>
```

- pre 태그의 클래스명을 변경하지 말자. _md-in-blogger_ 가 `class="markdown"` 의 속성을 변경해주기 때문에 반드시 pre 태그는 그대로 두어야 한다.
 
- _md-in-blogger_ 의 Readme 를 보면 `<xmp>` 태그없이 pre 태그만으로 마크다운이 작성 가능하다고 설명하는데 전혀 되지 않았다. 

<br /><br />

## 2. 마무리
 구글 블로거에서 마크다운을 사용하는 방법을 정리해보았다. 블로거 서비스에서 직접 제공하는 기능이 아니기에 외부 라이브러리를 사용할 수 밖에 없었지만, 마크다운을 이용해 포스팅을 할 수 있다는 것에 만족한다.

 포스팅을 할 때마다 매번 pre 태그와 xmp 태그를 사용하는 것이 귀찮다면 포스팅 템플릿을 지정할 수도 있다. 포스팅 템플릿을 지정해 놓으면 글을 쓸때마다 항상 마크다운을 쓸 수 있는 태그들이 세팅되어 있기 때문에 바로 포스팅을 할 수 있다.


<br /><br /><br /><br /><br />

--- 
- Refs
  + [Github: md-in-blogger](https://github.com/cs905s/md-in-blogger?tab=readme-ov-file)
  + [구글 블로거(Blogger) 에서 마크다운으로 포스팅하는 방법](https://blog.indexall.net/2017/04/how-to-use-markdown-in-blogger.html)
  + [HTML코드를 있는 그대로 보이게 해주는 태그 (pre, xmp)](https://spring2536.tistory.com/entry/HTML%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%9E%88%EB%8A%94-%EA%B7%B8%EB%8C%80%EB%A1%9C-%EB%B3%B4%EC%9D%B4%EA%B2%8C-%ED%95%B4%EC%A3%BC%EB%8A%94-%ED%83%9C%EA%B7%B8)