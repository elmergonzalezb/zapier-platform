'use strict';

const errors = require('../../errors');

/**
 * The server-side will raise `RefreshAuthError` when `autoRefresh === true`.
 * Once we always run `throwForStatus` or a custom `afterResponse`, we can drop `throwForStaleAuth`.
 */
const throwForStaleAuth = response => {
  if (response.status === 401) {
    throw new errors.ResponseError(response);
  }

  return response;
};

module.exports = throwForStaleAuth;
