/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ServiceRef } from '@backstage/backend-plugin-api';
import { catalogServiceRef as _catalogServiceRef } from './catalogService';
import { CatalogApi } from '@backstage/catalog-client';

/**
 * @alpha
 * @deprecated Use {@link @backstage/plugin-catalog-node#catalogServiceRef} instead
 */
export const catalogServiceRef = _catalogServiceRef as ServiceRef<
  CatalogApi,
  'plugin',
  'singleton'
>;

export type { CatalogLocationsExtensionPoint } from './extensions';
export { catalogLocationsExtensionPoint } from './extensions';
export type { CatalogProcessingExtensionPoint } from './extensions';
export { catalogProcessingExtensionPoint } from './extensions';
export type { CatalogAnalysisExtensionPoint } from './extensions';
export { catalogAnalysisExtensionPoint } from './extensions';
export type { CatalogPermissionRuleInput } from './extensions';
export type { CatalogPermissionExtensionPoint } from './extensions';
export { catalogPermissionExtensionPoint } from './extensions';
export type { CatalogModelExtensionPoint } from './extensions';
export { catalogModelExtensionPoint } from './extensions';
