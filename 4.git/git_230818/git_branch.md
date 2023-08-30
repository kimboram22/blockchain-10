## Git Branch

`브랜치(Branch)` 란
커밋 모양을 한줄로 하는게 아니라 여러줄로 처리하는것

```sh
wsl

cd ~
ls
code .
```

## Git Branch 사용법

```sh
git add README.md
git commit -m "docs : README.md 파일 추가"

```

`main` or `master` 라는 브랜치

- 요즘 main으로 바꾸고 있는 추세

`git init` 을 하면 브랜치가 하나가 꼭 생기는데 거기에 커밋이 쌓이고있는것 -> 하나의 프로세스에 쓰레드가 생긴것과 같아!

```sh
git branch

#branch만들기
git branch [만들 브랜치 이름]
git branch develop

#새로 만든 branch 이동하기
git switch develop
```

누르면 \* 이뜨는데 내가 보고있는 브랜치가 일치하다는것
새로만든 브랜치의 글씨가 얇고
브랜치를 만든다는건 head기준

마스터로인해서 디벨롭 브랜치를 만들었을때는 한줄로 이어져있었는데
헤드를 마스터로 바꾸고 작업을 추가한다면 가지가 거기서 생겨나는거야

헤드를 기준으로 어디서 커밋이 되는지!!1

두갈래로 갈라져!

```sh
# 브랜치를 생성함과 동시에 이동하는 옵션
git switch -c feature/board
git switch -c hoifix/board


# 브랜치 삭제
git branch -d hotfix/board

# 브랜치 이름 바꾸기 move
git branch -m feature/board feature/comment
```

리눅스는 파일 이름 바꾸는것도 이동하는거야 move

브랜치 3개를 커밋해서 먼저나오는거 테스트해보기 (그래프로)

main브랜치는 건들지않고 merge만!
새 브랜치 보통 develop 브랜치로 작업하고
각각 브랜치에서 작업하고 합쳐서 메인으로

## 브랜치 합치기

`merge` `rebase`

1. merge

```sh
git merge [브랜치명]

```

develop이랑 feature/comment를 합쳐

병합이슈가 없으면 커밋이 만들어지고 끝이난다.

만약 이슈가 있으면(merge conflict) 커밋이 만들어지지 않고 작업폴더만 이슈를 표현한다.
문제는 직접 본인이 해결하고 스테이지 영역에 직접넣어주고 git merge --continue

머지를 하면 커밋이 하나 더생겨난다!

2. rebase

```sh
git rebase [브랜치명]

```

develop이랑 master합쳐

rebase는 한줄로 합쳐져(줄기가 사라짐)
너무 브랜치가 많아서 정리하기위해서 주로 사용한다!

합치고나면 그 브랜치는 삭제해주기

### rebase -i 옵션 사용해보기

git clone 할때 .git 디렉토리영역에 만들지않기1!
cd ~ d

git clone https://github.com/ingoo-blockchain/rebase_sample

code . 이동하기

git rebase -i [해시값]

커밋메세지를 바꾼건데
커밋이 새로생기면서 커밋된거라 해시값이 달라졌어
reword -> asdfadf이걸 fix:파일수정 이렇게바꿨

git squash
git remote remove origint

교수님이 주신 걸로 브랜치도 만들어보고 커밋 관리해보기!
내일은 github 원격저장소
