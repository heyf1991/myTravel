<template>
  <div class="page">
    <Header :back="true"><span slot="title">城市选择</span></Header>
    <Search></Search>
    <City-list :cityData="cityData" :letter="letter"></City-list>
    <Alphabet :alphabetData="cityData" @changeAlphabet="changeAlphabet"></Alphabet>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Search from './components/Search.vue'
import CityList from './components/List.vue'
import Alphabet from './components/Alphabet.vue'
import cData from '../../../mock/city.json'
export default {
  data() {
    return {
      cityData: [],
      letter: '',
    }
  },
  components: {
    Header,
    Search,
    CityList,
    Alphabet,
  },
  created() {},
  mounted() {
    this.cityData = cData.data
  },
  computed: {},
  methods: {
    changeAlphabet(val) {
      this.letter = val
    },
  },
}
</script>
