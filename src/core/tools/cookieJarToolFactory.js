/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import cookieDetails from "../../constants/cookieDetails";

const { ALLOY_COOKIE_NAME, ALLOY_COOKIE_TTL_IN_DAYS } = cookieDetails;

/**
 * Tool-specific dependencies => componentCreator => result
 */
export default ({
  config,
  createCookieProxy,
  createComponentNamespacedCookieJar,
  getTopLevelDomain,
  createOrgNamespacedCookieName
}) => {
  const cookieName = createOrgNamespacedCookieName(
    ALLOY_COOKIE_NAME,
    config.imsOrgId
  );
  const cookieProxy = createCookieProxy(
    cookieName,
    ALLOY_COOKIE_TTL_IN_DAYS,
    config.cookieDomain || getTopLevelDomain()
  );
  return componentAbbreviation =>
    createComponentNamespacedCookieJar(cookieProxy, componentAbbreviation);
};