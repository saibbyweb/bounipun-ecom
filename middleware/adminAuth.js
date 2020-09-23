export default function({app, route, redirect}) {
    ///////
    console.log(app.$cookies.get('swecom_admin'));
    /* if admin route */
    if(route.meta.some(record => record.adminAuth)) {
        console.log('admin route');
    }
    /* if registered customer route */
    else if(route.meta.some(record => record.auth)) {
        console.log('registered customer route');
    }
    /* guest route */
    else {
        console.log('guest route')
    }
}