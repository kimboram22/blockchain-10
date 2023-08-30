# Git

```sh
sudo apt install git

#mac일 경우
sudo brew install git
git config --global core.autocrlt input
```

## Git 이란

버전 형상 관리

- `svn` -> `git`

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// i를 20으로 변경했을때 소스코드를
```

`게시판`
list, write, view

write -> view (submit)
write -> list 변경
write -> view 원상복구하는거니까 소스코드 건드리지않고 예전껄로 돌아갈수있어 (git의목적)

`git`과 `github`는 달라!

- git을 먼저 배우고 github나갈예정

## Git 설정

`wsl` 홈디렉토리에
mkdir cli

루트디렉토리 == [프로젝트]
/ homepage
| - index.html
| -public
| --js
| ---index.js

/ homepage2

homepage가 프로젝트 디렉토리!

```sh
git init
# Initialized empty Git repository in /root/cli/.git/
# git 으로 관리하겠다는 뜻

ls -al
# .git 디렉토리가 생겨남!

rm -rf .git
# 노랗게 master가 사라짐 (git으로 관리하지않겠다는것)
```

## Git 사용자 이름과 이메일 설정

- 내가 작성한 코드를 관리하기 위해서 사용한다.(로컬컴퓨터)

```sh
git config --global user.name "boram-blockchain"
git config --global user.email "penguniee@gmail.com"

git config --global init.defaultBranch main

```

## .git

`.git` : 우리가 작업한 모든 히스토리를 보관할 저장소, 버전관리를 해준다.

스냅샷 (사진을 찍는다)

- 내가 지정한 곳에서 과거로 돌아갈수있어
- 코드 작성하다가 저장을 해두면 스냅샷을 찍고 그게 .git에 저장된다

git을 잘한다라는 것은 원하는대로 이동을 마구잡이로 할수있다는 것!
스냅샷을 잘 조립할수있는사람!

## Git 기본 실습

code .
열어서 입력

```sh

git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        development.json

nothing added to commit but untracked files present (use "git add" to track)
```

git status 입력하면서 git상태 확인해보기!!

### .gitignore

특정파일을 추적하지않았으면 하는것 처리하는 방법
관리하고싶지않은 폴더나 파일을 추적하지 않게

예를들면 production.json을 관리하지않으려면

.gitignore 파일을 만들고
그안에 production.json 이라고 적어서 저장
git status
쳐보면 프로덕션 없어져

파일 뒤에 U표시

## Git Workflow

```sh
git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json
        test.json

nothing added to commit but untracked files present (use "git add" to track)

```

`프로젝트폴더`

1. working directory

- Untracked : 추적되지 않음
- Tracked : 추적됨

2. Stating area -> `add`

```sh
git add test.json
git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   test.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json
```

test를 수정한다면

```sh
git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   test.json

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json

```

test.json U에서 M으로 변경됨
다시 add를 하면 M에서 A로 변경됨

3. Repository (.git) -> `commit` -> 스냅샷을 찍었다

```sh
git commit -m "feat: add file test.json"

[master (root-commit) 2b48a19] feat: add file test.json
 1 file changed, 7 insertions(+)
 create mode 100644 test.json

git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        development.json

nothing added to commit but untracked files present (use "git add" to track)

```

올린걸 보고싶을때는

```sh
git log

# vi에디터로 열렸을거야
commit 2b48a19440e32bb83601ef75a61d7d1b322aa059 (HEAD -> master)
Author: boram-blockchain <penguniee@gmail.com>
Date:   Fri Aug 18 10:50:02 2023 +0900

    feat: add file test.json
(END)
# :q 누르면 바로 나가짐
```

git을 쓸때는 스냅샷을 하나의 점으로 표현하는데
3개를 저장했다면
. -> . -> .

커밋할때마다 고유한 hash가 생기는데 절대 겹치지않아
점 하나가 hash

git을 잘쓰러면 원하는 지점에 커밋을해서 왔다갔다가 되어야해

## commit 커밋메시지 컨벤션

git은 개발자에게 최고의 이력서
메시지도 잘 남겨야해

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서수정
- style : 스타일 코드 수정(css말고 세미콜론같은거)
- design
- test
- refactor
- rename
- remove

곽교수님은 커밋한것을 동그라미를 만들었다고 표현한다고함

- .gitignore을 수정해서 다시 add 하고 commit했을때
  - 새로 수정한 \*.js 부분을 저장하고있어
  - 모든파일을 저장하지않아!
  - 100메가를 commit을 3번하면 300메가되는걸 막는거지

### commit 5개 추가하기 실습

1. development.json 저장 후 commit
2. setting.json 파일만들고 저장 후 commit

```json
{
  "port": 3000,
  "message": "App listening on the port 3000"
}
```

3. setting.xml 파일 만들고 저장 후 commit

```xml

<root>
    <port>3000</port>
    <message>App listening on the port 3000</message>
</root>
```

4. test.json 삭제 후 commit
5. development.json 변경 후 commit

```json
"database":"board"
```

워킹디렉토리가 같을때 노란색에서 초록색이떠!

git graph 설치하면 git log를 UI적으로 볼수있어!
소스제어

- head 옮기기

```sh
git checkout HEAD^
# 내기준에서 HEAD가 바로아래칸으로 내려가

git checkout HEAD~3
# 3칸아래로 내려가

git checkout [커밋번호]
git checkout master
git switch master #이게 최신문법
# 최상위로 올라가기

```

## commit 되돌리기

커밋을 8개 만들었는데,
HEAD 커밋의 최상단 내용을 보는 것이 아니라
이전에 커밋을 했던 내용으로 돌아가는것을 해보기

checkout을 통해서 한것처럼 보일뿐! 돌아간것이 아님

`reset` `revert`
두개의 명령어는 공톰점이있지만
아주 큰 차이점이 있음

1. `reset` 문법

```sh
git rest --옵션 [커밋해쉬값]
```

- hard : 수정사항을 완전히 삭제한다 (강력한)
- mixed : repositoy에서 working 디렉토리로 이동
- soft : re -> staging area 로 이동

hard, soft를 주로 사용함

- hard의경우 8개중 6번째꺼를 삭제한다면
  - 5번의 이름으로 hard를 하면 5번 위로 6,7,8 을 다 날려버린다.
  - 굉장히 강력한 문법으로 사용하지않는게 좋아

원상복구는...
git reflog

- mixed 를 쓰면 working디렉토리에 들어가서 거기있는것들을 묶어서 커밋할수도있다?

2. `revert` 문법

- 어색하지만 가장많이 사용할 문법
- 히스토리를 삭제하지않고 새로만들어서 뒤로간것처럼 보이게 해
- 리셋보다 안전하다!
- 새로운 커밋을 만들어서 맨위로 가는거야 아래있는것을 삭제하지않고

```sh
git revert [커밋해시값]
```

test.json을 revert하면 위로 올라가져

```sh
# vi에디터로 기본값으로 설정하기
git config --global core.editor "vi"

```

화요일까지 git 수업하고
수요일부터 미니프로젝트로

4명이서 게시판 만들기
한명씩 c,r,u,d 만들고
git통해서 합쳐
