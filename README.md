# Parcel Bundler Boilerplate Collection

We've all been there: you have a project you're trying to get from concept to MVP as quickly as possible. You know that you should try build scalability/maintainability into your project, even in the early prototyping stages, but you don't want to spend 10,252 years configuring our build tooling.

[Queue the black-and-white infomercial montage]

![Oh Golly](https://i.pinimg.com/originals/ac/ca/d7/accad733e9db914aaee65cb29fe9761f.gif)

Enter the 'Parcel Bundler Boilerplate Collection' - a collection of (relatively) unopinionated build templates that leverages [Parcel Bundler](https://github.com/parcel-bundler/parcel) in each. The aim of each boilerplate is to expose a generic workflow to the user that can be easily customized without having to read loads of documentation.

### Current Boilerplates

- [Bootstrap](/bootstrap-parcel) (new!)
- [Mustard UI](/mustard-ui-parcel) (new!)
- [React](/react-parcel) (new!)
- [React + Bootstrap](/react-bootstrap-parcel) (new!)

## Installation

Note that you will need to have [NodeJS](https://nodejs.org/) installed to use this project. This project also uses [npx](https://www.npmjs.com/package/npx) to keep things simple (and to save yuo form having to install a bunch of packages globally) so if you are using an older verion of NPM/Node, you will need to install it manually using `npm install -g npx`;

To get you up and running, simply navigate to the particular boilerplate you wish to use and run the following:

```
npm install
```

<b>NOTE</b> - to keep things clean, there is only a `.gitignore` in the root of this repo but nit in any of the directories. As these will often be used as standalone projects, you will need to add a `.gitignore` yourself.

## Usage

This comes with just just a single bell and whistle, and they are as follows:

📐 <b>Development</b> - spins up a dev server on port `5500`

```
npm run start
```

🚧 <b>Build</b> - runs the vanilla Parcel build process `5500`

```
npm run build
```

🚀 <b>Launch Chrome</b> - launches incognito instance of Chrome to `http://localhost:5500`

```
npm run launch
```

## Contributing

Pull requests are welcome (especially as [with all my projects] this is more of a doodle than a fully maintained project). For major changes, please open an issue first to discuss what you would like to change. Bear in mind that the aim here is to keep the boilerplates as generic as possible.

## Licence

See [licence here](/LICENSE). More info can be found at [neobadger.com](https://neobadger.com).
