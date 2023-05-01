pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            agent{
                label "new_server_test"
            }

            steps {
                sh 'echo Deploy into test'
                sh 'make deploy-test'
            }
        }
    }
}