# Result Generator

This is a convenient way to end an operation by either producing an error with an error message or success with a success message.

## How to use it

### Install

Run the following command in your terminal:

```npm
npm install --save-dev result-generator
```

### Use it in your app

#### Import

```javascript
import ResultGenerator from "result-generator";
```

#### Use in code

I added a real-world example for creating a SQL database table.

```javascript
const resultGenerator = new ResultGenerator();

  async create() {
    const resultGenerator = new ResultGenerator();
    try {
      const [confirmation] = await this.connection.execute<ResultSetHeader>(
        `CREATE TABLE IF NOT EXISTS customers (
          customer_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
          officer_id SMALLINT UNSIGNED NOT NULL,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          PRIMARY KEY (customer_id),
          FOREIGN KEY (officer_id) REFERENCES officers(officer_id)
        );`
      );

      const success = resultGenerator.generateSuccess(
        JSON.stringify(confirmation)
      );

      return success;
    } catch (e) {
      const error = resultGenerator.generateError(e);
      return error;
    }
  }
```

This is how you use it to assert whether an operation has been successful or returned an error.

```javascript
customersRouter.put("/:id", async (req, res) => {
  const customer = createCustomerFromHTTPRequest(req);
  try {
    const customersDatabase = await createCustomersDatabase();
    const putResult = await customersDatabase.put(customer);
    if (putResult.success) return res.json(putResult.data);
    else throw new Error(putResult.error.message);
  } catch (e) {
    if (e instanceof Error) return res.status(404).json(e);
  }
});
```

## API

### Methods signature

```javascript
generateSuccess(data: string);
```

```javascript
generateError(err: unknown);
```
