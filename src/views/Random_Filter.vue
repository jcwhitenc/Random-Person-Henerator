<template>
  <div class="root">
    <div class="name_filters">
      <NameFilter :title="'Male Names'" :active="male_active" :inactive="male_inactive" />
      <NameFilter :title="'Female Names'" :active="female_active" :inactive="female_inactive" />
      <NameFilter :title="'Surnames'" :active="sur_active" :inactive="sur_inactive" />
    </div>
    <!--LocationFilter-->
  </div>
</template>

<script>
  import NameFilter from "../components/filter.vue"
  export default {
    name: 'Home',
    components: {
      NameFilter
    },
    data() {
      return {
        male_active: this.$root.$data.m_names.active,
        male_inactive: this.$root.$data.m_names.inactive,
        female_active: this.$root.$data.f_names.active,
        female_inactive: this.$root.$data.f_names.inactive,
        sur_active: this.$root.$data.s_names.active,
        sur_inactive: this.$root.$data.s_names.inactive
      }
    }
  }
</script>

<style scoped>
  root {}

  .name_filters {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>