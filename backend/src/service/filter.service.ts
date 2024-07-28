import { getUserQuery } from "../interfaces/user.interfaces";
import * as FilterModel from "../model/filter.model";

export function filterUser(query: getUserQuery) {
  return FilterModel.FilterModel.filterUser(query);
}

export function filterHealthCenter(query: getUserQuery) {
  return FilterModel.FilterModel.filterHealthCenter(query);
}
