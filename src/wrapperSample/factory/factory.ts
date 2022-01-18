import { AccountRepository } from "../repository/feature";

type RepositoryObject = {
  [name: string]: any;
};

const repositories: RepositoryObject = {
  accounts: AccountRepository,
};

export const RepositoryFactory = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get: (name: string) => repositories[name],
};
