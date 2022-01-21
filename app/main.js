var patientID = null;
var formMode = "New"
$(document).ready(function () {
  router.init();
  patientList.init();
  patientEdit.init();
  _ValidationEngine.init();
  userList.init();
  userEdit.init();
});