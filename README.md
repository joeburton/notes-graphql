# apollo-server-vercel

Small GraphQL server [Apollo server](https://www.apollographql.com/docs/apollo-server/) on [Vercel](https://vercel.com/).

## Demo

Type the following command in your terminal to test:

```bash
curl  --location --request POST 'https://notes-graphql.vercel.app/graphql' \
      --header 'Content-Type: application/json' \
      --data-raw '{"query":"{\n    notes {id, title, note}\n}","variables":{}}'
```
