# Express Boilerplate REST API Backend

## General Info
- A backend boilerplate with a functioning user login and registration.

- Uses JWT for user authorization.

- Uses MySQL database

- Creates "user" table for database on first boot.


## Testing Locally

### Database setup
- Ensure that you have a working MySQL server running.
- Create 4 local variables:
    - PEB_HOST: Database host name. If local MySQL is running then it will be "localhost"
    - PEB_USR: Database username
    - PEB_PSWD: Database user password
    - PEB_DB: Database name


### Code setup
```bash
git clone https://github.com/kol845/express-boilerplate

cd express-boilerplate

npm install

npm run dev (For Development environment) 

OR

npm run staging (For Staging environment)

OR

npm run prod (For Production environment)
```





