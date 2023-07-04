# Front-End
TasQueue - 테스뀨>< 프론트엔드 레포지토리입니다.

## Git
### 브랜치 전략
**github flow**
- 브랜치를 크게 main 브랜치와, main 브랜치가 아닌 브랜치로 나눈다.
- main 브랜치는 어떤 때든 배포가 가능한 상태이다
- **각 개발자는 본인 이름으로 된 깃허브 브랜치를 만들고, 해당 브랜치에서 작업한 후 main 브랜치로 pull request를 보낸다.**

### 깃 커밋 컨벤션
1. 커밋 메시지는 `커밋 메시지 템플릿` 형식에 맞추어 작성한다.
2. 커밋 메시지는 `한글` 로 작성한다.

**깃 커밋 메시지 템플릿**

```jsx
################
# <타입> : <제목> 의 형식으로 제목을 아래 공백줄에 작성
# 제목은 50자 이내 / 변경사항이 "무엇"인지 명확히 작성
# 제목 예시) feat : 로그인 기능 추가

# 바로 아래 공백은 지우지 마세요 (제목과 본문의 분리를 위함)

################
# 본문(구체적인 내용)을 아랫줄에 작성
# 여러 줄의 메시지를 작성할 땐 "-"로 구분

################
# 꼬릿말(footer)을 아랫줄에 작성 (현재 커밋과 관련된 이슈 번호 추가 등)
# 예) Close #7s

################
# feat : 새로운 기능 추가
# fix : 버그 수정
# Refactor : 리팩토링
# Design : CSS 등 사용자 UI 디자인 변경
# Comment : 필요한 주석 추가 및 변경
# Rename : 파일 혹은 폴더명 수정하거나 옮기는 경우
# **Remove :** 파일을 삭제하는 작업만 수행하는 경우
# Chore : 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저, 코드 포맷팅, 코드 변경이 없는 경우 등)
################
```

## Pull Request 컨벤션

목적

- 잘 작성한 PR 은 리뷰어로 하여금 코드 이해를 돕고 시간을 절약 할 수 있게 한다.
- PR을 요청한 개발자 역시 PR template을 작성하면서 한번 더 코드를 체크 할 수 있다.

1. 제목 - 깃 컨벤션을 사용하여 작성

2. 개요 🔍
`어떤 이유에서 이 PR을 시작하게 됐는지에 대한 히스토리를 남겨주세요.`

3. 작업사항 📝
`해당 이슈사항을 해결하기 위해 어떤 작업을 했는지 남겨주세요.`

## Dev

### 코드 포맷팅

1. ESLint
2. Prettier

https://helloinyong.tistory.com/325

### 라이브러리&프레임워크&언어

1. React
2. TypeScript
3. 스타일링 - Styled Componenet
4. 상태관리 - Recoil
5. 실시간 업데이트 - react query
    1. 메인 페이지에서 사용자가 task 처리를 완료했을 때, 캘린더의 cell 색과, 사용자의 고양이 얼굴이 실시간으로 변화해야 하기 때문에 필요합니다.

### 디자인 패턴&폴더 구조 - Model, View, Controller

| 역할 | 담당 |
| --- | --- |
| Model | State 또는 store |
| View | JSX |
| Controller(Hook) | 컴포넌트에 있는 로직 |


## 🍀 Members

| [![텍스트](https://avatars.githubusercontent.com/u/99259398?v=4)](https://github.com/heeyoonjik) | [![텍스트](https://avatars.githubusercontent.com/u/102508014?v=4)](https://github.com/KanuBang) | [![텍스트](https://avatars.githubusercontent.com/u/87124432?v=4)](https://github.com/jisupark123) | [![텍스트](https://avatars.githubusercontent.com/u/70802352?v=4)](https://github.com/dooli1971039) | [![텍스트](https://avatars.githubusercontent.com/u/99737532?v=4)](https://github.com/ijieun) |
| :----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|                                           김희윤                                            |                                          방찬우                                           |                                            박지수                                            |                                                                   이진경                                                                    |                                        이지은                                          |


