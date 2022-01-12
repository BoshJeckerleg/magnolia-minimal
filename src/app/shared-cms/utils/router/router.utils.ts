import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Data,
  Params,
  RouterState,
} from '@angular/router';

export function getActivatedRoute(routerState: RouterState): ActivatedRoute {
  let route: ActivatedRoute = routerState.root;

  while (route.firstChild) {
    route = route.firstChild;
  }

  return route;
}

export function getRouteData(snapshot?: ActivatedRouteSnapshot): Data {
  if (!snapshot) {
    return {};
  }

  let data = { ...snapshot.root.data };
  let route: ActivatedRouteSnapshot | null = snapshot.root;

  do {
    data = {
      ...data,
      ...route.data,
    };
    route = route.firstChild;
  } while (route);

  return data;
}

export function getRouteParams(snapshot?: ActivatedRouteSnapshot): Data {
  if (!snapshot) {
    return {};
  }

  let params: Params = { ...snapshot.root.params };
  let route: ActivatedRouteSnapshot | null = snapshot.root;

  do {
    params = {
      ...params,
      ...route.params,
    };
    route = route.firstChild;
  } while (route);

  return params;
}
