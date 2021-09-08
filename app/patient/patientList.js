class PatientList {
	constructor(){
		this.AddOrEdit = ""
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
		this.AddOrEdit = "Add"
	}

	onEditCurrentPatient = (e) => {
		$(".table-row").remove()
		this.AddOrEdit = "Edit"
		this.getcurrentPatientData(e)
		router.navigate(e)
		patientEdit.setFormData(e)
		patientEdit.init();
		
		
	}

	getcurrentPatientData = (e) => {
		let currentRow = $(e.target).parents("tr")
		let currentRowData = null
		let currentID = currentRow.find(".patient-id").data("id")
		for(let i=0;i<patientsData.length;i++){
			if(patientsData[i].ID == currentID){
				currentRowData = patientsData[i]
			}
		}
		return currentRowData
	}

}
var patientList = new PatientList()

