<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Online Resume
</h1>

Online cv created based on this template: [gatsby-starter-cv](https://github.com/santosfrancisco/gatsby-starter-cv)
Template changed to include navigation bar and some extra sections and data

## 📷 Preview

![Preview](./preview.png)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    npx gatsby new my-default-starter https://github.com/ajimenezdev/gatsby-cv
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    yarn develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1. **Generate production build**

  That command will generate a production build on _public_ folder
  ```sh
    yarn build
  ```

## Configuration

Update the configuration file with your data. The configuration file is in ```data/siteConfig.js```

:warning: NOTE: Please change googleAnalyticsId to your ID.  See https://analytics.google.com for details.

> **Skills** is a set of your personal skills and their respective levels ranging from > 0 to 100.
> **jobs** is a set of your work experiences

```js
module.exports = {
  siteTitle: "Hi! I'm Alvaro!",
  siteDescription: `This is my personal website`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Alvaro Jimenez',
  twitterUsername: 'ajimenezdev',
  githubUsername: 'ajimenezdev',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `I'm a full-stack JS developer, currently focused in React/React Native development and blockchain solutions.<br/><br/>
  I worked in multiple stacks (React, AngularJs, .Net, Java, Android...), environments and types of companies (Startup, medium size and big corporate).<br/><br/>
  I currently work remotely as a frontend developer and mainly working with <strong>Javascript, React/ReactNative, NodeJS and Blockchain.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 90,
    },
    {
      name: 'CSS',
      level: 85,
    },
    {
      name: 'Javascript',
      level: 90,
    },
    {
      name: 'React',
      level: 85,
    },
    {
      name: 'ReactNative',
      level: 80,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'Git',
      level: 75,
    },
    {
      name: 'Bitcoin',
      level: 30,
    },
    {
      name: 'Ethereum & smartcontract',
      level: 30,
    },
  ],
  jobs: [
    {
      company: 'Lifelabs.io',
      begin: {
        month: 'may',
        year: '2018',
      },
      duration: null,
      location: 'UK - Remote',
      occupation: 'Lead Frontend Developer',
      description:
        'I joined the company as one of the main developers, leading the frontend and mobile app development and helping with the architecture and coordination of the backend and blokchain teams.',
    },
    /* ... */
  ],
  publications: [
    {
      title: 'React Native intermediate level',
      company_medium: 'OpenWebinars',
      date: {
        month: 'jun',
        year: '2019',
      },
      link: 'https://openwebinars.net/cursos/react-native-intermedio/',
      description:
        'Online training recorded for spanish e-learning platform. The training is for developers who know a little bit of ReactNative and wants to learn more about the platform',
    },
    /* ... */
  ],
  education: [
    {
      school: 'University of Balearic Islands',
      degree: 'Bachelor degree',
      field: 'Software Engineering',
      startYear: 2006,
      endYear: 2011,
    },
  ],
  languages: [
    {
      language: 'Spanish',
      level: 'Native tongue',
      code: 'ES',
    },
    {
      language: 'English',
      level: 'Fluid Written & Spoken',
      code: 'GB',
    },
    /* ... */
  ],
  social: {
    twitter: 'https://twitter.com/ajimenezdev/',
    linkedin: 'https://www.linkedin.com/in/alvarojimenezmartin/',
    github: 'https://github.com/ajimenezdev/',
    email: 'ajmjimens@gmail.com',
  },
  hobbies: [
    {
      name: 'Football',
      icon: 'FaFutbol',
    },
    /* ... */
  ],
  siteUrl: 'https://alvarojimenezmartin.com',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/favicon.jpg',
  resume: '/resume_alvaro_jimenez.pdf',
  headerLinks: [
    // {
    //   label: 'Alvaro Jimenez Martin',
    //   url: '/',
    // },
    {
      label: 'About',
      url: 'about',
    },
    {
      label: 'Skills',
      url: 'skills',
    },
    {
      label: 'Experience',
      url: 'experience',
    },
    {
      label: 'Publications',
      url: 'publications',
    },
    {
      label: 'Education',
      url: 'education',
    },
    {
      label: 'Hobbies',
      url: 'hobbies',
    }
  ],
}
```
