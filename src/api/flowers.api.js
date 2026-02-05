import { api } from "./client";

async function getFlowers(params = {}) {
  const res = await api.get("/flowers", { params });
  return res.data;
}

async function getFlowerById(id) {
  const res = await api.get(`/flowers/${id}`);
  return res.data;
}

async function createFlower(payload) {
  const res = await api.post("/flowers", payload);
  return res.data;
}

async function updateFlower(id, payload) {
  const res = await api.put(`/flowers/${id}`, payload);
  return res.data;
}

async function deleteFlower(id) {
  const res = await api.delete(`/flowers/${id}`);
  return res.data;
}

export default {
  getFlowers,
  getFlowerById,
  createFlower,
  updateFlower,
  deleteFlower,
};
