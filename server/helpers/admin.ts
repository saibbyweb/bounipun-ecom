import { product, collection } from "@models"

export default {
    async specialUpdate(model, details, editMode) {
        console.log('special update called', model, editMode)
        switch (model) {
            case 'products':
                await product.methods.updateProduct(details, editMode);
                break;
            case 'collections':
                await collection.methods.updateCollection(details, editMode);
                break;
            default:
                break;
        }
        return { updated: false }
    }
}