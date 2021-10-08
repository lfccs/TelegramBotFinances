class collection extends Map{
   
    get(key) {
        return super.get(key)
    }

    set(key, value){
        return super.set(key, value)
    }

    delete(key){
        return super.delete(key)
    }

    clear(){
        return super.clear()
    }
    
    has(key){
        return super.has(key)
    }

    size(){
        return super.size
    }

}

module.exports = collection