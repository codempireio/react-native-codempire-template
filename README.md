# React Native Codempire Tempalte 🇺🇦

[![Email](https://img.shields.io/badge/made_by-CODEMPIRE-green.svg?style=flat)](mailto:sales@codempire.io)

> React Native template for a quick start based on our [**Code Style**](https://github.com/codempireio/code-style)

## Features

- Quick starting via [React Native CLI](https://github.com/react-native-community/cli)
- Folder structure skeleton with our code-style
- Most usable libriaries included
- Useful npm scripts

## Usage

```sh
npx react-native init MyApp --template https://github.com/codempireio/react-native-codempire-template.git
```

### Folder Structure Description

- `screens` - folder that keeps all phone screens with its components, types, styles, redux connection or services;
- `navigation` - navigation stacks created with screens into application rouring
- `components` - contain components that used on different screens structured with atomic method: atoms - the smallest, molecules - using atoms and custom logic, organisms - using atoms, molecules and custom logic
- `services` - classes that used on different screens and components, separated into 3 folders: helpers - default functions (date, currency, math, etc), hooks - for state enhancement, store - redux
- `constants` - shared variables placed into 1 folder
- `theme` - shared styles (font sizes, colors, animations, etc)
- `typings` - shared types
- `assets` - contains icons, fonts, images, animation and other not programmable project resourcdes

### ToDo List

- [ ] Pre-commit hook
- [ ] Storybook
- [ ] Feature (Social Media Login)
- [ ] CI/CD AppCenter (.env)

## Contact Us 😏

You can always contact us via sales@codempire.io. We are open to any inquiries regarding our guides, libraries, and controls, new open-source projects and other ways of contributing to the community. If you have used our stuff in your project we would be extremely happy if you write to us your feedback and let us know about it!

Copyright © Codempire
