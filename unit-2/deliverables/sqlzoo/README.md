# SQL Zoo

Run the following script inside of terminal. Be sure to be inside of the sqlzoo project folder.

```
npm install
```

Next, lets create a database using the data inside of `create_tables.sql` file using this command

```
psql sqlzoo < data/create_tables.sql
```

Create a `.env` file and store the following:

```
USER=<your username>
HOST=<your host>
DATABASE=sqlzoo
PASSWORD=<your password>
PORT=<your port>
```

Write query inside the backticks of each problem like the following:

## Starting code

```js
async function example_select() {
    const res = await client.query(
        `
        
        `
    );
    return res.rows;
}
```

## Ending code (with SQL query)

```js
async function example_select() {
    const res = await client.query(
        `
        SELECT
        population
        FROM
        countries
        WHERE
        name = 'France';
        `
    );
    return res.rows;
}
```

Run the following scripts to test your results for each problem set.

```
npm run test1
```

```
npm run test2
```

```
npm run test3
```

```
npm run test4
```

```
npm run test5
```

```
npm run test6
```

```
npm run test7
```

```
npm run test8
```

```
npm run test9
```

```
npm run test10
```

```
npm run test11
```
