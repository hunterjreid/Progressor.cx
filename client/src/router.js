
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

import ContactView from './views/ContactView.vue'

import FaqView from './views/FaqView.vue'
import CyberLandscape from './views/CyberLandscape.vue'
import PricingPage from './views/PricingPage.vue'
import HowtokensWorkPage from './views/HowtokensWorkPage.vue'
import YoobeeTestView from './views/YoobeeTestView.vue'
import SignupView from './views/Signup.vue'
import LoginView from './views/LoginScreen.vue'
import NewHomeLanding from './views/NewHomeLanding.vue'
import NewChatView from './views/NewChatView.vue'
import PaymentPage from './views/PaymentPage.vue'
import UpdatesPage from './views/UpdatesView.vue'
import WelcomeBack from './views/WelcomeBack.vue'
import ManageView from './views/ManageView.vue'
import AIResponsibilityPage from './views/ResponsibilityView.vue'
const routes = [
    {
      path: '/',
      name: 'NewHomeLanding',
      component: NewHomeLanding,
    },
    {
      path: '/manage',
      name: 'ManageView',
      component: ManageView,
    },
    {
      path: '/responsibility',
      name: 'AIResponsibilityPage',
      component: AIResponsibilityPage,
    },
    {
      path: '/landscape',
      name: 'CyberLandscape',
      component: CyberLandscape,
    },
    {
      path: '/welcome',
      name: 'WelcomeBack',
      component: WelcomeBack,
    },
    {
      path: '/updates',
      name: 'UpdatesPage',
      component: UpdatesPage,
    },
    {
      path: '/pricing2',
      name: 'PaymentPage',
      component: PaymentPage,
    },
    {
      path: '/chat2',
      name: 'NewChatView',
      component: NewChatView,
    },

    {
        path: '/signup',
        name: 'signup',
        component: SignupView,
      },      {
        path: '/login',
        name: 'login',
        component: LoginView,
      },    {
        path: '/tokens',
        name: 'HowtokensWorkPage',
        component: HowtokensWorkPage,
      },
    {
        path: '/pricing',
        name: 'PricingPage',
        component: PricingPage,
      },

      {
        path: '/Yoobee_test_wip',
        name: 'YoobeeTestView',
        component: YoobeeTestView,
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
        path: '/landinge',
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