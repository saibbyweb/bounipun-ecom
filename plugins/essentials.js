const task = async promise => {
    let response;
    let error = false;
    try {
        response = await promise;
    }
    catch(e) {
        console.log(e);
        error = e;
    }
    return {response, error};
};

export default (context, inject) => {
    inject('task', task)
}