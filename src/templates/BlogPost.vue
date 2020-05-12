<template>
  <article>
    <article class="single-article">
      <div class="single-article__header">
        <figure class="single-article__image" :style="getBackground($page.blogPost.src)">
          <g-image :src="$page.blogPost.src"/>
        </figure>
      </div>
    </article>
    <h1>{{ $page.blogPost.title }}</h1>
    <div class="post__content" v-html="$page.blogPost.content" />
  </article>
</template>

<script>
export default {
  methods: {
    getBackground(src) {
      return 
      `
      background-image: url('${ src }');
      background-size: contain;
      width:100%;
      height:400px; 
      `
    }
  }
}
</script>

<page-query>
query BlogPost ($id: ID!) {
  blogPost(id: $id) {
    title
    subtitle
    src
    date
    categories
    tags
    content
  }
}
</page-query>

<style scoped lang="scss">
.single-article {
  &__header {
  }
  &__image {
    background-size: cover;
    overflow: hidden;
    text-align: center;
    img {
      background-size: cover;
   }
  }

  &__body {
    max-width: 640px;
    margin: 0 auto;
    padding: 0 20px;
  }
}
</style>