import { createFeatureSelector, MemoizedSelector } from "@ngrx/store";
import { AppModuleState } from "./state";
import { FEATURE_NAME } from './store.config';

export const selectCatalogManagementModuleState: MemoizedSelector<
    object,
    AppModuleState
> = createFeatureSelector<AppModuleState>(FEATURE_NAME);
