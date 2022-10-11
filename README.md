## App com exemplo de utilização de fontes externas com EXPO

Fluxo de comandos utilizados na criação do app

```sh
expo init <nome-do-projeto-aqui>
```

## Opção 1

Baixar a fonte que deseja e adicionar ela fisicamente no seu projeto
Google Fonts: https://fonts.google.com/ (Obs: Sempre dou preferencia para fontes na extensão .ttf)

Instalar o pacote de gerenciamento de fontes do expo:
```sh
npx expo install expo-font
```

## Opção 2

Instalar a fonte através do gerenciador de pacotes
```sh
expo install @expo-google-fonts/inter
```

## Site alternativo para procurar fontes

O site https://directory.vercel.app/ também é uma excelente opção para procurar fontes, ele já conta 
com o script de instalação e importação de fontes para a fonte que você escolher.