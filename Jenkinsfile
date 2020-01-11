pipeline {
    agent { docker { image 'node' } }
    stages {
        stage('build') {
            steps {
                sh 'yarn --version'
                sh 'yarn build'
            }
        }
    }
}