---
sidebar_position: 1
---

# Crear una cuenta

[Crea una cuenta](https://habituo.es/register) o [inicia sesión](https://habituo.es/login) en Habituo para poder comenzar a usar el **tracker de hábitos**.

- **Iniciar sesión** → `https://habituo.es/register`
- **Registrarse** → `https://habituo.es/login`
- **Recuperar contraseña** → `https://habituo.es/recover-password`

Recuerda que si se te ha olvidado la contraseña, siempre podrás [recuperarar tu cuenta](https://habituo.es/recover-password).

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
