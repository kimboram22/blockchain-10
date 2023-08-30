# Linux Process

프로세스의 일반적인 정의

- 프로그램을 실행하는것이 프로세스로
- 실행중인 프로그램

```js
for (let i = 2; i <= 9; i++) {
  console.log(i);
}
```

- 컴퓨터 CPU에서 실행되는 모든 프로그램을 프로세스라고한다. -> console.log
  - for 문이 끝나면 프로그램이 종료된다 (실행된게 끝난거니까)
  - 프로세스 종료 : 콜스택에서 실행되서 끝난거 1:28
  - 근데 for문을 각각 돌아도 메모리 공간은 다를수있어
- 프로그램은 프로세스가 실행될때마다 고유의 PID (프로세스 아이디가 생성된다)

  - setInetval로 1초마다 hello world 가 찍히는건
  - 백그라운드에 들어간 setInterval이 콜스택에 계속 들어가
  - 프로세스가 돈다는건 콜스택이 비어있지않고, 계속 쌓이고 실행됨을 나타난다. -> 적재된다고함
  - 그래서 프로세스를 kill 죽일수있어!

```sh
  ps -ef
 # ps : 프로세스 ctrl,alt,dlete를 누른것과 같아

  ^C #(컨트롤C)
  #강제로 프로세스를 끌수있어

  # PID 번호를 알면 프로세스를 끌수있어
  kill -[PPID] [PID번호]
  kill -9 [PID번호]


```

포그라운드 백그라운드 구분?
& 을 쓰면 백그라운드로 사용가능하다
아파치도 백그라운드! 그게 웹서버 (계속 돌고있어 꺼지면 안되니까) -> 아파치도 실행을 한것!!!

- class 가 프로그램이고
- 인스턴스가 프로세스인거야 1:48

- 프로그램을 실행시킨다는것은 메모리에 적재되어야한다는것

  - const a=10 이
  - 실행이되어야 a가 10이되는거고

- Nodejs 설치!
  - 6개월마다 하나씩 패치 (홀수)
  - 그래서 NVM (노드버전매니저) 를 설치해서 버전관리하는게 효과적!!

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

vi ~/.zshrc
vi ~/.bashc

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

#위에꺼를 zshrc에 추가해주기!!!!

source ~/.zshrc
nvm --version

node --version

nvm install --lts
```
