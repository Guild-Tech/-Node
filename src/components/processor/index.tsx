import { coreProcessor } from "./core";
import { ryzenProcessors } from "./ryzen";
import { threadripperProcessors } from "./threadripper";
import { ProcessorType } from "./type";

export const processorData: Record<string, ProcessorType> = {
  core: coreProcessor,
  ryzen: ryzenProcessors,
  threadripper: threadripperProcessors,
};
