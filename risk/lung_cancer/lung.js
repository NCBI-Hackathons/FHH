var score = {
	'age':0,
	'family_cancer':0,
	'copd':0,
	'personal_cancer':0,
	'bmi':0,
	'white':0,
	'black':0,
	'hispanic':0,
	'pac_islander':0,
	'native_amer':0,
	'current_smoker':0,
	'smoking_intensity':0,
	'years_quit':0,
	'years_smoked':0,
	'education':0,
	'total':0
};

var smoking_intensity = {
	'daily_cigarettes' : 0,
	'total' : 0,
};


// get lng and set to variable. used to open correct pdf //
var lng = window.i18n.lng();
if (lng=='en-US') {
	lng = 'en';
};

$(document).ready(function() {

	
	$('.aradio').buttonset();

	build_required_information_for_personal_history();
	enable_appropriate_changers();
	
	var valid = test_for_any_missing_data();
		
	// always show this because we added a disclaimer	
	if (!valid.age || !valid.race || !valid.ethnicity || !valid.height || 
			!valid.weight || !valid.current_smoker || !valid.daily_cigarettes || !valid.years_quit || !valid.years_smoked || !valid.education) {
		get_required_info_dialog(valid); 
	};
	
	load_all_data_and_calculate_score();
	
});


function calculate_smoking_intensity() {
	smoking_intensity.total = (((daily_cigarettes/100)^-1) - 4.021541613)
}