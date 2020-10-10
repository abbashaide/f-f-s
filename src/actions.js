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

import Clarifai from 'clarifai';
const app = new Clarifai.App({
 apiKey: '3a7b8f6b8b974388a03d44d2034eab3e'
});


export const getUrlField = (text) => ({
	type: CHANGE_URL_FIELD,
	payload: text
})

export const setImageDisplay = (text) => ({
	type: IMAGE_DISPLAY,
	payload: text
})

const calculateFaceLocation = data => {
    
  const clarifiFace = data.outputs[0].data.regions.map((region) => {
    return region.region_info.bounding_box;
 });

 const image = document.getElementById('inputimages');
 const width = Number(image.width);
 const height = Number(image.height);

 const box = clarifiFace.map((face) =>{
    return {
    leftCol: face.left_col * width,
    topRow: face.top_row * height,
    rightCol: width - (face.right_col * width),
    bottomRow: height -(face.bottom_row *height)
 }
 });
 return box;
}

const getImageDemographics = data => {
    const clarifaiDemographics = data.outputs[0].data.regions.map((region) => {
      return {
        age: region.data.concepts[0].name,
        gender: region.data.concepts[20].name,
        race : region.data.concepts[22].name,
      }
      
    });
    return clarifaiDemographics;
  }


export const fetchFromApi = (url) => (dispatch) => {
	dispatch({type: API_CALL_PENDING});

	app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, url)
  .then(response => {
    if(response.outputs[0].data.regions){
    dispatch({type: API_CALL_SUCCESS_BOX, payload: calculateFaceLocation(response)});
    dispatch({type: API_CALL_SUCCESS_DEM, payload: getImageDemographics(response)});
    }else{
      alert("Image doesn't contain any faces!")
    }
  })
  .catch(error => dispatch({type: API_CALL_FAILED, payload: error}))
}


export const selectFaceBox = (box) => ({
	type: SELECTED_FACE_BOX,
	payload: box
})

export const selectFaceDemographics = (demo) => ({
	type: SELECTED_FACE_DEM,
	payload: demo
})