import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRunBarComponent } from './test-run-bar/test-run-bar.component';
import { StoreModule } from '@ngrx/store';
import { flowsReducer } from './store/flow/flows.reducer';
import { viewModeReducer } from './store/builder/viewmode/view-mode.reducer';
import { flowItemsDetailsReducer } from './store/builder/flow-item-details/flow-items-details.reducer';
import { appConnectionsReducer } from './store/app-connections/app-connections.reducer';
import { UiCommonModule } from '@activepieces/ui/common';
import { FlowsEffects } from './store/flow/flow.effects';
import { ViewModeEffects } from './store/builder/viewmode/view-mode.effects';
import { FlowItemsDetailsEffects } from './store/builder/flow-item-details/flow-items-details.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    UiCommonModule,
    CommonModule,
    StoreModule.forFeature('builderState', {
      flowsState: flowsReducer,
      viewMode: viewModeReducer,
      flowItemsDetailsState: flowItemsDetailsReducer,
      appConnectionsState: appConnectionsReducer,
    }),
    EffectsModule.forFeature([
      FlowsEffects,
      ViewModeEffects,
      FlowItemsDetailsEffects,
    ]),
  ],
  declarations: [TestRunBarComponent],
})
export class UiFeatureBuilderStoreModule {}
