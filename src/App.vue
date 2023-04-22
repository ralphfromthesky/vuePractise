<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todo">v-bind</RouterLink>
        <RouterLink to="/con">conditional rendering</RouterLink>
        <RouterLink to="/listrendering">ListRendering</RouterLink>
        <RouterLink to="/conditionallistRendering"
          >ConditionalListRendering</RouterLink
        >
        <RouterLink to="/method">Method</RouterLink>
        <RouterLink to="/event">EventHandling</RouterLink>
        <RouterLink to="/form">FormHandling</RouterLink>
        <RouterLink to="/computed">ComputedProperties</RouterLink>
        <RouterLink to="/watchers">Watchers</RouterLink>
        <RouterLink to="/components">Components</RouterLink>
        <RouterLink to="/primeVue">PrimeVue</RouterLink>
        <RouterLink to="/http">HttpGetRequest</RouterLink>
        <RouterLink to="/https">Http</RouterLink>

      </nav>
    </div>
  </header>
  <h1 v-show="showPopup">{{ test }}</h1>
  <h1>{{ name }}</h1>
  <!-- need to put inside a div to take efferct the v-show <template><div></div></template> -->
  <ComponentA v-show="showPopup" />
  <button @click="showPopup = true" type="button" class="btn btn-danger">
    Pop-up
  </button>
  <ComponentsEvents v-show="showPopup" @close="showPopup = false" />
  <hr />
  <div style="border: 2px solid black">
    <button @click="activeTab = 'TabA'">TAB A</button>
    <button @click="activeTab = 'TabB'">TAB B</button>
    <button @click="activeTab = 'TabC'">TAB C</button>

    <!-- keep-alive tag is for keepin alive the component even you switch diffrent tabs. -->
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>
    <!-- or you can use below for tab conditonal
  <TabA v-if="activeTab === 'TabA'"/>
<TabB v-if="activeTab === 'TabB'"/>
<TabC v-if="activeTab === 'TabC'"/> -->
  </div>
  <hr />
  <ReusabilityWithMixinsVue/>
  <hr>
  <ReplacingDataWithRef/>
  <hr>
  <ReactivityandtoRefs/>
  <hr>
  <ReactivityandtoRefsUsingtoRefs/>
  <hr>
  <ReplacingDataOptionAPIMethodsWithCompositionApi/>
  <hr>
  <UsingVmodelAndCompositionAPI/>
  <hr>
  <RouterView />
</template>

<script>
import UsingVmodelAndCompositionAPI from './views/UsingVmodelAndCompositionApi.vue';
import ReplacingDataOptionAPIMethodsWithCompositionApi from "./views/ReplacingDataOptionAPIMethodsWithCompositionApi.vue";
import ReactivityandtoRefsUsingtoRefs from "./views/ReactivityandtoRefsUsingtoRefs.vue";
import ReactivityandtoRefs from "./views/ReactivityandtoRefs.vue";
import ReplacingDataWithRef from "./views/ReplacingDataWithRef.vue";
import ReusabilityWithMixinsVue from "./views/ReusabilityWithMixins.vue";
import TabA from "./views/TabA.vue";
import TabB from "./views/TabB.vue";
import TabC from "./views/TabC.vue";
import ComponentsEvents from "./views/ComponentsEvents.vue";
import ComponentA from "./views/ComponentA.vue";
export default {
  name: "main-app",
  //this provide is for the usage of inject in the childs component (ComponentC) to render data
  provide: {
    username: "ralph santolorin",
    anotherUsername: "gadwin santolorin",
  },
  data() {
    return {
      test: "this is test",
      name: "shenron",
      showPopup: false,
      activeTab: "TaBA",
    };
  },
  components: {
    ComponentA,
    ComponentsEvents,
    TabA,
    TabB,
    TabC,
    ReusabilityWithMixinsVue,
    ReplacingDataWithRef,
    ReactivityandtoRefs,
    ReactivityandtoRefsUsingtoRefs,
    ReplacingDataOptionAPIMethodsWithCompositionApi,
    UsingVmodelAndCompositionAPI
  },
};
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
  }
}
</style>
