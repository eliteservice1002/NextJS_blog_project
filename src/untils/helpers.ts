import queryString from "query-string";

import { Center, CenterFilters } from "./interfaces";

export function capitalFirstCenterLetter(centerName: string) {
  const splitString: string[] = centerName.toLowerCase().split(" ");

  for (let i = 0, x = splitString.length; i < x; i++) {
    splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
  }

  return splitString.join(" ");
}

export const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

export const isBrowser = () => typeof window !== "undefined";

export const getFilterQueryParameters = () => {
  const filters: CenterFilters = { kind: "COMMERCIAL", active: "true" };

  return filters;
};

export const sortCenters = (centers: Center[]) => {
  centers.sort((center1, center2) =>
    center1.city.state.name <= center2.city.state.name ? -1 : 1,
  );
  return centers.sort((center1, center2) => {
    if (center1.city.state.name !== center2.city.state.name) {
      return 0;
    }
    return center1.name <= center2.name ? -1 : 1;
  });
};

export function groupBy<T>(arr: T[], fn: any) {
  return arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc: T[], val: string, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {}) as { [key: string]: T[] };
}

export const storeQueryParameters = () => {
  const utmSource = window.location.host;
  const utmMedium = "organic";

  const queryParams = queryString.parse(window.location.search);
  const test = queryParams.test === "true" ? true : false;
  const calendar = queryParams.calendar === "true" ? true : false;
  localStorage.setItem(
    "queryParams",
    JSON.stringify({
      utm_source: utmSource,
      utm_medium: utmMedium,
      ...queryParams,
      test,
      calendar,
    }), // eslint-disable-line
  );
};

export const groupByCenter = (centers: Center[]) =>
  centers.reduce((results, center) => {
    (results[center.city.state.name] =
      results[center.city.state.name] || []).push({
      calendarId: center.calendarId,
      center: center.name,
      centerId: center.id,
      fullAddress:
        center.street +
        ", " +
        center.district +
        ", " +
        center.zipCode +
        ", " +
        center.city.name +
        ", " +
        center.city.state.name,
    });
    return results;
  }, {});

export const findByIdCalendar = (centers, idCalendar) =>
  centers.filter((center) => center.calendarId === idCalendar)[0];

export const firstWordUppercase = (string) =>
  string.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
