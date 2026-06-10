# Research Wiki Structure Template

Use this template when building Astro + Starlight documentation wikis with organized content structure.

## Template

```
I'm building a research wiki about [TOPIC]. Create the following structure:

Sections:
1. [Section 1] — pages: [page-a], [page-b], [page-c]
2. [Section 2] — pages: [page-d], [page-e]
3. [Section 3] — pages: [page-f], [page-g], [page-h]
4. [Section 4] — pages: [page-i], [page-j]

For each page:
- Create an MDX file in src/content/docs/ with appropriate subdirectories
- Include frontmatter with title and description
- Write a 2-3 paragraph introduction
- Add section headers for what the page will cover
- Include at least one Markdown table where relevant

Also:
- Remove the default/example pages that came with the template
- Update astro.config.mjs to use autogenerate for each section directory
- Update the site title to "[YOUR WIKI NAME]"
- Use .mdx extension for all files.
```

## Usage

1. Copy the template above
2. Replace `[TOPIC]` with your research topic
3. Fill in section names and page names
4. Update `[YOUR WIKI NAME]` with the desired site title
5. Provide to Claude for implementation
