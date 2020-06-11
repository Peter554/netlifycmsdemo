# Netlify CMS

Content management for the jamstack era

---

# Outline

- Netlify & the jamstack
- Content & content management
- Netlify CMS

---

# What is [Netlify](https://www.netlify.com/)?

> Netlify is an all-in-one platform for automating modern web projects. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow. Integrate dynamic functionality like serverless functions, user authentication, and form handling as your projects grow.

.img-large[![](/media/netlify-workflow.png)]

.img-large[![](/media/netlify-extras.png)]

---

# Example

- Netlify dashboard: https://app.netlify.com/sites/peter554-netlifycmsdemo
- Code repository: https://github.com/Peter554/netlifycmsdemo
- Live website: https://peter554-netlifycmsdemo.netlify.app

---

# What is the [jamstack](https://jamstack.org/)?

> Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

.img-large[![](/media/jamstack.png)]

(JAM = JavaScript, APIs & Markup)

---

# Benefits of the jamstack

- Performance
- Simplicity
- Scaling
- Security
- SEO
- Developer Experience

---

# What do we mean by "content"?

- The raw content of a website.
- Data?
- Not authored by developers (usually).

Example: https://www.bbc.com/news

Some other parts of a website: layout, styles, widgets, business logic.

---

# How do we get content onto our site?

- Write a ticket for the development team, who manually update the code.
- Use a content management system (CMS). Provides an interface for non-developers to contribute content to the site.

Traditional CMS will store content in a database and will use a backend to construct webpages at runtime.

---

# So what's up with [Netlify CMS](https://www.netlifycms.org/)?

Netlify CMS takes a different approach.

- *Content as code*. Content is stored in the git repository, just like the code.
- Integrates seamlessly with the Netlify build system.
- Changes in content automatically commit onto the git repository, which then triggers a build in Netlify.

This approach enables us to deploy a static site - all the benefits of jamstack!

---

# How do I add Netlify CMS to my jamstack site?

- Enable Netlify identity.
- Add folder [admin](https://github.com/Peter554/netlifycmsdemo/tree/master/src/admin) with files `index.html` and `config.yml`.
- `index.html` simply contains the Netlify CMS script. `config.yml` contains the configuration.

That's it!

---

# Example

- https://peter554-netlifycmsdemo.netlify.app
