<template>
  <div id="app">
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-lg-2' style="background-color: gray">
          <div class="panel-group" id="accordion">
            <div class="panel panel-default" v-for="item in items" :key="item.tabid">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion"
                     :href = "['#'+item.tabid]">
                    {{item.name}}
                  </a>
                </h4>
              </div>
              <div v-bind:id=item.tabid class="panel-collapse collapse in" v-if="item.tabid==='servicectrl'">
                <div class="panel-body">
                  <router-link :to="{ path: item.path}">测试</router-link>
                </div>
              </div>
              <div v-bind:id=item.tabid class="panel-collapse collapse" v-else>
                <div class="panel-body">
                  {{item.description}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-10'><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      items: [
        {
          name: '服务控制',
          description: '服务控制，包含服务的启停',
          tabid: 'servicectrl',
          items: [{name: 'weblogic启动', divid: 'start_weblogic_divid'}, {
            name: 'weblogic停止',
            divid: 'stop_weblogic_divid'
          }],
          path: '/servicectrlcmp'
        },
        {
          name: '服务监控',
          description: '服务监控，包含参数获取',
          tabid: 'servicemonitor',
          items: [{name: 'weblogic监控', divid: 'weblogic_monitor'}, {name: 'weblogic数据源', divid: 'weblogic_datasorce'}]
        },
        {
          name: '其他',
          tabid: 'others'
        }
      ]
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
