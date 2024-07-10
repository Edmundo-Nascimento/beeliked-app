import httpClient from "./http-client";

export const allInviteLinks = async () =>
  await httpClient.get(`invite-links`);

export const promotionDetails = async (promotionId: string) =>
  await httpClient.get(`promotions/${promotionId}`);

export const authentication = async (data: any) =>
  await httpClient.post(`authorize`, data);