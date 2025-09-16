## Chapter 1: TypeScript Fundamentals

### Installation

Install TypeScript globally:

```bash
npm i -g typescript
```

### Run the .ts file:

```bash
npm i -g typescript
Example: tsc .\Basics.ts
```

---

## Points

- **tsc**: It is a compiler that helps to convert TypeScript into JavaScript.  
  (Behind the scenes, TypeScript gets converted into JavaScript and then runs in the browser.)

- ⚠️ **Warning**: Include the `.js` file in `index.html`, not the `.ts` file.  
  The browser understands JavaScript, not TypeScript.

- **Tedious Task**: Whenever you change the code, you need to re-compile the file using the `tsc` command.  
  To overcome this, we can compile the file with watch mode:
  ```bash
  tsc filename -w
  ```
- Watch Mode: Run the file in `watch mode`
  This will constantly watch the file for any changes.
  There is no need for manual re-compilation.
  ```bash
  tsc filename -w
  ````
---

### Creating a `tsc` Config File

- **Command:**
  ```bash
  tsc -init
  ```

- **Note:** The configuration file must be created in the root folder.
- After successful creation, uncomment the following options in
  `tsconfig.json:`
  ```bash
  "rootDir": "./src",
  "outDir": "./dist"
  ```

- **Now just run:**
  ```bash
  tsc -w
  ```
