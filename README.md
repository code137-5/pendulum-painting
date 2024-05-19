# Pedulum Paint

안녕하세요. 이상헌입니다.
p5 타입스크립트 보일러 플레이트를 활용했습니다.
개인적으로는 로컬에서는 런타임으로 bun을 사용하고 있습니다.

아래 보일러 플레이트 리드미를 참고하시어 실행하시면 됩니다.

---

## p5-TypeScript Boilerplate

A boilerplate for developing p5.js applications using TypeScript, powered by webpack.

## Features

- Compile TypeScript to JavaScript and bundle them into a single JS file
- Hot Module Reload in development environment

## Setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

### Compiles for development

```bash
npm run start
```

### Compiles and watches for development

```bash
npm run watch
```

### Clean files

```bash
npm run clean:dist # clean ./dist folder
npm run clean:deps # clean ./node_modules folder
npm run clean # clean both
```

## Usage

Put your production code under `src` directory and the main entry should be `src/index.ts`
