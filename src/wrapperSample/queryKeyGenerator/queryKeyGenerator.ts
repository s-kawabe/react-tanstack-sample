type Params = Record<string, string>;

// https://react-query.tanstack.com/guides/query-keys#query-keys-are-hashed-deterministically
// eslint-disable-next-line import/no-anonymous-default-export
export default (resource: string) => {
  return {
    generateListKey(params?: Params) {
      if (params) {
        return [resource, "list", params];
      }
      return [resource, "list"];
    },
    generateGetKey(id: string, params?: Params) {
      if (params) {
        return [resource, "list", id, params];
      }
      return [resource, "get", id];
    },
  };
};
