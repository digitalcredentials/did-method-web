/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {httpClient} from '@digitalcredentials/http-client';
import sinon from 'sinon';

export function stubRequest({url, data}) {
  const stub = sinon.stub(httpClient, 'get');
  stub.withArgs(url, sinon.match.any).returns({data});
  return stub;
}
