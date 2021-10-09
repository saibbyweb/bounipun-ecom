export default function ({ $axios, store, router, redirect }) {
    // $axios.onRequest(config => {
    //   console.log('Making request to ' + config.url)
    // })

    // $axios.defaults.withCredentials = true;

    $axios.onResponse(response => {
        if(response.data.notAuthorized === true) {
            store.commit("customer/unauthorize");
            router.push('/');
        }

        if(response.data.adminNotAuthorized === true) {
            store.commit("admin/setAuthorization", false);
            router.push('/admin-panel')
        }
    })


  
  }