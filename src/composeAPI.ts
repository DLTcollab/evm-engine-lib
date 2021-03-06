import { EVMLC } from 'evm-lite-core';

import { createAccount } from './createAccount';
import { fetchAccount } from './fetchAccount';
import { transfer } from './transfer';
import { deployContract } from './deployContract';
import { interactContract } from './interactContract';

export const composeAPI = (APIHost: string, APIPort: number, address: string) => {
  const evmlc = new EVMLC(APIHost, APIPort, {
    from: address,
    gas: 1000000,
    gasPrice: 0,
  });

  return {
    fetchAccount: fetchAccount(evmlc),
    createAccount: createAccount(evmlc),
    transfer: transfer(evmlc),
    deployContract: deployContract(evmlc),
    interactContract: interactContract(evmlc),
  };
};
