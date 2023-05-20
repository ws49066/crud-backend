pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            agent{
                label "test_server"
            }
            steps {
                echo 'Deploy into test'
                sh 'make deploy-test'
            }
        }
    }
}
