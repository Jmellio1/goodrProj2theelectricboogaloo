pipeline {
    agent {label "linux"}
    stages {
        stage("Build") {
            steps {
                """
                docker build -t testapi .   
                """

            }
        }
        stage("run"){
        steps{
        sh """
         docker run -p 9090:9090 -d testapi    
        """
        }
        }
       

    }
}