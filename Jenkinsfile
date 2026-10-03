pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t elevate-labs-task-2-jenkins-cicd:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'
                bat 'npm ci'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'

                // Remove previous container if it exists
                bat 'docker rm -f elevate-task-2-jenkins 2>NUL || exit /b 0'

                // Start the new container
                bat 'docker run -d --name elevate-task-2-jenkins -p 3002:3000 elevate-labs-task-2-jenkins-cicd:latest'
            }
        }
    }
}