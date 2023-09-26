let url = `https://x-colors.yurace.pro/api/random`;

async function generateColour(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let colourbox = document.getElementById('colourbox');
    colourbox.style.backgroundColor = data.rgb;
}