class PatientEdit {
	init = () => {
			$(".patient-save").click(this.onChooseRightFunction)
		}
	
	setFormData = (e) => {

		let PatientData = patientList.getcurrentPatientData(e)
		$(".id-input").val(PatientData.ID)
		$(".fname-input").val(PatientData.fname)
		$(".mname-input").val(PatientData.mname)
		$(".lname-input").val(PatientData.lname)
		$(".email-input").val(PatientData.email)
		$(`.gender-input[value = ${PatientData.gender}]`).attr("checked", "checked")
		$(".date-input").val("1954-02-09")
		$(`.active-input[value = ${PatientData.Active}]`).attr("checked", "checked");
		$(`.form-select option[value = 1]`).attr("selected", "selected");
	}

	getFormData = () => {

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
	onChooseRightFunction = ()=>{
		if (patientList.AddOrEdit == "Edit"){
			this.UpdateTableData()
		}
		else if(patientList.AddOrEdit == "Add"){
			this.AddPatientData()
		}
	}
	UpdateTableData = () => {
			let patientValue = this.getFormData()
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
			$(".patient-form")[0].reset()
	}
		
	AddPatientData = () => {
		let data = this.getFormData()
		let templateText = $("#patient-list-template").html()
		let RendertemplateFun = templateEngine.Rendertemplate(templateText, data)
		$(".patient-table-data").append(RendertemplateFun)
		$(".patient-form")[0].reset()
	}		

}
var patientEdit = new PatientEdit()