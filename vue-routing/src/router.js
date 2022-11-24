import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList';
import UsersList from './pages/UsersList';
import TeamMembers from './components/teams/TeamMembers';
import TeamsFooter from './pages/TeamsFooter';
import UsersFooter from './pages/UsersFooter';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: '/teams',
      },
      {
        path: '/teams',
        name: 'teams',
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            path: ':teamId',
            name: 'team-members',
            component: TeamMembers,
            props: true,
          },
        ],
      },
      {
        path: '/users',
        components: { default: UsersList, footer: UsersFooter },
        beforeEnter(to, from, next){
          console.log(to, from);
          next();
        }
      },
      {
        path: '/:notFound(.*)',
        redirect: '/',
      },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      console.log(to, from, savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    },
  });
  
  //this function is called before navigating to another page
  router.beforeEach(function (to, from, next) {
    console.log(to, from);
    next();   
  });

  export default router;