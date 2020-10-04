pipeline {
  agent any

  parameters {
    string(name: 'BRANCH_NAME', defaultValue: 'master', description: '选择分支名称')
  }

  environment {
    REPO_URL = "git@github.com:bxm0927/vue-demo.git"
    GIT_CREDENTIALS_ID = "7fad7afa-60d4-4fac-8a1d-c8e1831ebff7"
    ALIYUN_DOCKER_REGISTRY = 'https://registry.cn-shanghai.aliyuncs.com'
    ALIYUN_DOCKER_CREDENTIALS = "c8a0e8d9-2906-4ff1-8b89-49cdd18d73ec"
  }

  stages {
    stage('Pull Code') {
      steps {
        echo "================ Pulling Code ================"
        echo "Git仓库地址：" + "${REPO_URL}"
        echo "Git分支名称：" + "${BRANCH_NAME}"
        git branch: "${BRANCH_NAME}", url: "${REPO_URL}", credentialsId: "${GIT_CREDENTIALS_ID}"
      }
    }

    stage('Build Image And Push Aliyun') {
      steps {
        echo "================ Build Image And Push Aliyun ================"
        script {
          // FIXME 这里不能通过改 package.json 来获取版本号，因为这户破坏 Docker Cache
          // readJSON need **Pipeline Utility Steps** Plugin.
          def props = readJSON file: 'package.json'
          def version = "${props['version']}"
          echo "Build Version Is " + version

          // manager need **Groovy Postbuild** Plugin.
          manager.addShortText(version, "black", "#fbfbba", "1px", "#c7c777")

          docker.withRegistry(env.ALIYUN_DOCKER_REGISTRY, env.ALIYUN_DOCKER_CREDENTIALS) {
            def customImage = docker.build("baixiaoming/vue-demo:${version}")
            customImage.push()
            customImage.push('latest')
          }
          echo "Build Image And Push Registry Success!"
        }
      }
    }
  }
}
