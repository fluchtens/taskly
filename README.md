# taskly

### What's this about?
Web application to manage your day in Java Spring Boot and Angular.

### Installation :
- Clone the repository.

### Configuration:
- Create an .env file in docker/dev or docker/prod and add the following content to it.
- Configure variables for url, api keys, database information, etc.
- Set the MODE variable to dev or prod in the Makefile.
```env
MYSQL_DATABASE=taskly
MYSQL_ROOT_PASSWORD=42
MYSQL_USER=fluchten
MYSQL_PASSWORD=19
DATABASE_URL=jdbc:mysql://taskly-db:3306/taskly

PMA_ARBITRARY=1
PMA_HOST=database

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

### Usage:
- Run ```make``` to start the application with docker.

### Screenshots:
![1](https://fluchtens.com/projects/taskly/taskly_1.webp)
