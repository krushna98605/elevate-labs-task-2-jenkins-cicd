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
                bat 'docker run -d --name elevate-task-2-jenkins -p 3002:3000 elevate-labs-task-2-jenkins-cicd:latest'
            }
        }
    }
}