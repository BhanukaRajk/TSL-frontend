import api from "./api";

export const getPurchaseOrders = async () => {
    return api.get("/purchase-order");
}

export const getPurchaseOrder = async (id) => {
    return api.get(`/purchase-order/${id}`);
}