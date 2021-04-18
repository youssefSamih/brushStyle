import axios from 'axios';
import firebase from './firebase';
const firestore = firebase.firestore();

export const createUser = async (
  uid: string | undefined,
  data: Partial<firebase.firestore.DocumentData>
) => {
  return await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

export const createSite = async (data: firebase.firestore.DocumentData) => {
  const site = firestore.collection('brush_style_site').doc(); // returns DocRef
  await site.set(data); // returns Promise<void>, so we need to await
  return site;
};

export const updateSite = async (
  siteId: string | undefined,
  data: Partial<firebase.firestore.DocumentData>
) => {
  const site = firestore.collection('brush_style_site').doc(siteId);
  await site.set(data, { merge: true }); // returns Promise<void>, so we need to await
  return site;
};

export const deleteSite = async (siteId: any, token: any) => {
  const resp = await axios.delete(`/api/auth/site/${siteId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp;
};

export const getSite = async (siteId: string | undefined) => {
  const doc = await firestore.collection('brush_style_site').doc(siteId).get();
  const site = { id: doc.id, ...doc.data() };
  return site;
};
