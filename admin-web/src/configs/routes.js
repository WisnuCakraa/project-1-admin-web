const routes = {
  LOGIN() {
    return `/`;
  },
  DASHBOARD() {
    return `/dashboard`;
  },
  DASHBOARD_EDIT(id = "") {
    return `/dashboard/${id}`;
  },
  NEW_PRODUCT() {
    return `/new-product`;
  },
  REPORT() {
    return `/report`;
  },
  REPORT_NEW() {
    return `/new-report`;
  },
  REPORT_EDIT() {
    return `/report/${id}`;
  },
};
export default routes;
