// Image Upload
let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function() {
    let imageFile = document.querySelector('#customFile').files[0];
    let imageName = imageFile.name;

    let reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load', function() {
        if(this.result && localStorage){
            let imageList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
            imageList.push(this.result);
            localStorage.setItem('images', JSON.stringify(imageList));
        }  
    });
    displayImage();
});  

// Display Image
let displayImage = () => {
    let imageList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    if(imageList.length !== 0){
        let cardImage = '';
        for(let image of imageList){
            cardImage += `<div class="col-md-3">
                            <div class="card img-card">
                                <img src="${image}" alt="" class="img-fluid"> 
                                <div class="card-body">
                                    <h3 class="card-title">Narsimha</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt minus unde vitae nam corrupti.</p>
                                </div>
                            </div>
                        </div>`;
        }
        document.querySelector('#card-row').innerHTML = cardImage;
    } 
};

displayImage();

// Remove All Images
let removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', function(){
    localStorage.removeItem('images');
    displayImage();
});
