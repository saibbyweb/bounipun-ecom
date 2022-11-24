export default function ({ $axios, store, router, redirect }) {
    // $axios.onRequest(config => {
    //   console.log('Making request to ' + config.url)
    // })

    // $axios.defaults.withCredentials = true;

    $axios.onResponse(response => {

        // console.log(response.data,'--ON RESPONSE')
        if(response.data.notAuthorized === true) {
            store.commit("customer/unauthorize");
            router.push('/');
        }

        if(response.data.adminNotAuthorized === true) {
            store.commit("admin/unauthorize");
            setTimeout(() => redirect('/admin-panel/login'),1000);
            // router.push('/admin-panel/login');
        }
    })


  
  }