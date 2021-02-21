# E-Corr
An application that provides a simple way to share and find property

## Contributors

| [<img src="https://avatars.githubusercontent.com/u/66119996?s=460&u=a8ce982627187de5c6b55f1694eae0d15a1e33cf&v=4" width="115"><br><sub>@hen-tr</sub>](https://github.com/hen-tr) |
| :---: |



## Author

| [<img src="https://avatars.githubusercontent.com/u/60328400?s=460&u=b77b84078440e8a7027818c22475132ecbe2d992&v=4" width="115"><br><sub>@robertokbr</sub>](https://github.com/robertokbr) |
| :---: |

### 🤖 Backend beta

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

        ```jsx
        //Hash aleatório de um site gerador de hash
        secret: 277b2cebde8a62e227ac7b1e5ed2a4e5
        ```

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

    ## 🏗️ To do

    - Add entity ```attributes```, a Point relation.