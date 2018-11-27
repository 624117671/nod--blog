<template>
  <div>
    <menu :class="menuClass" @click="menuClick">
      <span></span>
      <span></span>
      <span></span>
    </menu>
    <nav :class="navClass">
      <el-row>
        <el-col :span="8" class="logo">
          <img src="../../images/logo1.png" alt="" srcset="">
        </el-col>
        <el-col :span="16">
          <el-menu :default-active="activeIndex" border='0' mode="horizontal" class="el-menu-demo" background-color='rgba(255, 255, 255, .0)' text-color='#fff' active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">猿文</el-menu-item>
            <el-menu-item index="3">瑜文</el-menu-item>
            <el-menu-item index="4">关于猿哥</el-menu-item>
            <el-menu-item index="5">关于瑜妹</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </nav>
  </div>

</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      menuClass:'menu',
      navClass:'hide-nav'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick () {
      if(this.menuClass == 'menu'){
        this.menuClass = 'close'
      }
      else{
        this.menuClass = 'menu'
      }
      this.navClass == 'nav' ? this.navClass = 'hide-nav' : this.navClass = 'nav'
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
    text-align: center;
    img {
        height: 60px;
    }
}
nav {
    height: 60px;
    float: right;
    overflow: hidden;
    transition:  all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    background-color: rgba(84, 92, 100,0);
    el-menu {
        height: 100%;
    }
}
.hide-nav {
  width: 0;
  // display: none;
}
.nav {
  @diff : 40px;
  // display: block;
  width: calc(~'100% -' @diff); 
}
menu {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  float: right;
  margin-top: 5px;
  cursor: pointer;
  text-align: center;
  transition:  all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
  background-color: rgba(255, 255, 255, 0);
  span {
    width:26px;
    height: 2px;
    display: block;
    margin: 4px 7px;
    transition:  all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    float: left;
    background-color: #fff;
  }
  &:hover{
    background-color: red;
     transform:rotate(180deg);
    -moz-transform:rotate(180deg); /* Firefox 4 */
    -webkit-transform:rotate(180deg); /* Safari and Chrome */
    -o-transform:rotate(180deg); /* Opera */
  }
}
.menu span:first-child {
  margin-top: 10px;
}

.close {
  & span:first-child {
    margin-top: 18px;
    transform:rotate(45deg);
    -moz-transform:rotate(45deg); /* Firefox 4 */
    -webkit-transform:rotate(45deg); /* Safari and Chrome */
    -o-transform:rotate(45deg); /* Opera */
  }
  & span:last-child {
    display: none;
  }
  & span:nth-child(2) {
    margin-top: -5px;
    transform:rotate(-45deg);
    -moz-transform:rotate(-45deg); /* Firefox 4 */
    -webkit-transform:rotate(-45deg); /* Safari and Chrome */
    -o-transform:rotate(-45deg); /* Opera */
  }
}
</style>
