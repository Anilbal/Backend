# PENN (Postgre Sql, Express ,Next ,Node )

## Express JSON Middleware

``` app.use(express.json()) ```

* Purpose: Enables the Express application to parse incoming JSON request bodies.

* Why You Need It: When a client (e.g., a frontend application or Postman) sends a POST, PUT, or PATCH request with a JSON payload, this middleware parses the JSON body and makes it accessible in the req.body object for further processing in your routes.

``` app.use(cors()) ```
* Purpose: This enables CORS (Cross-Origin Resource Sharing).

* Why you need it: If your frontend is hosted on a different domain or port than your backend, browsers block the requests unless CORS is explicitly allowed.

