const btnSuccess=document.querySelector('.control .success')
const btnWarning=document.querySelector('.control .warning')
const btnError=document.querySelector('.control .error')

btnSuccess.addEventListener('click',function(){
    createToast('success')
})

btnWarning.addEventListener('click',function(){
    createToast('warning')
})

btnError.addEventListener('click',function(){
    createToast('error')
})
function createToast(status){
    let templateInner=`<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a Success Message</span>`
    switch(status){
        case 'success':
            templateInner=`<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a Success Message</span>`            
            break;
        case 'warning':
             templateInner=`<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Warning Message</span>`
            break;
        case 'error':
            templateInner=`<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Error Message</span>`
            break;
    }

    var toast=document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML=`${templateInner}
    <span class="countdown"></span>`
    var toastList=document.getElementById('toasts')
    toastList.appendChild(toast)

    setTimeout(function(){
        toast.style='slide_hide 2s ease forwards'
    },4000)
    setTimeout(function(){
        toast.remove()
    },6000)
}