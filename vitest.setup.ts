import { config, VueWrapper } from "@vue/test-utils";

const DataTestIdPlugin = (wrapper: VueWrapper) => {
  function findByTestId(selector: string, isComponent = false) {
      return isComponent ?
        wrapper.findComponent(`[data-test-id='${selector}']`) :
        wrapper.find(`[data-test-id='${selector}']`);
  }
  function findAllByTestId(selector: string, isComponent = false) {
      return isComponent ?
        wrapper.findAllComponents(`[data-test-id='${selector}']`) :
        wrapper.findAll(`[data-test-id='${selector}']`);
  }

  return {
    findByTestId,
    findAllByTestId
  };
};

config.plugins.VueWrapper.install(DataTestIdPlugin);