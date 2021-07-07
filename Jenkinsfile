pipeline {
    agent { dockerfile true }
    stages {
        stage('build') {
            steps {
                sh 'yarn --version'
                sh 'yarn'
                sh 'yarn build'
            }
        }
    }
}