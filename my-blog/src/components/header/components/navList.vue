<template>
  <div class="navbar-list">
    <div class="navbar-menu">
      <div class="navbar-menu__item" v-for="(item, index) in menu" :key="index">
        <router-link active-class="active" :to="item.path">
          <span class="navbar-menu__item--text">{{ item.name }}</span>
        </router-link>
      </div>
    </div>
    <el-dropdown class="mobile-navbar-menu">
      <span class="el-dropdown-link">
        <span class="mobile--navbar-menu__current">首页</span>
        <i class="el-icon-caret-bottom" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="navbar-menu__item" v-for="(item, index) in menu" :key="index">
          <router-link active-class="active" :to="item.path">{{ item.name }}</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { NAV_LIST, Qlist } from '../../../global'

@Component
export default class extends Vue {
  private menu: Qlist[] = NAV_LIST;
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: $primary;
}
.navbar-menu {
  @include flexcenter($jc: space-between);
  height: 100%;
  &__item {
    font-size: 1.33rem;
    font-weight: 450;
    padding: 0 1rem;
  }
  @media only screen and (max-width: 767px) { 
    display: none;
  }
}

.mobile-navbar-menu {
  color: $primary;
  font-size: 1.33rem;
  font-weight: bold;
  display: none;
  @media only screen and (max-width: 767px) { 
    display: block;
  }
}

</style>
