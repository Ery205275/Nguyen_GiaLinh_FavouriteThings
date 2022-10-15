(() => {

    const { createApp } = Vue
   
     createApp({
         created(){
   console.log('vue is created')
   
   fetch('./data.json')
   .then(res =>res.json())
   .then(data => {
       console.log(data);
       
       this.remoteData = data;
   })
   .catch(error => console.error(error));
   },
       data() {
         return {
           welcome: 'Hello!',
           intro: 'My name is Gia, here are my favourite things',
           things: ['Thing1', 'Thing2', 'Thing3', 'Thing4'],
           remoteData: {}
         }
       },
   
       methods: {
           logClick(){
               console.log('clicked!')
           }
       }
     }).mount('#app');
   
   })();