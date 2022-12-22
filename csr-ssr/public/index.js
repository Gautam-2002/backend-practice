console.log(jQuery);
$.get('/todo',(data)=>{
    // console.log(data);
    for (let todo of data) {
        $('#list').append(`<li> ${todo}</li>`)
    }
})