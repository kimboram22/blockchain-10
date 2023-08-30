# Github이란?

github는 사이트이름

`git`을 저장하는 `원격저장소`

작업하던 로컬 컴퓨터가 고장나거나 복구할수없을때 커밋들을 되찾을수없는데 usb에 저장해놓은게 아니라면,
그때 원격저장소에 저장해두는거야

원격 저장소는 내가 작업한 커밋을 올려두는곳

원격저장소 github

1. Repo만들기

2. Repo에 commit 올리기 (WSL2를 사용해서)

   - 내가 만든 저장소는 나만 올려야한다!
     - 내가 나임을 증명하기
       - github ID/PW : 보안적으로 취약함 (github는 통신), 이제 사용하지않아
       - github사이트에서 setting -> develop settings -> Tokens(classic)

3. 내가 나임을 증명하는 방법으로 `Token`을 사용한다!

   - 토큰이란 임의의 키값이다.
     - 사람이 외울수없는 정도의 길이로 이루어져있음
     - 토큰별로 설정을 할수도 있다! (교수님은 컴퓨터 마다 토큰이 있다고하심)
   - 토큰은 만료기간 설정과 권한 설정을 할수있다 -> 보안강화

4. 토큰을 외울수 없는데

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

이 토큰을 저장하는 공간이 `OS`마다 존재한다.

## window 일반 자격 증명

`C:\Program Files\Git\mingw64\bin\git-credential-manager-core.exe`

리눅스 디렉토리.. //// 슬래시
윈도우는 \ \ \ \ 역슬래시사용

윈도우 기준으로 개발을 진행할때 `\` 과 `/`를 사용할수있어

```sh
cd ~
mkdir github
cd github

git config --list

git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager-core.exe"


```

```js
const str ='\''
// 역슬래시를 적어주면 그뒤는 스트링이다라는 약속

cosnt str ='C:\Program Files\Git\mingw64'  //이거안돼
cosnt str ='C:\\Program Files\\Git\\mingw64'
```

## github connection

https://github.com/kimboram22/code.git

```sh

git init

echo "# code" >> README.md
#파일을 만들면서 내보낸다
echo "# 저장소입니다" >> README.md
cat README.md

git remote add origin https://github.com/kimboram22/code.git
# 오리진은 그냥 주소의 이름을 오리진이라고 하겠다는 것 aa라고 해도 상관없으
# 내 로컬저장소에서 remote를 추가할건데 이름은 오리진이고 주소야 라고 설정하는것

git remote add aa https://github.com/kimboram22/code.git

git remote
git push aa main

git push -u origin main
```

워킹디렉토리가 비었을떄 푸시가 가능해
쉘이 초록색이라는건 워킹디렉토리랑 뭐랑 같다는 상황

윈도우 자격증명에 github가 존재하지않아서 git push 진행이안돼

거기서 일반자격증명 추가로 만들어줘야해
git:https://github.com
kimboram22
토큰번호

```sh
git remote
git push
git pull
git clone
```

- remote :
- push : 원격저장소에 올리는것
- pull : 내 로컬에 .git 디렉토리가 존재할때 , 원격저장소에서 가져오는것
- clone : 저장소 그대로 전부를 가져오는것 (모든 커밋내용을 받은거야)

github 디렉토리, code 디렉토리에 각각 원격저장소(origin)에 올려서 커밋 4개 만들기
오류가 뜨는 이유

- git log를 보면 해시값이 달라 -커밋이 3갠데 github 디렉토리가올린걸 다른곳에 빼놓고 origin꺼를 pull 해놓고 최신인지 확인하고 push를해야
  - 커밋 4개를 만들수있어

오후에!!!

1. 같이 커밋해보기
2. 서로 같은 파일 push하고 오류 해결까지?
