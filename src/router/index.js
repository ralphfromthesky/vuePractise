import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vbind from '../views/Vbind.vue';
import ConditionalRendering from '../views/ConditionalRendering.vue';
import ListRendering from '../views/ListRendering.vue'
import ConditionalListRendering from '../views/ConditionalListRendering.vue'
import Methods from '../views/Methods.vue';
import EventHandling from '../views/EventHandling.vue'
import FormHandling from '../views/FormHandling.vue'
import ComputedProperties from '../views/ComputedProperties.vue';
import Wathchers from '../views/Watchers.vue';
import Component from '../views/Components.vue';
import PrimeVue from '../views/PrimeVue.vue';
import HttpGetRequest from '../http/HttpGetRequest.vue'
import Http from '../http/Http.vue'
import PropsAndCompositionAPIParent from '../views/PropsAndCompositionAPIParent.vue';
import PropsParent from '../views/PropsParent.vue'
import ProvideAndInjectA from '../views/ProvideAndInjectA.vue'
import ReplacingDataWithRef from '../views/ReplacingDataWithRef.vue'
import ComponentsEventsParents from '../views/ComponentsEventsParents.vue'
import SlotsParent from '../views/SlotsParent.vue';
import Animations from '../views/Animations.vue'
import sampleComputed from '../views/sampleComputed.vue'
import ReusabilityWithMixins from '../views/ReusabilityWithMixins.vue'
import provideAndInjectUsingGlobalandCompositionApi from '../views/provideAndInjectUsingGlobalandCompositionApi.vue'
import provideAndInjectUsingGlobalandCompositionApi2 from '../views/provideAndInjectUsingGlobalandCompositionApi2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: Vbind
    },
    {
      path: '/con',
      name: 'conditionalrenderging',
      component: ConditionalRendering
    },
    {
      path: '/listRendering',
      name: 'listrenderging',
      component: ListRendering
    },
    {
      path: '/conditionallistRendering',
      name: 'conditionallistrenderging',
      component: ConditionalListRendering
    },
    {
      path: '/method',
      name: 'method',
      component: Methods
    },
    {
      path: '/event',
      name: 'EventHandling',
      component: EventHandling
    },
    {
      path: '/form',
      name: 'FormHandling',
      component: FormHandling
    },
    {
      path: '/computed',
      name: 'ComputedProperties',
      component: ComputedProperties
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: Wathchers
    },
    {
      path: '/components',
      name: 'component',
      component: Component
    },
    {
      path: '/primeVue',
      name: 'PrimeVue',
      component: PrimeVue
    },
    {
      path: '/http',
      name: 'http',
      component: HttpGetRequest
    },
    {
      path: '/https',
      name: 'https',
      component: Http
    },
    {
      path: '/PropsAndCompositionAPiI',
      name: 'propscompAPI',
      component: PropsAndCompositionAPIParent
    },
    {
      path: '/props',
      name: 'props',
      component: PropsParent
    }, {
      path: '/provideInject',
      name: 'provideinject',
      component: ProvideAndInjectA
    },
    {
      path: '/ReplacingDataWithRef',
      name: 'ReplacingDataWithRef',
      component: ReplacingDataWithRef 
    },
    {
      path: '/ComponentsEventsParents',
      name: 'ComponentsEventsParents',
      component: ComponentsEventsParents 
    },
    {
      path: '/SlotsParent',
      name: 'SlotsParent',
      component:  SlotsParent
    },
    {
      path: '/animation',
      name: 'animationsliding',
      component:  Animations
    },
    {
      path: '/computed',
      name: 'computedPropery',
      component: sampleComputed
    },
    {
      path: '/reuse',
      name: 'PropReusabilityWithMixinsery',
      component: ReusabilityWithMixins
    },
    {
      path: '/provideInjectglobally',
      name: 'provide',
      component: provideAndInjectUsingGlobalandCompositionApi //provideAndInjectUsingGlobalandCompositionApi2
    },
    {
      path: '/provideInjectglobally2',
      name: 'provide2',
      component: provideAndInjectUsingGlobalandCompositionApi2 
    },







  ]
})

export default router 
ListRendering 