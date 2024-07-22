import {
  ICreateEventType,
  IEventTypeList,
} from "@/utils/interfaces/configuration/eventType.interface";
import { urls } from "@/api/urls";
import { rest } from "@/api";

export const getEventTypes = async () => {
  const url = `${urls.fenix}/event-type/listEventTypes`;
  try {
    const res = await rest.get<IEventTypeList>(url);
    return res.data;
  } catch (e) {
    throw new Error("Error al retornar las Estrategias");
  }
};

export const createEventType = async (data: ICreateEventType) => {
  const url = `${urls.fenix}/event-type/createEventType`;
  try {
    await rest.post(url, data);
  } catch (e) {
    throw new Error("Error al crear el TIPO DE EVENTO");
  }
};
