import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { AppModuleState } from "./state";
import { FEATURE_NAME } from "./store.config";

export const appReducers: ActionReducerMap<AppModuleState> = {
    userList: <any>{}
};
@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_NAME, appReducers),
        EffectsModule.forFeature([])
    ],
    providers: []
})
export class AppStoreModule { }
