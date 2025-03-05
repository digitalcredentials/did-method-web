'use strict';

var helpers = require('./helpers.js');
var DidWebDriver = require('./DidWebDriver.js');
var didMethodKey = require('@digitalcredentials/did-method-key');

/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */

/**
 * Helper method to match the `.driver()` API of other `did-io` plugins.
 *
 * @param {object} options - Options to use.
 * @param {Array<string>} [options.allowList] - A list of allowed domains.
 * @param {object} options.fetchOptions - Options for the http client.
 *
 * @returns {DidWebDriver} Returns an instance of a did:web resolver driver.
 */
function driver({allowList, fetchOptions} = {}) {
  return new DidWebDriver.DidWebDriver({allowList, fetchOptions});
}

exports.didUrlToHttpsUrl = helpers.didUrlToHttpsUrl;
exports.httpsUrlToDidUrl = helpers.httpsUrlToDidUrl;
exports.DidWebDriver = DidWebDriver.DidWebDriver;
Object.defineProperty(exports, "createFromMultibase", {
  enumerable: true,
  get: function () { return didMethodKey.createFromMultibase; }
});
exports.driver = driver;
