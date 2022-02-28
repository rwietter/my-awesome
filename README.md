# 🗄️ Project Structure

A maior parte do código fica na pasta `src` e se parece com isso:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
```

Para escalar o aplicativo da maneira mais fácil e sustentável, mantenha a maior parte do código dentro da pasta `features`, que deve conter diferentes coisas baseadas em recursos. Cada pasta `feature` deve conter um código específico de domínio para um determinado recurso. Isso permitirá que você mantenha as funcionalidades no escopo de um recurso e não misture suas declarações com coisas compartilhadas. Isso é muito mais fácil de manter do que uma estrutura de pastas simples com muitos arquivos.

Um recurso pode ter a seguinte estrutura:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components para páginas de recursos específicos
|
+-- stores      # state stores para um recurso específico
|
+-- types       # typescript types para domínio de recurso específico de TS
|
+-- utils       # funções de utilidade para um recurso específico
|
+-- index.ts    # ponto de entrada para o recurso, ele deve servir como a API pública do recurso fornecido e exporta tudo o que deve ser usado fora do recurso
```

### Architecture

```sh
└── src/
		├── # As "features" contém tudo relacionado as funcionalidades especificamente
    ├── features/
    │   ├── alerts/
    │   ├── issues/
    │   ├── todos/
    │   │   ├── # o index.js é usado para exportar os módulos relevantes, também conhecidos como API pública.
    │   │   ├── index.js
    │   │   ├── create-todo-form/
    │   │   ├── edit-todo-modal/
    │   │   ├── todo-form/
    │   │   ├── todo-list/
    │   │   │   ├── # a API pública do componente (exporta o componente de lista de tarefas e o hook)
    │   │   │   ├── index.js
    │   │   │   ├── todo-item.component.js
    │   │   │   ├── todo-list.component.js
    │   │   │   ├── todo-list.context.js
    │   │   │   ├── todo-list.test.js
    │   │   │   ├── use-todo-list.js
    │   ├── organization/
    │   ├── projects/
    │   │   ├── index.js
    │   │   ├── create-project-form/
    │   │   │   ├── project-card.js
    │   │   │   └── project-list.js
    │   │   ├──project-list/
    │   ├── ui/
    │   │   ├── index.js
    │   │   ├── card/
    │   │   ├── header/
    │   │   ├── footer/
    │   │   ├── side-navigation/
    │   │   └── tag/
    │   │   └── button/
    │   │   └── checkbox/
    │   │   └── text-field/
    │   │   └── modal/
    │   │─── users/
    │       ├── index.js
    │       ├── login/
    │       ├── signup/
    │       └── use-auth.js
    └── pages/
				│   # tudo o que resta na pasta pages são arquivos JS simples
        │   # cada arquivo representa uma página (como Next.js)
        ├── alerts.js
        ├── issues.js
        ├── projects.js
        ├── settings.js
        └── users.js
```

Uma pasta de recursos também pode conter outros recursos (se usada apenas dentro do recurso pai) ou ser mantida separada, é uma questão de preferência.

Tudo de um recurso deve ser exportado do arquivo `index.ts` que se comporta como a API pública do recurso.

Você deve importar coisas de outros recursos apenas usando:

`import {AwesomeComponent} from "@/features/awesome-feature"`

e não

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`

Isso também pode ser configurado na configuração do ESLint para impedir a importação posterior pela seguinte regra:

```js
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ],

    // ...rest of the configuration
}
```

Isso foi inspirado em como o [NX](https://nx.dev/) lida com bibliotecas isoladas, mas disponíveis para serem usadas por outros módulos. Pense em um recurso como uma biblioteca ou um módulo independente, mas que pode expor diferentes partes a outros recursos por meio de seu ponto de entrada.


### Unutil code

```javascript
import { styled } from '@stitches/react';

export const Container = styled('div', {
  padding: '5rem 5rem 2rem 20rem',
});
```
