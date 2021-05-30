import HttpHelper from "../utils/HttpHelperUtil";


function getExample(reqData) {
  return HttpHelper.get(reqData).
    then(data => {
    return data?.hits;
  });
};

export const exampleService = {
  getExample
};
