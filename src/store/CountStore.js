import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0
  }),
  getters: {
    readCount(){
      return this.count
    }
  },
  actions: {
    async addCount(pack){
      let count = {
        count: this.count++,
        pack: pack,
        date: Date.now()
      }
      try{
        const res = await fetch('https://perseg-app-default-rtdb.firebaseio.com/count.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(count)
        })

        const dataDB = await res.json()
        console.log(dataDB);

      } catch(e) {
        console.log(e);
      }

    }
  },
});