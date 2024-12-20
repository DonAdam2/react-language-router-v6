const { isCssModules, rootDirectory } = require('./buildTools/constants'),
  fs = require('fs');

const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

const startsWithUseKeyWord = () => {
  return (value) => {
    if (String(value).startsWith('use')) {
      return true;
    }
    return 'Custom hooks should start with use keyword';
  };
};

const isStoreEntityExist = (entityName) =>
  fs.existsSync(`./${rootDirectory}/ts/store/${entityName}`);

const createQuestion = (type) => {
  const isReducer = type === 'reducer',
    isHook = type === 'hook';

  if (isReducer) {
    return [
      {
        type: 'input',
        name: 'reducerEntity',
        message: `What is your entity name (directory in store)?`,
        validate: requireField('reducerEntity'),
      },
      {
        type: 'input',
        name: 'name',
        message: `What is your ${type} name?`,
        validate: requireField('name'),
      },
    ];
  } else {
    return {
      // Raw text input
      type: 'input',
      // Variable name for this input
      name: 'name',
      // Prompt to display on command line
      message: `What is your ${type} name?`,
      // make sure that name is not empty
      validate: isHook ? requireField('name') && startsWithUseKeyWord() : requireField('name'),
    };
  }
};

const generateContainerOrPage = (isPage = false) => {
  let actionsList = [
    {
      type: 'add',
      path: `${rootDirectory}/ts/containers${isPage ? '/pages' : ''}/{{camelCase name}}${
        isPage ? 'Page' : ''
      }/{{pascalCase name}}${isPage ? 'Page' : ''}.tsx`,
      templateFile: `generatorTemplates${isPage ? '/page/Page' : '/component/Component'}.js.hbs`,
      data: { isCssModules },
    },
    {
      type: 'add',
      path: `${rootDirectory}/ts/containers${isPage ? '/pages' : ''}/{{camelCase name}}${
        isPage ? 'Page' : ''
      }/{{pascalCase name}}${isPage ? 'Page' : ''}.test.tsx`,
      templateFile: `generatorTemplates${
        isPage ? '/page/Page' : '/component/Component'
      }.test.js.hbs`,
    },
  ];

  if (isCssModules) {
    actionsList.push({
      type: 'add',
      path: `${rootDirectory}/ts/containers${isPage ? '/pages' : ''}/{{camelCase name}}${
        isPage ? 'Page' : ''
      }/{{pascalCase name}}${isPage ? 'Page' : ''}.scss`,
      templateFile: 'generatorTemplates/component/Component.scss.hbs',
    });
  } else {
    actionsList.push(
      {
        type: 'add',
        path: `${rootDirectory}/scss/containers${isPage ? '/pages' : ''}/_{{dashCase name}}${
          isPage ? '-page' : ''
        }.scss`,
        templateFile: 'generatorTemplates/component/Component.scss.hbs',
      },
      {
        type: 'append',
        path: `${rootDirectory}/scss/_containers.scss`,
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `@use './containers${isPage ? '/pages' : ''}/{{dashCase name}}${
          isPage ? '-page' : ''
        }';`,
      }
    );
  }

  return actionsList;
};

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [createQuestion('component')],
    actions: function () {
      let actionsList = [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: `${rootDirectory}/ts/components/{{camelCase name}}/{{pascalCase name}}.tsx`,
          // Handlebars template used to generate content of new file
          templateFile: 'generatorTemplates/component/Component.js.hbs',
          data: { isCssModules },
        },
        {
          type: 'add',
          path: `${rootDirectory}/ts/components/{{camelCase name}}/{{pascalCase name}}.test.tsx`,
          templateFile: 'generatorTemplates/component/Component.test.js.hbs',
        },
      ];

      if (isCssModules) {
        actionsList.push({
          type: 'add',
          path: `${rootDirectory}/ts/components/{{camelCase name}}/{{pascalCase name}}.scss`,
          templateFile: 'generatorTemplates/component/Component.scss.hbs',
        });
      } else {
        actionsList.push(
          {
            type: 'add',
            path: `${rootDirectory}/scss/components/_{{dashCase name}}.scss`,
            templateFile: 'generatorTemplates/component/Component.scss.hbs',
          },
          {
            type: 'append',
            path: `${rootDirectory}/scss/_components.scss`,
            pattern: `/* PLOP_INJECT_IMPORT */`,
            template: `@use './components/{{dashCase name}}';`,
          }
        );
      }

      return actionsList;
    },
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [createQuestion('page')],
    actions: generateContainerOrPage(true),
  });

  plop.setGenerator('container', {
    description: 'Create a container',
    prompts: [createQuestion('container')],
    actions: generateContainerOrPage(),
  });

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [createQuestion('hook')],
    actions: [
      {
        type: 'add',
        path: `${rootDirectory}/ts/customHooks/{{camelCase name}}.ts`,
        templateFile: 'generatorTemplates/hook.js.hbs',
      },
    ],
  });

  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [createQuestion('service')],
    actions: [
      {
        type: 'add',
        path: `${rootDirectory}/ts/services/{{pascalCase name}}Service.ts`,
        templateFile: 'generatorTemplates/service/Service.js.hbs',
      },
      {
        type: 'add',
        path: `${rootDirectory}/ts/services/HttpService.ts`,
        templateFile: 'generatorTemplates/service/HttpService.js.hbs',
        skipIfExists: true,
      },
    ],
  });

  plop.setGenerator('reducer', {
    description: 'Create a reducer',
    prompts: createQuestion('reducer'),
    actions: function (data) {
      let actionsList = [
        {
          type: 'add',
          path: `${rootDirectory}/ts/store/{{camelCase reducerEntity}}/slices/{{pascalCase name}}Slice.ts`,
          templateFile: 'generatorTemplates/reducer/Slice.js.hbs',
        },
        {
          type: 'add',
          path: `${rootDirectory}/ts/store/{{camelCase reducerEntity}}/selectors/{{pascalCase name}}Selectors.ts`,
          templateFile: 'generatorTemplates/reducer/Selectors.js.hbs',
        },
        {
          type: 'append',
          path: `${rootDirectory}/ts/store/rootReducer.ts`,
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{camelCase name}} from './{{camelCase reducerEntity}}/slices/{{pascalCase name}}Slice';`,
        },
        {
          type: 'append',
          path: `${rootDirectory}/ts/store/rootReducer.ts`,
          pattern: `/* PLOP_INJECT_REDUCER_SLICE */`,
          template: `{{camelCase name}},`,
        },
      ];

      //if store entity (directory) exists
      if (isStoreEntityExist(data.reducerEntity)) {
        actionsList.push({
          type: 'append',
          path: `${rootDirectory}/ts/store/{{camelCase reducerEntity}}/{{pascalCase reducerEntity}}EntityInterfaces.ts`,
          pattern: `/* PLOP_INJECT_REDUCER_INTERFACE */`,
          template: `
						export interface {{pascalCase name}}SliceInitialState {
							testString: string;
						}
						`,
        });
      } else {
        actionsList.push({
          type: 'add',
          path: `${rootDirectory}/ts/store/{{camelCase reducerEntity}}/{{pascalCase reducerEntity}}EntityInterfaces.ts`,
          templateFile: 'generatorTemplates/reducer/EntityInterfaces.js.hbs',
        });
      }

      return actionsList;
    },
  });
};
