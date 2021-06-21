import { IRoute, IRoutes } from "./../../@interface/share";

export const mainRoute: IRoutes = {
  myProfile: {
    href: "/my-profile",
  },
  theme: {
    href: "/theme",
  },
};

export const routes = {
  information: {
    path: `${mainRoute.myProfile.href}/information`,
  },
  experience: {
    path: `${mainRoute.myProfile.href}/experience`,
  },
  themes: {
    path: `${mainRoute.myProfile.href}/my-themes`,
  },
  personal_theme: {
    path: `${mainRoute.theme.href}/personal-theme`,
  },
  admin_theme: {
    path: `${mainRoute.theme.href}/admin-theme`,
  },
  _404: {
    path: `${mainRoute.myProfile.href}/404`,
  },
};

export const routesSidebar: Array<IRoute> = [
  {
    name: "Information",
    href: `${routes.information.path}`,
  },
  {
    name: "Experience",
    href: `${routes.experience.path}`,
  },
  {
    name: "Themes",
    href: `${routes.themes.path}`,
  },
];
