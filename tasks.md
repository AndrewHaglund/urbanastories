# Tasks for Building My Eleventy Site

## 1. Set Up Project Structure
- Create the main project directory `my-eleventy-site`.
- Inside `my-eleventy-site`, create the `src` directory.
- Inside `src`, create the following directories:
  - `_includes`
  - `posts`

## 2. Create Template Files
- In `src/_includes`, create `header.njk` for the header template.
- In `src/_includes`, create `footer.njk` for the footer template.

## 3. Create Content Files
- In `src/posts`, create `example-post.md` for an example blog post.
- In `src`, create `index.md` for the homepage.
- In `src`, create `about.md` for the About page.
- In `src`, create `contact.md` for the Contact page.
- In `src`, create `colophon.md` for the Colophon page.

## 4. Configure Eleventy
- Create `.eleventy.js` in the root directory to configure Eleventy settings.
- Ensure input and output directories are set correctly.

## 5. Set Up GitHub Actions
- Create the directory `.github/workflows`.
- Inside `.github/workflows`, create `deploy.yml` for the GitHub Actions workflow to deploy the site.

## 6. Create Package Configuration
- Create `package.json` in the root directory to manage dependencies and scripts.

## 7. Create Stylesheet
- Create `styles.css` in the root directory for minimal CSS styles.

## 8. Create Documentation
- Create `README.md` in the root directory to document the project.

## 9. Implement RSS Feed Generation
- Research and implement a method to generate an RSS feed for new posts.

## 10. Test Accessibility and Compliance
- Test the website for accessibility and ensure it is compliant with Safari Reader Mode.

## 11. Deploy and Verify
- Commit changes to the repository.
- Verify that the GitHub Actions workflow builds and deploys the site correctly.