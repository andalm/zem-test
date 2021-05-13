# Zem-Test
My proposal for this project was to follow the guidelines of the instructions.
Use serverless framework to decouple clouds, however, to use Dynamo contradicts it,
I have to investigate what cloud options there are and what serverless framework supports.
This is easy because the data source is decoupled from the other parts of the system and with the TDD validations.

I opted for an architecture based on [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) 
to define project layers, use a dependency injection pattern to decouple the layers in order to be able to use TDD correctly. 
On the other hand, unit tests should not be confused with e2e or integration because these have different levels, for this, 
you can use simpler tools, such as selenium, postman, jmeter, etc.

### Tech Stack
- https://www.serverless.com/ serverless framework with Node.js
- https://github.com/localstack/serverless-localstack This serverless plugin is used to work locally with LocalStack
- https://github.com/localstack/localstack is a docker's image that mounts infrastructure that simulates AWS locally
- https://jestjs.io/ test framework

### Problems
It was my first time that I use LocalStack, I found it very interesting to use it to simulate a local infra, 
I did not have much time to dedicate to it, and the documentation took me a long time. 
For macOS this image has performance issues, some solutions are given, but 
I didn't have much time for this https://github.com/localstack/localstack#troubleshooting

The main problem that I had is with Dynamo since LocalStack mounts the service, 
from outside the network it is accessed with http://localhost:4566, 
but inside this the host changes to http://localstack:4566, however, 
I couldn't connect to any of these. I have not had more time to solve it.

Also, it was my first time with Jest too, I didn't get to test their system to create mocks, 
so I decided to do it manually.

### Instructions
Dependencies, Docker-compose v1.29.1 and docker 20.10.6 

Put the .env file attached to the email at the root of the project.

**Run**
```shell
docker-compose -f {your-local-path}/zem-test/docker-compose.yml up -d api
```
When It finishes building the container, the API started to build a serverless package to upload the functions to our local infra. 
Look at the logs of the API container to see the generated endpoint. Like this

<img width="972" alt="image" src="https://user-images.githubusercontent.com/1644662/117586398-83c63c80-b0dd-11eb-8a3c-ba748f9e35f3.png">

**Endpoints**

- `GET {generated-host}/tweets?count={number}`
- `GET {generated-host}/user/{userId}`
- `PUT {generated-host}/user/{userId}`

***PUT Body***
```json
{
    "firstName": "Jhon",
    "lastName": "Doe",
    "image": "url",
    "title": "A title",
    "text": "Lorem Ipsum"
}
```
