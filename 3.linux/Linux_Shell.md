# Linux Shell

- 사람이 말하는걸 컴퓨터가 알아듣게 바꿔주는것이 shell
  쉘 -> 커널 -> 하드웨어

1. bash
2. sh
3. zsh

linux를 설치하면 나오는게 `bash`
mac `bash` -> `zsh`

zsh 설치하기!

```sh

zsh --version

sudo apt update
sudo apt install zsh

sudo chsh -s /usr/bin/zsh root

whoami
grep [사용자명] /etc/passwd
grep root /etc/passwd

echo $SHELL

cd ~
source ~/.zshrc

```

안된다면 exit 나갔다가 다시 wsl 들어오고 echo $SHELL
/usr/bin/zsh
이게 나와야해!!!

zsh 설치하고 환경설정해야하는데
디렉토리에 .zshrc가 없어서 강제로 만들기로

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

설치후 .zshrc에 들어가서 vi에서 테마를 agnoster로 변경

source ~/.zshrc 로 다시 실행시켜주기!!!

```sh
#font 관련
sudo apt install fonts-powerline
D2Coding

vi .zshrc
# 맨마지막 아래코드에
prompt_context() {
   if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
     prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
   fi
}
# shell srcipt로

#저장후
source .zshrc

```

교수님처럼 테마 바꾸고 폰트 설정하고 커스텀까지 해본것!
