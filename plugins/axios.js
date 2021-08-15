export default function ({ $axios, store, router, redirect }) {
    // $axios.onRequest(config => {
    //   console.log('Making request to ' + config.url)
    // })

    $axios.onResponse(response => {
        if(response.data.notAuthorized === true) {
            store.commit("customer/unauthorize");
            router.push('/');
        }
    })
  
  }