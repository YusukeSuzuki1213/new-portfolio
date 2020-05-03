<template>
  <article>
    <h1>{{ $page.post.title }}</h1>
    <VueRemarkContent />
  </article>
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    subtitle
    path
  }
}
</page-query>
