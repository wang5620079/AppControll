<template>
  <div id="app">
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-lg-2' style="background-color: gray">
          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion"
                     href="#collapseOne">
                    点击我进行展开，再次点击我进行折叠。第 1 部分
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                  vice lomo.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-lg-10' style="background-color: red"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
