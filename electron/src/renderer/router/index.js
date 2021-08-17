/*
 * Authors: see git history
 *
 * Copyright (c) 2010 Authors
 * Licensed under the GNU GPL version 3.0 or later.  See the file LICENSE for details.
 *
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/simulator',
      name: 'simulator',
      component: require('@/components/Simulator').default
    },
    {
      path: '/install',
      name: 'install',
      component: require('@/components/InstallPalettes').default
    },
    {
      path: '/params',
      name: 'params',
      component: require('@/components/Params').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
