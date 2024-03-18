export = login;

interface LoginData {
  email: string;
  password: string;
}

interface LoginApiMessage {
  body: string;
  threadId: string;
}

type ApiListenCallBack = (err: Error, message: LoginApiMessage) => void;

interface LoginApi {
  listen: (callback: ApiListenCallBack) => void;
  sendMessage: (body: string, threadId: string) => void;
}

type LoginCallBack = (error: string, api: LoginApi) => void;

declare function login(
  loginData: LoginData,
  options: any,
  callback: LoginCallBack
): void;
declare function login(loginData: LoginData, callback: LoginCallBack);
//# sourceMappingURL=index.d.ts.map
