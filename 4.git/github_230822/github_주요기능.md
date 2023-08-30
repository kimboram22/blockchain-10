## github 주요기능

1. 메뉴 탭

- code
- issues : 게시판
- - pull requests : 가장많이사용할 메뉴!!! (pr)
- - actions : 리액트, 타입스크립트, CI/CD (CD는 자동배포- 메인브랜치에)
- projects : todo list만들때 많이사용하는..
- - wiki : 가장많이 꾸미는 페이지로 프로젝트 기록남기고 포폴처럼

### pr사용방법 교수님꺼 보기

```sh
git branch develop
git switch develop
git add .
git commit -m "feat: WIP:수업자료 준비중"
git push origin develop
#github 들어가서 pr을 하고 메세지를 남긴다, 머지된것아님!
git switch main
git push origin main
git pull origin main

```

원격저장소에서만 merge하고
작업자들은 일단 push만하고??? 그 원격저장소에서 pull하는?????

풀리케하면 원격저장소에서 main이랑 develop을 머지해준다
conflict가 뜨면 깃허브에서 어떤파일때문에 그런지 알려주고
직접 수정을 해주고 풀리케를 해야

머지를 하기전에 검증을 할수있다. 풀리케, 협업에 좋아
커뮤니케이션 기능을 넣어둔거야 github가

이어서...

```sh
git branch feature/github
git switch feature/github
git add .
git commit -m "faet:github 수업"
git push origin feature/github

```

머지를 로컬에서 하지않아도된다.
머지전에 커뮤니케이션 가능
메모도 남길수있다
관리자입장에서도 이슈나 내용을 관리하기 용이하다

- forks ????
  개발할때?? 같이프로젝트한거내용이 내깃에도 뜨게하려고?
  커밋내용까지 다 가져가는거고
  Sync fork를 하면

교수님 포크한것에 내꺼 clone하고 md파일에 이름,블로그,깃헙주소 push하기

```sh
git clone https://github.com/kimboram22/blockchain10.git
cd blockchain10
git branch boram
git switch boram
git add README.md
git commit -m "feat: README.md 수정"
git push origin boram
```

restore ??

55 각각한명씩 한파일씩 만들어
팀장이 repo파고 팀원이 클론받아서 피알보내고
커밋메세지 컨벤션 중요해!

코드 컨벤션, 커밋 컨벤션, 서로가 서로간의 코드 리뷰 pr 에서 하기!

1 팀장은 관리 (github)
2 list
3 view(delete)
4 write
5 modify

인터페이스 정의
같이 유틸

\*\*\* 주요 목적 github 많이 쓰기와 코드리뷰!!!!!
