<template>
  <article>
    <h1>{{ $page.post.title }}</h1>
    <VueRemarkContent />
  </article>
</template>

<page-query>
query BlogPost ($id: ID!) {
  post(id: $id) {
    title
  }
}
</page-query>
