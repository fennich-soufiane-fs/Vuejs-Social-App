import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('commonStore',  {
  state: () => {
    return {
      test: 'hello fennich soufiane va devenir un tres bon developpeur web'
    }
  }
})
