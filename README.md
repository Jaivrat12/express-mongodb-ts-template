# Node Express Template (with MongoDB and TypeScript)

## Getting Started
Create a `.env` file and add these lines:

```
PORT=8000
MONGODB_URL=mongodb://localhost:27017/temp
```

> **Note**: You'll have to install MongoDB locally on your machine first. Or you can get a URL from MongoDB Atlas and use that instead.

Install dependencies and run the development server:

```bash
npm i
npm run dev
```

The server will then start listening to the requests on this URL:
> http://localhost:8000/

## Features
- `REST API` Example (with MongoDB)
- Well-organized `Folder Structure`
    - Separation of `Models`, `Controllers`, `Services`, and `Routes`
- Added `Error Handler` middleware
- Throw custom `Errors`
    - Respond with custom error messages by just throwing errors!
    - No need to use `res.status(4xx).json(error)`
- Added `Winston Logger`
    - Configured to write to STDOUT and log files
- Pre-configured with `TypeScript` & `Prettier`

## Todo
- Add a `Testing Library`
- Validation/sanitization of request params, query, and body.
- Add `Authentication`
- Use of `DTO` (Data Transfer Object)
- Validate `env` variables

## Doubts

### Best way for deploying a TypeScript project
1. Run TypeScript on prod using `ts-node`?
    - `--transpile-only` to reduce memory footprint
2. Build locally and then push the complied js files to GitHub?
    - But it will pollute the changed files in the commits
    - Use `Husky` or `GitHub Actions`, or both?
