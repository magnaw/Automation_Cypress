pipeline{
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**" , description: "Enter the scripts path that yu want to execute ")
        choice(name: 'BROWSER' , choices: ['chrome','edge','firefox'] , description: "choice the browser where you want to execute your script")
    }
    options{
        ansiColor('xterm')
    }
    stages{
        stage("Bulding"){
            steps{
                echo "Building the Application "
            }
            
        }
        stage("Testing"){
            steps{
                 echo "Testing the Application "
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC} "
            }
            
        } 
        stage("Deploying"){
            steps{
                echo "Deploying the Application "
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }       
    }
    
