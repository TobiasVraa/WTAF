//knap skifte farve
    //fanger knappen inde i infoOmKokken sektionen
    const followBtn = document.querySelector('.infoOmKokken .secondaryButton');
    //hvis knappen findes
    if (followBtn) {
         //tilføjer eventlistener til knappen
        followBtn.addEventListener('click', function () {
            //skifter tekst og class når den blir klikket på
            //fjerner tekst
            if (followBtn.textContent.trim() === "Follow") {
                //tilføjer ny tekst 
                followBtn.textContent = "Unfollow";
                //ændre class 
                followBtn.classList.add("following");
            } else {
                
                followBtn.textContent = "Follow";
                followBtn.classList.remove("following");
            }
        });
    }