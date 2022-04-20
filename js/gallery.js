$('[data-fancybox="gallery"]').fancybox({
        defaults = {
            loop: true,
            gutter: 25,
            buttons: [
                "fullScreen",
                "download",
                "thumbs",
                "close"
            ],
            idleTime: 10,
        }
    });


    $('.notsetup').on('click',onClickCall);
    
    function onClickCall(){
        console.log("Hello");
        alert("Under Construction. Sorry For the inconvenience ")
    }