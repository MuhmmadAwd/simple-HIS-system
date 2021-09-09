class PatientEdit {
	// constructor(){
	// 	this.formMode = ""
	// }
	init = (e) => {
			$(".patient-save").click(this.onChooseFormMode)
		}

	open = (e)=>{
		let patientObj = this.getPatientObj(e)
		this.loadControlData(patientObj)
		router.navigate(e)
	}

	getPatientObj = (e) => {
		let currentRow = $(e.target).parents("tr")
		let PatientObj = null
		let currentID = currentRow.find(".patient-id").data("id")
		for(let i=0;i<patientsData.length;i++){
			if(patientsData[i].ID == currentID){
				PatientObj = patientsData[i]
			}
		}
		return PatientObj
	}

	loadControlData = (patientObj) => {
		$(".id-input").val(patientObj.ID)
		$(".fname-input").val(patientObj.fname)
		$(".mname-input").val(patientObj.mname)
		$(".lname-input").val(patientObj.lname)
		$(".email-input").val(patientObj.email)
		$(`.gender-input[value = ${patientObj.gender}]`).attr("checked", "checked")
		$(".date-input").val("1954-02-09")
		$(`.active-input[value = ${patientObj.Active}]`).attr("checked", "checked");
		$(`.form-select option[value = 1]`).attr("selected", "selected");
	}

	getControlData = () => {

		let idValue = $(".id-input").val()
		let fnameValue = $(".fname-input").val()
		let mnameValue = $(".mname-input").val()
		let lnameValue = $(".lname-input").val()
		let fullNameValue = fnameValue + " " + mnameValue + " " + lnameValue
		let emailValue = $(".email-input").val()
		let creationValue = $(".form-select option:selected").val()
		let genderValue = $("input[type=radio]:checked").val()
		let DOBValue = $(".date-input").val()
		let activeValue = $("input[type=checkbox]:checked").val()
		let patientValues = {
			ID: idValue, fname: fnameValue, mname: mnameValue, lname: lnameValue, email: emailValue, gender: genderValue,
			DOB: DOBValue, Active: activeValue, creationDate: creationValue
		}
		return patientValues
	}
	onChooseFormMode = (e)=>{
		console.log()
		if (patientList.formMode == "Edit"){
			this.UpdateTableData()
		}
		else if(patientList.formMode == "New"){
			this.AddPatientData()
		}
	}
	UpdateTableData = () => {
		let patientValue = this.getControlData()
		let currentID = patientValue.ID
		for(let i=0;i<patientsData.length;i++){
			if(patientsData[i].ID == currentID){
				patientsData[i].ID = currentID
				patientsData[i].fname = patientValue.fname
				patientsData[i].mname = patientValue.mname
				patientsData[i].lname = patientValue.lname
				patientsData[i].email = patientValue.email
				patientsData[i].DOB = patientValue.DOB
				patientsData[i].gender = patientValue.gender
				patientsData[i].creationDate = patientValue.creationDate
				patientsData[i].Active = patientValue.Active
			}
		}
		patientList.RenderTable()
		this.resetControls()
	}
		
	AddPatientData = () => {
		let data = this.getControlData()
		let templateText = $("#patient-list-template").html()
		let RendertemplateFun = templateEngine.Rendertemplate(templateText, data)
		$(".patient-table-data").append(RendertemplateFun)
		console.log("add",data)
		this.resetControls()
	}		

	resetControls(){
		$(".patient-form")[0].reset()
	}

}
var patientEdit = new PatientEdit()