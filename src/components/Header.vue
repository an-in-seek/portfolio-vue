<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="href" @click.prevent>Community</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav="is-nav">
      <b-navbar-nav>
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> 메인
          </router-link>
        </li>
      </b-navbar-nav>

      <b-navbar-nav>
        <li class="nav-item">
          <router-link to="/board" class="nav-link">
            <font-awesome-icon icon="list" /> 게시판
          </router-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>
