import Vue from 'vue'
import Router from 'vue-router'
import ServiceCtrlCmp from '@/components/ServiceCtrlCmp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/servicectrlcmp',
      name: 'servicectrl',
      component: ServiceCtrlCmp
    }
  ]
})
