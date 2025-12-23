import {
  call_rpc,
  Request,
  RequestResponse
} from "@zmkfirmware/zmk-studio-ts-client";
import useConnectionStore from "@/stores/ConnectionStore.ts";

export const callRemoteProcedureControl = async (
  request: Omit<Request, "requestId">
): Promise<RequestResponse> => {
  const { connection } = useConnectionStore.getState();

  if (!connection) {
    console.warn("RPC call attempted without active connection");
    return {} as RequestResponse;
  }
  // console.trace('RPC Request', conn, req);
  console.log(connection, request);

  return call_rpc(connection, request)
    .then((r) => {
      // console.log('RPC Response', r);
      return r;
    })
    .catch((e) => {
      // console.log('RPC Error', e);
      return e;
    });
};