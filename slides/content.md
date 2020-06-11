# Netlify CMS

Content management for the jamstack era

---

# Outline

- Netlify & the jamstack
- Content & content management
- Netlify CMS

---

# Netlify & the jamstack

## What is [Netlify](https://www.netlify.com/)?

> Netlify is an all-in-one platform for automating modern web projects. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow. Integrate dynamic functionality like serverless functions, user authentication, and form handling as your projects grow.

.img-center-lg[![](/media/netlify-workflow.png)]

.img-center-lg[![](/media/netlify-extras.png)]

---

# Netlify & the jamstack

Example:

- https://app.netlify.com/sites/peter554-netlifycmsdemo
- https://github.com/Peter554/netlifycmsdemo
- https://peter554-netlifycmsdemo.netlify.app

---

# Netlify & the jamstack

## What is the [jamstack](https://jamstack.org/)?

> Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

.img-center-lg[![](/media/jamstack.png)]

(JAM = JavaScript, APIs & Markup)

---

# Netlify & the jamstack

## Benefits of the jamstack

- Performance
- Simplicity
- Scaling
- Security
- SEO
- Developer Experience

---

# Content & content management

## What do we mean by "content"?

- The raw content of a website.
- Data?
- Not authored by developers (usually).

Example:

- https://www.bbc.com/news

Some other parts of a website: layout, styles, widgets, business logic.

---

# Content & content management

## How do we get content onto our site?

- Write a ticket for the development team, who manually update the code.
- Use a content management system (CMS). Provides an interface for non-developers to contribute content to the site.

Traditional CMS will store content in a database and will use a backend to construct webpages at runtime.

---

# Netlify CMS

## So what's up with [Netlify CMS](https://www.netlifycms.org/)?

Netlify CMS takes a different approach.

- *Content as code*. Content is stored in the git repository, just like the code.
- Integrates seamlessly with the Netlify build system.
- Changes in content automatically commit onto the git repository, which then triggers a build in Netlify.

---

# Netlify CMS

Example:

- https://peter554-netlifycmsdemo.netlify.app
