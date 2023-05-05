import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0,
    ipAddress: 0,
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
        date: Date.now(),
        ip: this.ipAddress
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

    },
    async cadMail(mail){
      let data = {
        email: mail,
        date: Date.now()
      }
      try{
        const res = await fetch('https://perseg-app-default-rtdb.firebaseio.com/mails.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        const dataDB = await res.json()
        console.log(dataDB);

      } catch(e) {
        console.log(e);
      }

    },
    async Acesso(){
      this.getIpClient()
      let acesso = {
        count: 1,
        ip: this.ipAddress,
        date: Date.now()
      }
      try{
        const res = await fetch('https://perseg-app-default-rtdb.firebaseio.com/acesso.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(acesso)
        })

        const dataDB = await res.json()
        console.log(dataDB);

      } catch(e) {
        console.log(e);
      }
    },
    async getIpClient() {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        this.ipAddress = data.ip;
        console.log(this.ipAddress);
      } catch (error) {
        console.error(error);
      }
    }
  },
});
