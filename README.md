# Urbana Stories Project

This is a simple Eleventy-based website designed simple and accessible. The site has a list of posts, pages for each post, and a Contact and About page.

## Quickstart
To get the site building locally:
1. use Homebrew to install Node and [Eleventy](https://www.11ty.dev/docs/)
1. Run `npx @11ty/eleventy` and `npx @11ty/eleventy --serve` in Terminal
1. Open your browser to `http://localhost:8080/`

## References

- [Urbana.il.gov](https://www.urbanail.gov/living-urbana/page/historic-urbana)
- [CU History museum](https://www.champaigncountyhistory.org/)
- [CU neighborhood stories](https://storymaps.arcgis.com/stories/8a41395e64ee42bb886c36331a76a014)

## Project Structure

```
my-eleventy-site
├── src
│   ├── _includes
│   │   ├── header.njk
│   │   └── footer.njk
│   ├── posts
│   │   └── example-post.md
│   ├── index.md
│   ├── about.md
│   ├── contact.md
│   └── colophon.md
├── .eleventy.js
├── .gitignore
├── .github
│   └── workflows
│       └── deploy.yml
├── package.json
├── tasks.md
├── README.md
└── styles.css
```

## Features

- **Header and Footer Templates**: Consistent layout across all pages.
- **Homepage**: Lists all blog posts with links.
- **Contact Page**: Provides contact information.
- **Colophon Page**: Details about the website's creation and technologies used.
- **RSS Feed**: Automatically generated as new posts are added.
- **GitHub Actions**: Automatically builds and deploys the site to GitHub Pages on commit.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd my-eleventy-site
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Development Server**: 
   ```
   npx eleventy --serve
   ```

4. **Build the Site**: 
   ```
   npx eleventy
   ```

5. **Deploy to GitHub Pages**: 
   The site will automatically deploy on commits due to the GitHub Actions workflow configured in `.github/workflows/deploy.yml`.

## Usage

- Add new posts in the `src/posts` directory.
- Update the homepage to reflect new posts.
- Modify the `styles.css` file for any custom styling needs.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.
