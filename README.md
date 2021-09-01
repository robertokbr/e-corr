<h1 align="center">
    <img src="https://github.com/robertokbr/E-Corr/blob/main/mobile/assets/icon.png" width="100px" /><br>
    <br>
  <a href="https://e-corr.netlify.app/">
    E-Corr
  </a>
</h1>


# E-Corr
A Fullstack application that provides a simple way to share and find properties.

<img  src="https://github.com/robertokbr/e-corr/tree/main/.Github/map.png" />
<img  src="https://github.com/robertokbr/e-corr/tree/main/.Github/details.png" />

## 🤖 Backend beta

- Usuário
    - Create User

        ```jsx
        POST '/users'

        JSON BODY:

        {
        	"name": "nome",
        	"password": "senha",
        	"email": "email@gmail.com",
        	"number": "0000-0000"
        }
        ```

    - Auth User

        ```jsx
        POST **'/sessions'

        JSON BODY

        { 
        	"email": "email@gmail.com", 
        	"password": "senha"
        	
        }**
        ```

    - Update User Avatar

        ```jsx
        PATCH '/users'

        Form URL Encoded

        avatar: Image File
        ```

- Ponto
    - Create Point

        ```jsx
        POST '/points'

        Form URL Encoded

        user_id: string,
        address: string,
        category: string,
        description: string,
        latitude: string,
        longitude: string,
        pictures: Image File Array,
        price: string,
        title: string,
        type: string,
        ```

    - Get Points

        ```jsx
        GET '/points'
        ```

- Point Views
    - Create Point View

        ```jsx
        POST /views

        JSON BODY

        {
        	point_id: string
        }
        ```

    - Get Point Views

        ```jsx
        GET /views/:point_id
        ```
## 🏗️ To do

- Add entity ```attributes```( a Point relation ).


## 🧰 How to run the API

### With docker compose
```bash
    # Set up server and database
    $ docker-compose up -d
```
```bash
    # Come inside the server container
    $ docker exec -it ecorr /bin/bash
```
```bash
    # run migrations
    $ npm run typeorm migration:run 
```
### Without docker compose
```bash
    # Install dependencies 
    $ npm install
```
```bash
    # With you do not have a postgres db, that is the command to start a docker postgres
    docker run --name ecorr_postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=ecorr -p 5432:54
    32 -d postgres
```
```bash
    # run migrations
    $ npm run typeorm migration:run 
```
```bash
    # build application & start
    $ npm run build && npm start
```

## 🧰 How to run the WEB APP
```bash
    # Install dependencies
    $ npm install
```
```bash
    # Generate you .env file
    $ cp .env.example .env
```

- [Get your mabox account](https://account.mapbox.com/), copy your access token, and fill the .env var ```REACT_APP_MAP_TOKEN```

```bash
    # Start the application
    $ expo web 
```

## Contributors

| [<img src="https://avatars.githubusercontent.com/u/66119996?s=460&u=a8ce982627187de5c6b55f1694eae0d15a1e33cf&v=4" width="115"><br><sub>@hen-tr</sub>](https://github.com/hen-tr) |
| :---: |



## Author

| [<img src="https://avatars.githubusercontent.com/u/60328400?s=460&u=b77b84078440e8a7027818c22475132ecbe2d992&v=4" width="115"><br><sub>@robertokbr</sub>](https://github.com/robertokbr) |
| :---: |
