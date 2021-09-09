class PatientList {
	constructor(){
		this.patientID = 0;
	}
	init() {
		this.RenderTable()
	}
	RenderTable() {
		let templateText = $("#patient-list-template").html()
		patientsData.forEach((data) => {
			let RenderTemplate = templateEngine.Rendertemplate(templateText, data)
			$(".patient-table-data").append(RenderTemplate)
		})
		$(".patient-add").click(this.AddPatient)
		$(document).on("click",".patient-EditBtn",this.onEditCurrentPatient)
	}
	AddPatient = () =>{
		debugger
		patientEdit.formMode = "New"
		
	}

	onEditCurrentPatient = (e) => {
		debugger
		$(".table-row").remove()
		let currentRow = $(e.target).parents("tr")
		this.patientID = currentRow.find(".patient-id").data("id")
		patientEdit.open(e)
	}

}
var patientList = new PatientList()

