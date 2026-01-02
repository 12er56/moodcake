pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('Deploy Backend & Frontend') {
            steps {
                echo 'Stopping old server...'
                sh 'pkill -f server.js || true' // stop old server if running
                echo 'Starting backend...'
                sh 'nohup node server.js > server.log 2>&1 &'
            }
        }
    }
}
