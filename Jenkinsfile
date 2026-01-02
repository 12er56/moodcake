pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                // Git repo checkout
                checkout scm
            }
        }

        stage('Deploy Website') {
            steps {
                echo 'Cleaning old files...'
                sh 'rm -rf ~/website/*'          // old files delete
                echo 'Copying new files...'
                sh 'cp -r * ~/website/'          // new files copy
            }
        }
    }
}
