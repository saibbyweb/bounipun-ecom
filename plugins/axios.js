export default function ({ $axios, store, router, redirect }) {
    // $axios.onRequest(config => {
    //   console.log('Making request to ' + config.url)
    // })

    $axios.defaults.withCredentials = true;

    // Add request interceptor to set headers
    $axios.onRequest(config => {
        // Add customer token if exists
        if (store.state.customer.sessionToken) {
            config.headers['customer-authorization'] = `Bearer ${store.state.customer.sessionToken}`;
        }

        // Add admin token if exists
        if (store.state.admin.sessionToken) {
            config.headers['admin-authorization'] = `Bearer ${store.state.admin.sessionToken}`;
        }

        return config;
    });

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