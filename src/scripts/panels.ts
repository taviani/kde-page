function initPanels() {
  const body = document.querySelector('.body');
  const main = document.getElementById('main');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');

  if (!body || !main || !header || !footer) return;

  const articles = main.querySelectorAll('article');

  let isArticleVisible = false;
  let timeout = false;
  let articleTimeout = false;
  let currentArticle = '';

  function setNavHidden(hidden: boolean) {
    header.style.display = hidden ? 'none' : '';
    footer.style.display = hidden ? 'none' : '';
    main.style.display = hidden ? 'flex' : 'none';
  }

  function updateArticles() {
    articles.forEach((article) => {
      article.classList.toggle('active', article.id === currentArticle);
      article.classList.toggle('timeout', articleTimeout);
    });
  }

  function openArticle(article: string) {
    isArticleVisible = !isArticleVisible;
    currentArticle = article;
    body.classList.toggle('is-article-visible', isArticleVisible);

    window.setTimeout(() => {
      timeout = !timeout;
      setNavHidden(timeout);
    }, 325);

    window.setTimeout(() => {
      articleTimeout = !articleTimeout;
      updateArticles();
    }, 350);
  }

  function closeArticle() {
    articleTimeout = !articleTimeout;
    updateArticles();

    window.setTimeout(() => {
      timeout = !timeout;
      setNavHidden(timeout);
    }, 325);

    window.setTimeout(() => {
      isArticleVisible = !isArticleVisible;
      currentArticle = '';
      body.classList.toggle('is-article-visible', isArticleVisible);
      updateArticles();
    }, 350);
  }

  function switchArticle(article: string) {
    articleTimeout = !articleTimeout;
    timeout = !timeout;
    isArticleVisible = !isArticleVisible;
    currentArticle = '';
    body.classList.toggle('is-article-visible', isArticleVisible);
    updateArticles();
    setNavHidden(timeout);
    openArticle(article);
  }

  function handleClickOutside(event: MouseEvent) {
    if (!main.contains(event.target as Node) && isArticleVisible) {
      closeArticle();
    }
  }

  window.setTimeout(() => {
    body.classList.remove('is-loading');
  }, 100);

  document.addEventListener('mousedown', handleClickOutside);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isArticleVisible) {
      closeArticle();
    }
  });

  document.querySelectorAll('[data-open-article]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      const article = (event.currentTarget as HTMLElement).dataset.openArticle;
      if (article) openArticle(article);
    });
  });

  document.querySelectorAll('[data-switch-article]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      const article = (event.currentTarget as HTMLElement).dataset.switchArticle;
      if (article) switchArticle(article);
    });
  });

  document.querySelectorAll('[data-close-article]').forEach((el) => {
    el.addEventListener('click', () => {
      closeArticle();
    });
    el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        closeArticle();
      }
    });
  });
}

initPanels();
