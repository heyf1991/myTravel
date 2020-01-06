<template>
  <div class="page">
    <Header :back="true"><span slot="title">城市选择</span></Header>
    <Search></Search>
    <City-list :cityData="cityData"></City-list>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Search from './components/Search.vue'
import CityList from './components/List.vue'
import cData from '../../../mock/city.json'
export default {
  data() {
    return {
      cityData: [],
    }
  },
  components: {
    Header,
    Search,
    CityList,
  },
  created() {},
  mounted() {
    this.cityData = cData.data
    console.log('有输出吗', this.cityData)
  },
  computed: {},
  methods: {},
}
</script>
