import { 
	CHANGE_URL_FIELD,
	IMAGE_DISPLAY,
	API_CALL_PENDING,
	API_CALL_SUCCESS_BOX,
	API_CALL_SUCCESS_DEM,
	API_CALL_FAILED,
	SELECTED_FACE_BOX,
	SELECTED_FACE_DEM
 } from './constants.js';

const initialStateUrl = {
	url: ''
}

export const urlField = (state=initialStateUrl, action={}) => {
	switch(action.type){
		case CHANGE_URL_FIELD:
			return Object.assign({}, state, {url: action.payload});

		default:
			return state;
	}
}



const initialStateImage = {
	imageUrl: 'https://clarifai.com/cms-assets/20180320222304/demographics-001.jpg'
}

export const imageDisplay = (state=initialStateImage, action={}) => {
	switch(action.type){
		case IMAGE_DISPLAY:
			return Object.assign({}, state, {imageUrl: action.payload});

		default:
			return state;
	}
}



const initialStateFace = {
	isPending: false,
	box: [],
	demograph: [],
	error: ''
}

export const faceFromApi = (state=initialStateFace, action={}) => {
	switch(action.type){
		case API_CALL_PENDING:
			return Object.assign({}, state, {isPending: true});

		case API_CALL_SUCCESS_BOX:
			return Object.assign({}, state, {box: action.payload, isPending: false});

		case API_CALL_SUCCESS_DEM:
			return Object.assign({}, state, {demograph: action.payload, isPending: false});

		case API_CALL_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false});

		default:
			return state;
	}
}



const initialStateBox = {
	selectedBox: []
}

export const getFaceBox = (state=initialStateBox, action={}) => {
	switch(action.type){
		case SELECTED_FACE_BOX:
			return Object.assign({}, state, {selectedBox: action.payload});

		default:
			return state;
	}
}



const initialStateDem = {
	selectedFace: {
    age: '',
    gender:'',
    race: '',
  }
}

export const getFaceDemographics = (state=initialStateDem, action={}) => {
	switch(action.type){
		case SELECTED_FACE_DEM:
			return Object.assign({}, state, {selectedFace: {
		    age: action.payload.age,
		    gender: action.payload.gender,
		    race: action.payload.race,
		  }});

		default:
			return state;
	}
}