\# Elevate Labs Task 2 – Jenkins CI/CD Pipeline



\## Project Overview



This project demonstrates a simple CI/CD pipeline using \*\*Jenkins, Docker, and GitHub\*\*.



The pipeline automatically builds, tests, and deploys a Node.js application using a Jenkinsfile.



\## Objective



Create a basic Jenkins pipeline to automate the process of building, testing, and deploying an application.



\## Technologies Used



\* Jenkins

\* Docker

\* Node.js

\* GitHub

\* Git

\* Jenkinsfile

\* Express.js



\## Project Structure



```text

elevate-labs-task-2-jenkins-cicd/

│

├── .dockerignore

├── .gitignore

├── Dockerfile

├── Jenkinsfile

├── app.js

├── package.json

├── package-lock.json

└── README.md

```



\## Application



The project is a simple Node.js Express application.



\### Application Endpoints



\*\*Home:\*\*



```text

http://localhost:3002

```



\*\*Health Check:\*\*



```text

http://localhost:3002/health

```



The health endpoint returns the application status and service name.



\## Jenkins Pipeline



The pipeline is defined in the `Jenkinsfile` and contains three stages:



\### 1. Build



Jenkins builds the Docker image:



```text

elevate-labs-task-2-jenkins-cicd:latest

```



\### 2. Test



Jenkins installs the Node.js dependencies and runs the application tests:



```bash

npm ci

npm test

```



\### 3. Deploy



Jenkins removes the previous application container if it exists and starts a new Docker container:



```text

Container: elevate-task-2-jenkins

Port: 3002

```



The application is then available at:



```text

http://localhost:3002

```



\## CI/CD Trigger



Jenkins is configured with \*\*Poll SCM\*\* using:



```text

H/5 \* \* \* \*

```



This allows Jenkins to periodically check the GitHub repository for new commits and automatically trigger the pipeline when changes are detected.



\## Pipeline Flow



```text

Developer pushes code

&#x20;       ↓

&#x20;     GitHub

&#x20;       ↓

&#x20;  Jenkins Poll SCM

&#x20;       ↓

&#x20;     Build

&#x20;       ↓

&#x20;      Test

&#x20;       ↓

&#x20;     Deploy

&#x20;       ↓

&#x20;Docker Container

&#x20;       ↓

&#x20;Node.js Application

```



\## Docker



The application is packaged into a Docker image using the provided `Dockerfile`.



Build command:



```bash

docker build -t elevate-labs-task-2-jenkins-cicd:latest .

```



Run command:



```bash

docker run -d --name elevate-task-2-jenkins -p 3002:3000 elevate-labs-task-2-jenkins-cicd:latest

```



\## Verification



The Jenkins pipeline was tested successfully.



\* Jenkins Build #2: Successful

\* Jenkins Build #3: Successful

\* Build stage: Passed

\* Test stage: Passed

\* Deploy stage: Passed

\* Automatic pipeline trigger after GitHub commit: Verified

\* Application home page: Working

\* Application health endpoint: Working



\## Learning Outcomes



Through this task, I learned:



\* How Jenkins is used in a CI/CD pipeline

\* How to create a Jenkinsfile

\* How to define Build, Test, and Deploy stages

\* How Jenkins works with GitHub repositories

\* How Docker can be integrated with Jenkins

\* How to automatically trigger a pipeline when code changes

\* How to troubleshoot Jenkins and Docker integration issues



\## Repository



GitHub Repository:



`https://github.com/krushna98605/elevate-labs-task-2-jenkins-cicd`



\## Task



\*\*Elevate Labs – DevOps Internship\*\*



\*\*Task 2: Create a Simple Jenkins Pipeline for CI/CD\*\*



