# chaos-react-boilerplate
Customized version of react-boilerplate

documentation (french) : https://docs.google.com/document/d/19WL_VBK8oHHyyhdAzxGMGHJ1NYYQkJeotexNZ9jrvMw/

## Commands

- yarn > install packages
- yarn start > run dev mode
- yarn lint > eslint / JSX verifications
- yarn test > lint & unit tests
- yarn test MyComponentn > lint & unit tests for a single component
- yarn storybook > test documentation generator (HMR)
- yarn build-storybook > generate static doc, in storybook-static/index.hmtl

## Adds to react-boilerplate

### Config

- removed pre-commit, didn't work
- package.json > replace npm run with yarn, removed -- to forward option (deprecated in yarn)
- webpack > clearer debug
- install a theme provider
- install a documentation generator (storybook) & major addons (actions, links, notes, info)