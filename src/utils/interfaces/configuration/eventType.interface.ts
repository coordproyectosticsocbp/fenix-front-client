import { ICaseTypeInterfaceItem } from "./caseType.interface";

export interface IEventTypeList {
  events: IEventTypeItem[];
}

export interface IEventTypeItem {
  id: number;
  eve_t_casetype_id_fk: number;
  eve_t_name: string;
  eve_t_description: string | null;
  eve_t_status: boolean;
  createdAt: string; // This should ideally be a Date object
  updateAt: string; // This should ideally be a Date object
  deletedAt: string | null; // This can be null if not deleted
  event: IEventTypeItem[];
  caseType: ICaseTypeInterfaceItem;
}

export interface IEventItem {
  id: number;
  eve_eventtype_id_fk: number;
  eve_name: string;
  eve_description: string;
  eve_status: boolean;
  createdAt: string; // This should ideally be a Date object
  updateAt: string; // This should ideally be a Date object
  deletedAt: string | null; // This can be null if not deleted
}

export interface ICreateEventType {
  eve_t_casetype_id_fk: number;
  eve_t_name: string;
  eve_t_description: string;
}
