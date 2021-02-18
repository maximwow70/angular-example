import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { UserListModuleState } from "./state";
import { FEATURE_NAME } from "./store.config";

export const userListReducers: ActionReducerMap<UserListModuleState> = {
    userList: <any>{}
};
@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_NAME, userListReducers),
        EffectsModule.forFeature([])
    ],
    providers: []
})
export class UserListStoreModule { }
