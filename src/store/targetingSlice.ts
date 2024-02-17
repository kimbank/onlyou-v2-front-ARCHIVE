import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
};

const targetingRangeField: TargetingRangeField = {
  from: null,
  to: null,
  priority: null,
};

const initialState: any = {
  _step: 0,
  birthYear: { ...targetingRangeField, priority: 0 }, // 기본 반영 조건
  residence: { ...targetingField, priority: 0 }, // 기본 반영 조건
  jobType: targetingField,
  salary: targetingRangeField,
  university: targetingField,
  divorce: targetingField,

  workType: targetingField,
  smoking: targetingField,
  drinking: targetingField,
  interest: { ...targetingField, priority: 0 }, // 기본 반영 조건
  numberDating: targetingField,
  athleticLife: targetingField,
  petAnimal: targetingField,
  religion: targetingField,

  extrovert_introvert: targetingField,
  intuition_reality: targetingField,
  emotion_reason: targetingField,
  impromptu_plan: targetingField,
  personalityCharm: { ...targetingField, priority: 0 }, // 기본 반영 조건

  marriageValues: targetingField,
  oppositeSexFriendValues: targetingField,
  politicalValues: targetingField,
  consumptionValues: targetingField,
  careerFamilyValues: targetingField,
  childrenValues: targetingField,
  // appearance: targetingField,

  animalImage: targetingField,
  doubleEyelid: targetingField,
  height: targetingRangeField,
  bodyType: targetingField,
  externalCharm: { ...targetingField, priority: 0 }, // 기본 반영 조건
  tattoo: targetingField,

  preferredDate: targetingField,
  preferredContactMethod: targetingField,
  loveInitiative: targetingField,
  datingFrequency: targetingField,
  contactStyle: targetingField,
  premaritalPurity: targetingField,
  conflictResolutionMethod: targetingField,
};

const targetingSlice = createSlice({
  name: "targeting",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state._step = action.payload;
    },

    setTargetingDataField: (
      state,
      action: PayloadAction<{ field: keyof TargetingState; data: number[] }>
    ) => {
      const { field, data } = action.payload;
      state[field].data = data;
    },

    setTargetingRangeField: (
      state,
      action: PayloadAction<{
        field: keyof TargetingState;
        from: number;
        to: number;
      }>
    ) => {
      const { field, from, to } = action.payload;
      state[field].from = from;
      state[field].to = to;
    },

    setTargetingPriority: (
      state,
      action: PayloadAction<{
        field: keyof TargetingState;
        priority: number | null;
      }>
    ) => {
      const { field, priority } = action.payload;
      if (state[field]) {
        state[field]!.priority = priority;
      }
    },

    resetTargeting: () => initialState,
  },
});

export const {
  setStep,
  setTargetingDataField,
  setTargetingRangeField,
  setTargetingPriority,
  resetTargeting,
} = targetingSlice.actions;
export default targetingSlice.reducer;
