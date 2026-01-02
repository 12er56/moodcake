pipeline {
    agent any

    stages {
        stage('Deploy Website') {
            steps {
                sh '''
                echo "Cleaning old files..."
                rm -rf /var/www/html/*

                echo "Copying new website files..."
                cp -r ./* /var/www/html/
                '''
            }
        }
    }
}
