function pickSurvey(){
    if ((Math.floor(Math.random() * 10))%2 === 1){
        document.getElementById("decisor").setAttribute("href","https://docs.google.com/forms/d/e/1FAIpQLSf4wsIGUJ8BqmrkoAByjdpsFMov9UnTkL-M_VQyMBzIwuhVZg/viewform?usp=sf_link");
    }else {
        document.getElementById("decisor").setAttribute("href", "https://docs.google.com/forms/d/e/1FAIpQLSfC9y1ANkHUipkHlg_oj8osbgE94kW2HK5CylrINOWhiNj7iQ/viewform?usp=sf_link");
    }
}
