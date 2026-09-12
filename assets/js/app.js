
const cl = console.log;

function snackBar(msg, icon){
    Swal.fire({
        title : msg,
        icon : icon,
        timer : 3000
    })
}

//API Call : : async (Non blocking)
function hrCall(){
    setTimeout(() => {
        let success = Math.random() >= .5;
        if(success){
            cl("condidate is shortlisted for 1st round!!!")
            firstInterview()
        }else{
            cl("looking for new candidate")
        }
        
    },700 )
}
hrCall()

function firstInterview(){
    setTimeout(() => {
        let success = Math.random() >= .5;
        if (success){
            cl( 'condidate is shortlisted for 2nd round!!!')
            secondInterview()
        }else{
            cl('condidate very poor in basics!!!')
        }
        
    }, 900)
}

function secondInterview(){
    setTimeout(() => {
    let success = Math.random() >= .5;
    if (success){
        let res ='candidate is shortlisted for 3rd round!!!'
        cl(res)
        finalInterview()
    }else{
        let err ='candidate is very very poor to write to code'
        cl(err)
    }
    
   },800)
}

function finalInterview(){
    setTimeout(() => {
        let success = Math.random() >= .5;
        if (success){
            let res = 'condidate  is selected for give profile'
            snackBar(res, 'success')
        }else{
            let err = 'condedidate  not  able to explain his/her project '
            snackBar(err, 'error')
        }
    },700)
}