# 사용자

`멀티 유저` : 여러 사용자가 동시에 하나의 시스템에 접근이 가능하다

- 보기 기능만 있다던지, 그런 권한 부여도 할수있다.
- _디렉토리_ 와 *파일*에 권한을 부여할수있다

교수님 `A` `B`
---나 root boram

```sh

whoami
#계정명확인하기

# #계정만들기!!

vi ~/word
#vi 안에 hello world!라고 입력

# -rw-r--r--  1 root root     13 Aug 17 10:59 word
cat word

-rw-r--r--


```

첫번째 자리는 파일인지 디렉토리인지 구별 d -
뒤에 아홉자리는 3개씩 끊어서 읽어

rw- r-- r--

- r : read 읽고
- w : write 쓰고 -> 조작이가능하다는것 (삭제까지)
- x : execute 실행

rwx를 숫자로 표현가능함

rw- r-- r-- : 421
읽을수 있고 쓸수있다면 4+2 6 : rw-

6: rw-
5: r-x
4: r--
7: rwx

### 왜 3개가 있는지?

rw- r-- r-- : 644

- -rw-r--r-- 1 root root 13 Aug 17 10:59 word

- 첫번째꺼는 소유자의 권한 (root)
- 두번째꺼는 그룹의 권한 (root)
- 세번째꺼는 속해 있지 않는 기타 사람들의 권한

- [파일 타입][소유자 권한][그룹소유자 권한][그외 사용자권한]
- -          rw-        r--           r--

- r: read 읽기, 4
- w: write 쓰기, 2
- x : execution 실행,1

## chmod

권한을 바꿔보기~!!!

```sh
# -rw-r--r--
# -r--r--r-
# 444

sudo chmod 444 ./word

# ----r--r-
# 044

sudo chmod 044 ./word
```

`root` 최상위 계정

linux os
블록 9기(16명)와 블록 10기(10명)을 각각 권한주기보다는 그룹으로 묶어서 권한을 주는게 간편

**User 타입**

- 루트 사용자 : UID 0
- 시스템 사용자 UIDs 1 ~ 999
- 일반 사용자 : 나 UIDs 1000 ~ n

```sh
id
# uid=0(root) gid=0(root) groups=0(root)

id [user]

```

## user 생성

- useradd : '계정'만 생성
- adduser : 계정생성하고 부가적인 설정까지 가능

계정을 설정하면 이런작업을 adduser 해줘야해
bash -> zsh, 홈 디렉토리 cd ~ , 그룹설정

**useradd**

```sh
sudo useradd guniee
sudo useradd boram
# 계정바꾸기
su - guniee

sudo passwd guniee
# 비밀번호 1234

sudo su - guniee

cat /etc/passwd | grep guniee
sudo mkdir guniee

# guniee 권한바꿔주기
chown [계정이름] ./디렉토리이름
sudo chown guniee ./guniee

# 그룹권한까지 주기
sudo chown guniee:guniee ./guniee


```

sudo chmod -R
