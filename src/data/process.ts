import { TranslationDictionary } from "./translations";

export interface ProcessStepItem {
  id: string;
  step: string;
  number: number;
  durationKey: keyof TranslationDictionary;
  titleKey: keyof TranslationDictionary;
  leadKey: keyof TranslationDictionary;
  descKey: keyof TranslationDictionary;
}

export const processSteps: ProcessStepItem[] = [
  {
    id: "step-1",
    step: "01",
    number: 1,
    durationKey: "process_step_1_duration",
    titleKey: "process_step_1_title",
    leadKey: "process_step_1_lead",
    descKey: "process_step_1_desc",
  },
  {
    id: "step-2",
    step: "02",
    number: 2,
    durationKey: "process_step_2_duration",
    titleKey: "process_step_2_title",
    leadKey: "process_step_2_lead",
    descKey: "process_step_2_desc",
  },
  {
    id: "step-3",
    step: "03",
    number: 3,
    durationKey: "process_step_3_duration",
    titleKey: "process_step_3_title",
    leadKey: "process_step_3_lead",
    descKey: "process_step_3_desc",
  },
  {
    id: "step-4",
    step: "04",
    number: 4,
    durationKey: "process_step_4_duration",
    titleKey: "process_step_4_title",
    leadKey: "process_step_4_lead",
    descKey: "process_step_4_desc",
  },
  {
    id: "step-5",
    step: "05",
    number: 5,
    durationKey: "process_step_5_duration",
    titleKey: "process_step_5_title",
    leadKey: "process_step_5_lead",
    descKey: "process_step_5_desc",
  },
];
