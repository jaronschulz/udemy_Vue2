pm import { originalName as alias } from 'module';<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{selectedComponent}}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Placeholder</p>
          </component>
        </keep-alive>
        <!-- <app-quote>
          <h1 slot="title">{{quoteTitle}}</h1>
          <h4 slot="subtitle">remember this...</h4>
          <p>A wonderful day starts with coffee</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
</style>
