# Linux

## 목차

- 리룩스란?
- 리눅스 구조
- 리눅스 특징 구조
- 우분투(Ubuntu)
- CLI 검정 화면에 명령어를 쓰는것 (window는 GUI)
- 디렉토리 구조
- 사용자 계정
- 다운로드

## 리눅스란?

- OS

  - 컴퓨터 운영체제 (window와 같은것!) 소프트웨어의 역할
  - 하드웨어 눈으로 볼수있어(메모리,CPU)
  - 소프트웨어는 사람눈으로 볼수없어
  - OS는 가장 기본적인 소프트웨어!
  - OS안에 window Linux 유닉스

- 리눅스는 오픈소스 개발로 무료임
- 마스코트 펭귄은 턱스

## 리눅스 구조

- 유닉스 기반 (유료-맥이 유닉스기반이라서 따로 리눅스를 받을필요x)

  _카카오톡_, _Excel_ _Chorme_ `응용프로그램`

`Shell` `OS`

```mermaid

graph LR

<!-- A(OS) --> B(하드웨어) -->


A(응용 프로그램) --> B(Shell)
B --> C (Kernel)
C--> D(하드웨어)
```

### shell 이란!!

커널에서 pwd, dir 같이 입력한 명령어들
-> 사용자가 필요한게 shell (파일 열고싶어, 복사하고, 삭제하고 )
--> pwd를 입력했다면 shell을 보고 kernel이 하드웨어를 읽고나서 다시 사용자에게 보여주는것!!

## 리눅스 특징 구조

리눅스는 유닉스라는 운영체제 기반으로 하고있다.
윈도우처럼 클릭하는 것보다 검정화면에서 하는것이 리소스가 적고 가볍다는 것
서버개발같은경우는 리소스 적은 리눅스를 사용
뛰어난 안정성, 보안성, 높은 신뢰성이 성능 특징이라고함
자원을 효율적으로 관리가능한 `멀티유저`와 `멀티 태스킹` 지원

- `멀티유저` : 사용자계정을 여러개 만들수있다는 매커니즘을 리눅스가 먼저사용
  - 컴퓨터를 키면 `계정명`과 `패스워드` 입력함 -> 로그인기능이있어(멀티유저) 디렉토리도 분리되어있어
  - `user` 끼리 디렉토리가 제한되어있어, 공용으로 사용할 디렉토리는 있어
  - 서로의 디렉토리를 권한설정과 파일권한(세부적으로)이 있어서 수정,삭제가 가능해짐 - 홈 디렉토리 ??

리눅스는 CLI이긴하지만 GUI도 있어 ...?

## 우분투(Ubuntu)

리눅스가 오픈소스 무료라서 파생이 되어 여러가지 제품군이 생겨났는데 그중에 하나가 `우분투`!
`Linux`라는 `OS`에서 하나의 제품군

> 리눅스의 다른 제품군들 검색해보기! (블로그 작성할때 Shell, kernel 좀더 검색)

## CLI

COMMAD LINE INTERFACE??
`실습`

1. 내가 원하는 디렉토리로 이동하기 -> `cd`
2. 디렉토리 생성하기 -> `mkdir [폴더명]` (폴더명 또는 경로+폴더명을 입력) 예를들면 hello
3. 메모장 열기 -> `vi hello`
4. 메모장 입력 -> `i` 다입력했다면 `ESC버튼`
5. 파일 저장하기 -> `:w`
6. 파일 닫고 -> `:q`
7. 다시 파일 열기 `vi hello`

wsl입력

- `pwd` : 현재 위치 /mnt/c/Users/KGA_29/Desktop/blockchain10/230814
- `cd` : `cd [명령내용]`

  - `[명령내용]` : 디렉토리를 상대경로, 절대경로
  - `.., .` : ../ ./ 현재 디렉토리에서 뒤로갈떄 사용
  - `~` : Home 디렉토리로 이동

  ```sh
  $ /mnt/c/Users/KGA_29/Desktop/blockchain10/230814
  $ cd ..
  /mnt/c/Users/KGA_29/Desktop/blockchain10

  ```

  - /home 에는 유저 계정들이 담겨있어서 ~를 자주 사용하게 될거야

- `ls` : 파일목록들을 보여주는

- `vi` 에디터에 대한 명령어도 알기!!!

  - 예를들면 `vi hello`
  - `:q` : vi에이터 나가기
  - 들어가자마자는 [mode] view insert
  - `i` 를입력하면 텍스트 입력가능
  - `ESC`를 누르면 인서트모드가 없어지고
  - `:w` : 저장
  - `:q` : 나가기
  - 수정하고 싶을떈 `vi hello` 입력해서 다시 들어가서 `i` `ESC`
  - `:wp` : 한번에 저장하고 파일 나가기

- 파일과 폴더를 구별해줌!!! 디렉토리는 파란 글씨, 파일은 그냥 하얀글씨
- `ls -l` : 기본적으로 파일 리스트 볼때 사용하기
  - -rw-r--r-- 1 root root 40 Aug 14 11:28 hello (이런식으로 나와->디렉토리 구조)
    - `-`:파일, `d`:디렉토리 11:32
    - r은 읽을수있고 w은 쓸수있고 x는 사용자 계정에서 권한에 대한 이슈!!
    - 9자리 --- --- --- , 파일수
- `ls -al` : 숨겨진 파일까지 보고싶을때 사용함 (.index.html 점붙어있는 파일은 유닉스기준 숨김파일이야1!!!!!)

## 디렉토리 구조

윈도우의 경우 C: C드라이브가 최상위

리눅스는 `/` 로 최상위 디렉토리

- /bin : 리눅스의 기본적인 명령어가 저장된 디렉토리 (cd, vi shell에 대한 등등)
- /etc : 환경설정에 관련된 부분이 저장되어있음 -> 예를들면, window에 `hosts`
- /home : `cd ~` 유저들이 가지고있는 디렉토리를 전부가지고있는 홈디렉토리 이거빼고는 전부공용디렉토리-> window에서 `사용자` 디렉토리
- /lib : 커널모듈파일과 라이브러리 파일이 저장되어있음 -> 프로그램들이라고 생각하면돼
- /var : 로그성 데이터들이 많이 모여있는 폴더 (기록되는..)
- /mnt : usb를 꽂았을떄 새로운 드라이브 내용을 보여주는 mnt(마운트) -> 윈도우가 나올거야

## 다운로드

리눅스는 기본적으로 파일을 다운받을때 인터넷을 사용한다.
PM (Package Manger)

apt-get
apt

apt istall lol ???

`shell`

- bash
- zsh : 편리해서 이걸더 많이쓴다고 함

설치해보기~~
git --version -> 있어
nvm --version
mysql --version

```sh
sudo brew install mysql
// 맥북일경우

sudo apt update
sudo apt upgrade

sudo apt install mysql-server
// mysql을 다운받는것
mysql --version
```

cmd 관리자 권한으로 실행 -> sudo
apt 게임할때 패치하는거와 같아
-> packgae manager가 어떤일을 하는지 배우려고 apt

`/` 는 절대 경로로 이동해!
-> `/ilb`은 root에서 lib디렉토리를찾아

mysql 설치를 하면 /bin /etc /lib /var 디렉토리에 mysql이 생김!!!

> 구직사이트보면 Linux언급하는 회사들이 있음 (명령어를 아는지)

수요일에는 user 관련해서 수업!!!

cd ~
cd cli
code .
-> vs코드 실행됌!!!!