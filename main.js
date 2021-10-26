const LinksSocialMedia = {
  github: 'E-Sherman',
  facebook: 'elesonsherman',
  instagram: 'elesonsherman',
  twitter: 'elesonsherman'
}

function changeSocialMediaLinks() {
  //CODIGO PARA CHAMAR A ID
  //document.getElementById('userName').textContent = 'Ana Júlia'-->//
  //userName.textContent = 'Eleson Sherman'//

  //COMANDO PARA CHAMAR OS FILHOS DA UL(PARA ABRIR OUTRA REDE SOCIAL SEM SER A DO HTML E SIM A QUE DEFINE O JAVASCRIPT)
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github} `

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // userName.textContent = data.name
      //userBio.textContent = data.bio
      userLink.href = data.html_url
      //  UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
