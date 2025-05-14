# PENN (Postgre Sql, Express,Next,Node )

## Express JSON Middleware

``` app.use(express.json()) ```

* Purpose: Enables the Express application to parse incoming JSON request bodies.

* Why You Need It: When a client (e.g., a frontend application or Postman) sends a POST, PUT, or PATCH request with a JSON payload, this middleware parses the JSON body and makes it accessible in the req.body object for further processing in your routes.