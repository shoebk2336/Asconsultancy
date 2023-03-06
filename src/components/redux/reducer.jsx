const init={
    lang:"English"
}

const Reducer=(state=init,{type})=>{
    switch(type){
        case"Marathi":{
            return({lang:"Marathi"})
        }
        case"English":{
            return({lang:"English"})
        }
        default:{return state}
    }
}

export default Reducer