
import HomeView from './views/HomeView.vue'
import BlogView from './views/BlogView.vue'
import AboutUs from './views/AboutUs.vue';
import Services from './views/Services.vue';
import CareersView from './views/CareersView.vue';
import ApplyView from './views/ApplyView.vue';
import AdminView from './views/AdminView.vue';
import TermsOfServiceView from './views/TermsOfServiceView.vue'
import PrivacyPolicyView from './views/PrivacyPolicyView.vue'
import LearnMore from './views/LearnMore.vue'
import NewLanding from './views/NewLanding.vue'

import FaqView from './views/FaqView.vue'
import ContactView from './views/ContactView.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

      {
        path: '/faq',
        name: 'FaqView',
        component: FaqView,
      },

    {
        path: '/home2',
        name: 'NewLanding',
        component: NewLanding,
      },
      {
        path: '/contact',
        name: 'ContactView',
        component: ContactView,
      },
    {
        path: '/admin',
        name: 'AdminView',
        component: AdminView,
      },
      {
        path: '/landing',
        name: 'LearnMore',
        component: LearnMore,
      },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: BlogView,
    },
  
    {
        path: '/privacy',
        name: 'Privacy',
        component:   PrivacyPolicyView,
      },
    {
        path: '/terms',
        name: 'Terms',
        component: TermsOfServiceView,
      },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/career',
      name: 'CareersView',
      component: CareersView,
    },
    {
      path: '/apply',
      name: 'Apply',
      component: ApplyView,
    },
  ];


export default routes