import { FlowRun, StepLocationRelativeToParent } from '@activepieces/shared';
import { LeftSideBarType } from './enums/left-side-bar-type.enum';
import { RightSideBarType } from './enums/right-side-bar-type.enum';
import { FlowItem } from './flow-item';
import { AddButtonType } from './enums/add-button-type';

export interface TabState {
  leftSidebar: {
    type: LeftSideBarType;
  };
  rightSidebar: {
    type: RightSideBarType;
    props: | {
      stepLocationRelativeToParent: StepLocationRelativeToParent;
      stepName: string;
    }
  | {
      stepName: string;
      buttonType: AddButtonType;
    }
    | RightSideBarType.NONE
  };

  focusedStep: FlowItem | undefined;
  selectedRun: FlowRun | undefined;
  selectedStepName: string;
}

export interface StepTypeSideBarProps {
  stepName: string;
  stepLocationRelativeToParent: StepLocationRelativeToParent;
}
