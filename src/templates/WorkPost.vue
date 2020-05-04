<template>
  <article>
    <h1>{{ $page.work.title }}</h1>
    <VueRemarkContent />
  </article>
</template>

<page-query>
query WorkPost ($id: ID!) {
  work(id: $id) {
    title
  }
}
</page-query>
