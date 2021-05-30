import HttpHelper from "../utils/HttpHelperUtil";


function getExample(reqData) {
  return HttpHelper.get(reqData).
    then(data => {
      console.log(data)
    return null;
  });
};

export const exampleService = {
  getExample
};
