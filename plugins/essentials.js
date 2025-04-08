const task = async promise => {
  let response;
  let error = false;
  try {
    response = await promise;
  } catch (e) {
    console.log(e);
    error = e;
  }
  return { response, error };
}

export default (context, inject) => {
  const $store = context.store;
  inject("task", task);

  /* update document api */
  const updateDocument = async (model, details, editMode, payload) => {
    let result = { updated: false, doc: {} };
    const update = context.$axios.$post("/updateDocument", {
      model,
      details,
      editMode,
      payload
    });

    $store.commit("admin/setLoading", true);
    const { response, error } = await task(update);
    $store.commit("admin/setLoading", false);

    /* if error occurred (handle) */
    if (error) {
      return result;
    }
    /* if request didnt fail, but update failed */
    if(response.updated === false) {
      return response;
    }

    /* set documents */
    result.updated = true;
    result.doc = response;

    return result;
  };

  /* fetch collection api */
  const fetchCollection = async (model, requestedBy) => {
    let result = { fetched: false, docs: [] };
    const collectionFetch = context.$axios.$post("/fetchCollection", {
      model,
      requestedBy: !requestedBy ? "default" : requestedBy
    });

    /* wait for the request to complete */
    $store.commit("admin/setLoading", true);
    const { response, error } = await task(collectionFetch);
    $store.commit("admin/setLoading", false);

    /* if error occurred */
    if (error) {
      console.log("Could not fetch documents");
      return result;
    }

    /* fetch confirmed */
    result.fetched = true;

    /* if no docs found, return */
    if (response.length === 0) {
      return result;
    }

    result.docs = response;
    return result;
  };

  /* fetch pagination results */
  const fetchPaginatedResults = async (model, rawCriterion, requestedBy) => {
    let result = { fetched: false, docs: [], totalMatches: 0 };
    /* hit endpoint */
    const docsFetch = context.$axios.$post("/fetchPaginatedResults", {
      // const docsFetch = context.$axios.$post("/searchProducts", {
      model,
      rawCriterion,
      requestedBy: !requestedBy ? "default" : requestedBy
    });
    /* wait for the request to complete */
    $store.commit("admin/setLoading", true);
    $store.commit("customer/setLoading", true);
    const { response, error } = await task(docsFetch);
    $store.commit("admin/setLoading", false);
    $store.commit("customer/setLoading", false);

    /* if error occurred */
    if (error) {
      console.log("Could not fetch documents");
      return result;
    }

    /* fetch confirmed */
    result.fetched = true;

    /* if no docs found, return */
    if (response.length === 0) {
      return result;
    }

    result.docs = response.docs;
    result.totalMatches = response.totalMatches;

    return result;
  };

  /* fetch document api */
  const fetchDocument = async (model, _id, requestedBy) => {
    let result = { fetched: false, doc: {} };
    const documentFetch = context.$axios.$post("/getDocument", {
      model,
      _id,
      requestedBy: !requestedBy ? "default" : requestedBy
    });

    /* wait for request to complete */
    $store.commit("admin/setLoading", true);
    $store.commit('customer/setLoading', true);
    const { response, error } = await task(documentFetch);
    $store.commit("admin/setLoading", false);
    $store.commit('customer/setLoading', false);

    if (error) {
      return result;
    }

    result.fetched = true;
    result.doc = response;
    // setTimeout(() => console.log(result.doc, "-FROM ESSENTIALS"), 2000);

    return result;
  }

  /* fetch DOCUMENT(s) / CUSTOMER ONLY */
  const fetchData = async (model, filters, multiple = false) => {
    let result = { fetched: false };

    const endpoint = multiple ? "/findDocuments" : "/findDocument";

    const documentFetch = context.$axios.$post(endpoint, {
      model,
      filters
    });

    /* wait for request to complete */
    // $store.commit("admin/setLoading", true);
    const { response, error } = await task(documentFetch);
    // $store.commit("admin/setLoading", false);

    if (error || response.notFound == true) {
      return result;
    }

    result.fetched = true;
    if (multiple) result.docs = response;
    else result.doc = response;
    return result;
  };

  /* feature available */
  const featureAvailable = (featureName) => {
    const config = $store.state.customer.globalConfig;
    const { features } = config;
    
    if(features.length === 0 || features == undefined || features === null)
      return false;
    
    /* find feature in features array */
    const foundIndex = features.findIndex(f => f.name === featureName);
    if(foundIndex === -1)
      return false;
    
    return features[foundIndex].status;
  }

  /* get image base s3 path */
  const getImageBaseS3Path = path => {
    if(process.env.MODE === 'developement')
      return process.env.VITE_baseS3URL;
    return process.env.baseS3URL;
  }

  /* get specific image variant */
  const getImage = (path, type) => {
    if(process.env.MODE === 'development')
      return process.env.VITE_baseS3URL + '/' + type +'/' + path;
    return process.env.baseS3URL + '/' + type + '/' + path;
  }

  /* get original image base path */
  const getOriginalPath = path => {
    if(process.env.MODE === 'development')
      return process.env.VITE_baseAWSURL + path;
    return process.env.baseAWSURL + path;
  }


  /* delete document api */
  const deleteDocument = async (model, _id) => {
    let result = { deleted: false, doc: {}, msg: '' };
    const deleteAttempt = context.$axios.$post("/deleteDocument", {
      model,
      _id
    });

    /* wait for request to complete */
    $store.commit("admin/setLoading", true);

    const { response, error } = await task(deleteAttempt);
    $store.commit("admin/setLoading", false);

    if (error || response.deleted === false) {
      result.msg = response.msg !== undefined ? response.msg : "";
      return result;
    }

    result.deleted = true;
    result.doc = response;
    return result;
  };

  /* notify */
  const flash = async self => {
    self.updated = true;
    setTimeout(() => (self.updated = false), 1300);
  };

  /* request */
  const httpPostRequest = async (endpoint, payload) => {
    const request = context.$axios.$post(endpoint, payload);
    $store.commit("customer/setLoading", true);
    $store.commit("admin/setLoading", true);
    /* wait for request to complete */
    const { response, error } = await task(request);
    $store.commit("customer/setLoading", false);
    $store.commit("admin/setLoading", false);

    /* if error occurred */
    if (error) {
      return { response, resolved: false };
    }

    if (response.resolved === false) {
      if (response.resolved === false) {
        console.log(
          `%c Request not resolved: ${endpoint} with payload: ${JSON.stringify(
            payload
          )}`,
          "color: red"
        );
      }
      return { response, resolved: false };
    }

    /* if request resolved */
    return { response, resolved: true };
  };

  /* vibrate device */
  const vibrateDevice = duration => {
    if ("vibrate" in navigator) {
      navigator.vibrate(duration);
      console.log("vibrate device");
    }
  };

  /* format date */
  const formatDate = function(date, onlyDate = false) {
    date = new Date(date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const day = date.getDate() +
    " " +
    months[date.getMonth()] +
    ", " +
    date.getFullYear();

    if(onlyDate)
      return day;

    return day + " - " + date.toLocaleTimeString() + " IST"

  };

  inject("fetchCollection", fetchCollection);
  inject("fetchPaginatedResults", fetchPaginatedResults);
  inject("updateDocument", updateDocument);
  inject("fetchDocument", fetchDocument);
  inject("deleteDocument", deleteDocument);
  inject("fetchData", fetchData);
  inject("getImage", getImage);
  // inject("getImagePath", getImagePath);
  inject("getOriginalPath", getOriginalPath);
  inject("flash", flash);
  inject("post", httpPostRequest);
  inject("vibrateDevice", vibrateDevice);
  inject("formatDate", formatDate);
  inject("featureAvailable", featureAvailable);
};
