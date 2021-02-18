import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { UserListModuleState } from "./state";
import { FEATURE_NAME } from "./store.config";
import { UserListActions } from "./user-list/user-list.actions";
import { UserListEffects } from "./user-list/user-list.effects";
import { userListReducer } from "./user-list/user-list.reducer";
import { UserListFacadeService } from "./user-list/user-list.service";

export const userListReducers: ActionReducerMap<UserListModuleState, UserListActions> = {
    userListState: userListReducer,
    
};
@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_NAME, userListReducers),
        EffectsModule.forFeature([UserListEffects])
    ],
    providers: [UserListFacadeService]
})
export class UserListStoreModule { }
