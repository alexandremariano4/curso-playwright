## Iniciando um projeto com playwright:

```bash
npm init playwright@latest
```

1. Ao apertar enter, iniciará a instalação e você deverá escolher entre TypeScript ou JavaScript, no meu caso, escolhi TypeScript
2. Aperte Enter novamente para criar um diretório chamado “`tests`” para armazenar os testes.
3. Inicialmente não precisa criar um GitHub Actions workflow
4. Aperta Enter para instalar os browsers

Para rodar o primeiro teste criado, utilize

```bash
npx playwright test
```

## Criando um teste no playwright

Dentro da pasta “tests” que foi criada como padrão, crie um arquivo com a seguinte estrutura: `nome`.spec.ts sendo “nome” o nome que você quer dar a este teste.

No início do código, importe o objeto “test” e “expect” de ‘@plawright/test’ usando a seguinte sintaxe:

```bash
import {test, expect } from '@playwright/test'
```

Para criar um teste dentro do arquivo criado, utilize a sintaxe com arrow function para criar utilizando o objeto “test” importado, ficará assim o teste:

```bash
test('Webapp deve estar online', async ({page}) => {
    await page.goto('http://localhost:8080/')
}) 
```

- Todo teste do playwright é assíncrono, portanto, todo comando deve ter “await”.
- Toda função no playwright aguarda responder uma “promise” , que independente do resultado, deve ser retornada, sem o await, o código não espera essa promise.

## Debug do playwright

Utilizando o comando abaixo, ao iniciar a execução do teste no playwright, a ferramenta de debug é aberta juntamente, podendo executar linha a linha do teste.

```bash
npx playwright test --debug
```