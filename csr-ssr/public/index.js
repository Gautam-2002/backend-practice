// console.log(jQuery);
const inp = document.querySelector('#inp')
const btn = document.querySelector('#btn')

function refresh() {
    $.get('/todo',(data)=>{
        // console.log(data);
        for (let todo of data) {
            $('#list').append(`<li> ${todo}</li>`)
        }
    })
}
refresh()

btn.addEventListener('click',()=>{
    // console.log('it works !!');
    const todotxt = inp.value;
    $.post('/todo',{todo:todotxt},()=>{
        console.log('works well !!')
    })
    inp.value = "";
    // document.querySelector('#list').innerHTML = "";
    $('#list').empty();
    refresh()
})