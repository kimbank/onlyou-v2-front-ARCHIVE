import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TargetingField {
  data: number[] | null;
  priority: number | null;
}

interface TargetingRangeField {
  from: number | null;
  to: number | null;
  priority: number | null;
}

interface TargetingState {
  [key: string]: TargetingField | TargetingRangeField;
  // birthYear: TargetingRangeField;
  // residence: TargetingField;
  // jobType: TargetingField;
  // salary: TargetingField;
  // height: TargetingRangeField;
  // university: TargetingField;
  // divorce: TargetingField;
  // workType: TargetingField;
  // smoking: TargetingField;
  // drinking: TargetingField;
  // interest: TargetingField;
  // numberDating: TargetingField;
  // athleticLife: TargetingField;
  // religion: TargetingField;
  // extrovert_introvert: TargetingField;
  // intuition_reality: TargetingField;
  // emotion_reason: TargetingField;
  // impromptu_plan: TargetingField;
  // personalityCharm: TargetingField;
  // marriageValues: TargetingField;
  // oppositeSexFriendValues: TargetingField;
  // politicalValues: TargetingField;
  // consumptionValues: TargetingField;
  // careerFamilyValues: TargetingField;
  // childrenValues: TargetingField;
  // appearance: TargetingField;
  // animalImage: TargetingField;
  // doubleEyelid: TargetingField;
  // bodyType: TargetingField;
  // externalCharm: TargetingField;
  // tattoo: TargetingField;
  // preferredDate: TargetingField;
  // preferredContactMethod: TargetingField;
  // loveInitiative: TargetingField;
  // datingFrequency: TargetingField;
  // contactStyle: TargetingField;
  // conflictResolutionMethod: TargetingField;
}

const targetingField: TargetingField = {
  data: [],
  priority: null,
}

const targetingRangeField: TargetingRangeField = {
  from: null,
  to: null,
  priority: null,
}

const initialState: TargetingState = {
  birthYear: targetingRangeField,
  residence: targetingField,
  jobType: targetingField,
  salary: targetingField,
  height: targetingRangeField,
  university: targetingField,
  divorce: targetingField,
  workType: targetingField,
  smoking: targetingField,
  drinking: targetingField,
  interest: targetingField,
  numberDating: targetingField,
  athleticLife: targetingField,
  religion: targetingField,
  extrovert_introvert: targetingField,
  intuition_reality: targetingField,
  emotion_reason: targetingField,
  impromptu_plan: targetingField,
  personalityCharm: targetingField,
  marriageValues: targetingField,
  oppositeSexFriendValues: targetingField,
  politicalValues: targetingField,
  consumptionValues: targetingField,
  careerFamilyValues: targetingField,
  childrenValues: targetingField,
  appearance: targetingField,
  animalImage: targetingField,
  doubleEyelid: targetingField,
  bodyType: targetingField,
  externalCharm: targetingField,
  tattoo: targetingField,
  preferredDate: targetingField,
  preferredContactMethod: targetingField,
  loveInitiative: targetingField,
  datingFrequency: targetingField,
  contactStyle: targetingField,
  conflictResolutionMethod: targetingField,
};

const targetingSlice = createSlice({
  name: 'targeting',
  initialState,
  reducers: {
    setTargetingField: (
      state,
      action: PayloadAction<{ field: keyof TargetingState; value: any }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setTargetingPriority: (
      state,
      action: PayloadAction<{ field: keyof TargetingState; priority: (number | null) }>
    ) => {
      const { field, priority } = action.payload;
      if (state[field]) {
        state[field]!.priority = priority;
      }
    }
  },
});

export const { setTargetingField, setTargetingPriority } = targetingSlice.actions;
export default targetingSlice.reducer;
