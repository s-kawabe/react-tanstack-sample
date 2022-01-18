import { AxiosError } from "axios";
import { RepositoryFactory } from "../factory/factory";
import QueryKeyGenerator from "../queryKeyGenerator/queryKeyGenerator";
import {
  useQuery,
  UseQueryResult,
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "react-query";

const RESOURCE_NAME = "accounts";

const accountQueryKeyGenerator = QueryKeyGenerator(RESOURCE_NAME);

type Account = {
  id: string;
  name: string;
  age: number;
  role: string;
  birthday: Date;
}

// const globalErrorHandlingOptions = {
//   // 500系errorはErrorBoundaryまで伝播させる?
//   useErrorBoundary: (error: AxiosError) => {
//     return !!error && !!error.response && error.response.status >= 500;
//   },
// };

// ---------- GET ----------

// ユーザー一覧取得
type AccountGetListResponse = Account[];
export const useAccountList = (): UseQueryResult<AccountGetListResponse> => {
  const accountRepository = RepositoryFactory.get(RESOURCE_NAME);

  return useQuery<AccountGetListResponse, AxiosError>(
    accountQueryKeyGenerator.generateListKey(),
    () => accountRepository.list()
  );
};

// 詳細取得
type AccountGetItemResponse = Account;
export const useAccountItem = (
  id: string
): UseQueryResult<AccountGetItemResponse> => {
  const accountRepository = RepositoryFactory.get(RESOURCE_NAME);

  return useQuery<AccountGetItemResponse, AxiosError>(
    accountQueryKeyGenerator.generateGetKey(id),
    () => accountRepository.get(id)
  );
};

// ---------- POST, PUT, PATCH, DELETE ----------

// ユーザ作成
export const useAccountCreate = (): UseMutationResult<void> => {
  const queryClient = useQueryClient();
  const accountRepository = RepositoryFactory.get(RESOURCE_NAME);

  return useMutation(accountRepository.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(RESOURCE_NAME);
    },
  });
};

// ユーザ情報編集
export const useAccountUpdate = (): UseMutationResult<void> => {
  const queryClient = useQueryClient();
  const accountRepository = RepositoryFactory.get(RESOURCE_NAME);

  return useMutation(accountRepository.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(RESOURCE_NAME);
    },
  });
};

// ユーザ削除
export const useAccountDelete = (): UseMutationResult<void> => {
  const queryClient = useQueryClient();
  const accountRepository = RepositoryFactory.get(RESOURCE_NAME);

  return useMutation(accountRepository.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries(RESOURCE_NAME);
    },
  });
};
