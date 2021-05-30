const Validator = {
  validateFeild: function(feild) {
    return !!feild
  },
  // will be used in profile page
  validateEmail: function(email) {
    const reg = /^\w+([.-/+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return reg.test(email)? true: 'Email not valid!'
  },
}

export default Validator;
