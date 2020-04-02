<template>
	<Layout>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
		<g-image alt="Example image" src="~/favicon.png" width="135" />
		<Pager :info="$page.data.pageInfo" />
		<pre>
      <code>
        {{JSON.stringify($page.data, null, 4)}}
      </code>
    </pre>
	</Layout>
</template>

<page-query>
  query ($page: Int){
    data: allFaker (perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
        totalItems
        hasNextPage
        hasPreviousPage
      }
      edges {
        node{
          id
          title
        }
      }
    }
}

</page-query>

<script>
import { Pager } from "gridsome";

export default {
	metaInfo: {
		title: "Hello, world!"
	},

	components: {
		Pager
	}
};
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>
