const postsContainer = document.getElementById('posts-container')
console.log(postsContainer)

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      let article = document.createElement('article')
      let title = document.createElement('h2')
      let body = document.createElement('p')

      title.textContent = post.title
      body.textContent = post.body

      article.appendChild(title)
      article.appendChild(body)
      postsContainer.appendChild(article)
    })
  })

const champRecherche = document.getElementById('champ-recherche')

champRecherche.addEventListener('input', () => {
  const texte = champRecherche.value.toLowerCase()
  const filtrés = articles.filter(article =>
    article.title.toLowerCase().includes(texte) ||
    article.body.toLowerCase().includes(texte)
  )
  afficherArticles(filtrés)
})





console.log('Hello World')
