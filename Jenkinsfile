pipeline {
    agent { docker { image 'node:12.14' } }
    stages {
        stage('build') {
            steps {
                sh 'yarn --version'
                sh 'yarn build'
            }
        }
    }
}