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
};

export default (context, inject) => {
  const $store = context.store;
  inject("task", task);

  /* update document api */
  const updateDocument = async (model, details, editMode) => {
    let result = { updated: false, doc: {} };
    const update = context.$axios.$post("/updateDocument", {
      model,
      details,
      editMode
    });

    $store.commit("admin/setLoading", true);
    const { response, error } = await task(update);
    $store.commit("admin/setLoading", false);

    /* if error occurred */
    if (error) {
      return results;
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
      requestedBy: !requestedBy ? 'default' : requestedBy
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
  /* fetch document api */
  const fetchDocument = async (model, _id, requestedBy) => {
    let result = { fetched: false, doc: {} };
    const documentFetch = context.$axios.$post("/getDocument", {
      model,
      _id,
      requestedBy: !requestedBy ? 'default' : requestedBy
    });

    /* wait for request to complete */
    $store.commit("admin/setLoading", true);
    const { response, error } = await task(documentFetch);
    $store.commit("admin/setLoading", false);

    if (error) {
      return result;
    }

    result.fetched = true;
    result.doc = response;
    return result;
  };

  /* delete document api */
  const deleteDocument = async (model, _id) => {
    let result = { deleted: false, doc: {} };
    const deleteAttempt = context.$axios.$post("/deleteDocument", {
      model,
      _id
    });

    /* wait for request to complete */
    $store.commit("admin/setLoading", true);

    const { response, error } = await task(deleteAttempt);
    $store.commit("admin/setLoading", false);

    if (error) {
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

  inject("fetchCollection", fetchCollection);
  inject("updateDocument", updateDocument);
  inject("fetchDocument", fetchDocument);
  inject("deleteDocument", deleteDocument);
  inject("flash", flash);
};
