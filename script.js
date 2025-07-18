const postsContainer = document.getElementById('posts-container')
const champRecherche = document.getElementById('champ-recherche')

let articles = [] // <--- ajouter cette variable globale

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    articles = posts // <--- stocker ici
    afficherArticles(articles) // afficher les articles dès le chargement
  })

champRecherche.addEventListener('input', () => {
  const texte = champRecherche.value.toLowerCase()
  const filtrés = articles.filter(article =>
    article.title.toLowerCase().includes(texte) ||
    article.body.toLowerCase().includes(texte)
  )
  afficherArticles(filtrés)
})

// Fonction pour afficher les articles (à ajouter)
function afficherArticles(liste) {
  postsContainer.innerHTML = '' // Vider l'affichage précédent
  liste.forEach(post => {
    let article = document.createElement('article')
    let title = document.createElement('h2')
    let body = document.createElement('p')

    title.textContent = post.title
    body.textContent = post.body

    article.appendChild(title)
    article.appendChild(body)
    postsContainer.appendChild(article)
  })
}

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
  menu.classList.toggle('visible')
})
