# Netlify CMS

Content management for the jamstack era

---

# Outline

- Netlify & the jamstack
- Content & content management
- Netlify CMS

---

# What is [Netlify](https://www.netlify.com/)?

- A platform for developing static sites with superpowers ("jamstack").

.img-large[![](/media/netlify-workflow.png)]

.img-large[![](/media/netlify-extras.png)]

> Full-powered sites — no servers required

> Give backend superpowers to your frontend code

---

# Example

- [Code repository](https://github.com/Peter554/netlifycmsdemo)
- [Netlify dashboard](https://app.netlify.com/sites/peter554-netlifycmsdemo)
- [Live website](https://peter554-netlifycmsdemo.netlify.app)

---

# What is the [jamstack](https://jamstack.org/)?

> Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

.img-large[![](/media/jamstack.png)]

(JAM = JavaScript, APIs & Markup)

---

# Benefits of the jamstack

- Performance
- Scaling
- Security
- Developer Experience

---

# What do we mean by "content"?

- The raw content of a website.
- Data.
- Not authored by developers (usually).

Example: https://www.bbc.com/news

Some other parts of a website: layout, styles, widgets, business logic.

---

# How do we get content onto our site?

- Write a ticket for the development team, who manually update the code.
- Use a content management system (CMS). Provides an interface for non-developers to contribute content to the site.

A traditional CMS will store content in a database, requiring a backend server to inject content into templates at runtime (server side rendering).

---

# So what's up with [Netlify CMS](https://www.netlifycms.org/)?

Netlify CMS takes a different approach.

- *Content as code*. Content is stored in the git repository, just like the code.
- Integrates seamlessly with the Netlify build system.
- Changes in content automatically commit onto the git repository, which then triggers a build in Netlify.

This approach enables us to deploy a static site - all the benefits of jamstack!

Content authors don't need technical understanding of the code or git.

---

# How do I add Netlify CMS to my jamstack site?

- Enable Netlify identity. We need authentication for admin users (content authors).
- Add folder admin with files `index.html` and [`config.yml`](https://raw.githubusercontent.com/Peter554/netlifycmsdemo/master/src/admin/config.yml).

`index.html` simply contains the Netlify CMS script. `config.yml` contains the configuration.

That's it!

---

# Example

- [Code repository](https://github.com/Peter554/netlifycmsdemo)
- [Netlify dashboard](https://app.netlify.com/sites/peter554-netlifycmsdemo)
- [Live website](https://peter554-netlifycmsdemo.netlify.app)
