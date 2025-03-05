'use strict';

/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
// for backwards compat only, not actually importing these suites
const ED25519_KEY_2018_CONTEXT_URL =
  'https://w3id.org/security/suites/ed25519-2018/v1';
const ED25519_KEY_2020_CONTEXT_URL =
  'https://w3id.org/security/suites/ed25519-2020/v1';
const X25519_KEY_2019_CONTEXT_URL =
  'https://w3id.org/security/suites/x25519-2019/v1';
const X25519_KEY_2020_CONTEXT_URL =
  'https://w3id.org/security/suites/x25519-2020/v1';

const MULTIKEY_CONTEXT_V1_URL = 'https://w3id.org/security/multikey/v1';

const contextsBySuite = new Map([
  ['Ed25519VerificationKey2020', ED25519_KEY_2020_CONTEXT_URL],
  ['Ed25519VerificationKey2018', ED25519_KEY_2018_CONTEXT_URL],
  ['Multikey', MULTIKEY_CONTEXT_V1_URL],
  ['X25519KeyAgreementKey2020', X25519_KEY_2020_CONTEXT_URL],
  ['X25519KeyAgreementKey2019', X25519_KEY_2019_CONTEXT_URL]
]);

const defaultFetchOptions = {
  // size in bytes for did documents
  size: 8192,
  // request time out in ms
  timeout: 5000
};

const didPrefix = 'did:web:';
const didFile = 'did.json';
const fileSuffix = `.well-known/${didFile}`;

exports.contextsBySuite = contextsBySuite;
exports.defaultFetchOptions = defaultFetchOptions;
exports.didFile = didFile;
exports.didPrefix = didPrefix;
exports.fileSuffix = fileSuffix;
