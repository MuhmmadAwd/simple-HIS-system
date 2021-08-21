$(document).ready(function () {
	initRouter()
	renderTable()
})
function initRouter() {
	$(".router-link").click((e) => {
		let dataComponent = $(e.target).data("component")
		hideAll(".patient-edit, .users-list, .users-edit, .patient-list")
		showComponent(dataComponent)
	})
}
function hideAll(dataComponents) {
	$(dataComponents).hide()
}
function showComponent(dataComponent) {
	$(dataComponent).show()
}
function renderTable() {
	patientsData.forEach((data) => {
		let patientRow = `
							<tr>
								<td>${data.ID}</td>
								<td>${data.fname} ${data.mname} ${data.lname}</td>
								<td>${data.email}</td>
								<td>${data.gender}</td>
								<td>${data.DOB}</td>
								<td>${data.Active}</td>
								<td>${data.CreatedBy} in ${data.creationDate}</td>
							</tr>
						 `
		$(".patient-table-data").append(patientRow)
	})
}

